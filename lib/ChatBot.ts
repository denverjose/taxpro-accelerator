
import OpenAI from "openai";
import config from "../env-config";

const revalidate = 0;

export class ChatBot {
    // Your existing properties remain the same
    private assistant_id: string;
    public threadId: string | null;
    public userMessage: string | null;
    private openai: OpenAI | null;
    private TPXChatBot: any;
    private thread: any;

    constructor(_userMessage: string | null) {
        this.assistant_id = config.OPENAI_ASSISTANT_ID;
        this.threadId = null;
        this.userMessage = _userMessage;
        this.openai = null;
        this.TPXChatBot = null;
        this.thread = null;
        this.createChatBot();
    }

    // Your existing methods remain the same

    private async createChatBot(): Promise<void> {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        try {
            this.TPXChatBot = await this.openai.beta.assistants.retrieve(this.assistant_id);
            // console.log("ChatBot", this.TPXChatBot.id, "\n", this.userMessage, "\n");
        } catch (error) {
            console.error("Error retrieving assistant:", error);
        }
    }

    public async startThreadWithMessage(_userMessage: string, initialThreadID: string | null): Promise<string[]>{
        let response = "";

        this.userMessage = _userMessage;

        if (!this.openai) {
            await this.createChatBot();
        }

        if (this.threadId === null) {
            try {
                if(initialThreadID !== null){
                    this.threadId = initialThreadID;
                    console.log(`Existing thread ----> ${this.threadId}`);
                } else {
                    this.thread = await this.openai?.beta.threads.create();
                    this.threadId = this.thread?.id;
                    this.userMessage = _userMessage;
                    console.log(`New thread created ----> ${this.thread?.id}`);
                }

            } catch (error) {
                console.error("Error creating new thread:", error);
            }
        }

        if (this.threadId !== null) {
            // console.log(`User message ----> ${this.userMessage}`);
            try {
                await this.openai?.beta.threads.messages.create(this.threadId, {
                    role: "user",
                    content: this.userMessage,
                });

                const createRun = await this.openai?.beta.threads.runs.create(
                    this.threadId,
                    { assistant_id: this.TPXChatBot.id }
                );

                let run = await this.openai?.beta.threads.runs.retrieve(
                    this.threadId,
                    // @ts-ignore
                    createRun.id
                );

                while (run?.completed_at === null) {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    run = await this.openai?.beta.threads.runs.retrieve(
                        this.threadId,
                        // @ts-ignore
                        createRun.id
                    );
                }

                const messages = await this.openai?.beta.threads.messages.list(this.threadId);
                const lastMessage = messages?.data[0];
                // @ts-ignore
                // console.log(`Assistant lastMessage: ${lastMessage}`);

                response = lastMessage?.content[0].text.value;
                // console.log(response)

                // Here we parse the response and return the generated HTML
                const parsedHTML = this.parseResponseToHTML(response);
                response = parsedHTML;
                return [response, this.threadId as string];

            } catch (error: any) {
                console.error("Error creating message:", error);
                return [error.message];
            }
        }
        return [response, this.threadId! as string];
    }

    private parseResponseToHTML(response: string): string {
        // Split response by lines to handle lists or plain text
        // console.log(response)
        const lines = response.split("\n");
        // console.log(lines.length)
    
        let isOrderedList = false;
        let isUnorderedList = false;
        let html = "";
    
        lines.forEach((line, index) => {
            const trimmedLine = line.trim();
            // if (index === lines.length - 1) console.log(line)
            
            // console.log(line)
            // Skip empty lines
            if (!trimmedLine) return;
        
            // Check for ordered list items (starting with "1.", "2.", etc.)
            if (/^(\d+)\.\s+\*\*(.*)\*\*/.test(trimmedLine)) {
                // Close unordered list if one is open
                if (isUnorderedList) {
                    html += "</ul>";
                    isUnorderedList = false
                }
        
                // If not currently in an ordered list, start a new one
                if (!isOrderedList) {
                    html += `<ol style="margin-bottom: 10px; margin-top:10px">`;
                    isOrderedList = true;
                }
        
                // Capture the number and the bold text separately
                const listItemText = trimmedLine.replace(/^(\d+)\.\s+\*\*(.*)\*\*/, "<strong>$1. $2</strong>");
                html += `<li style="margin-bottom: 5px;">${listItemText}<ul style="margin-bottom: 5px;">`;
                isUnorderedList = true; // Prepare for unordered sublist
            }
            // Check for unordered list items (starting with "-" or "*")
            else if (/^[-*]\s+/.test(trimmedLine)) {
                html += `<li>${trimmedLine.replace(/^[*]\s+/, '')}</li>`;
            } else {
                // Close any open lists if plain text is found
                if (isUnorderedList) {
                    html += "</ul></li>"; // Close both the unordered list and the <li>
                    isUnorderedList = false;
                }
                if (isOrderedList) {
                    html += "</ol>";
                    isOrderedList = false;
                }
                index === lines.length - 1 ? html += `<p>${trimmedLine}</p>` :  html += `<p style="margin-bottom: 10px;">${trimmedLine}</p>`
                
            }
        });
        
        // Close any remaining open lists
        if (isUnorderedList) {
            html += "</ul></li>"; // Close the last <ul> and its parent <li>
        }
        if (isOrderedList) {
            html += "</ol>";
        }
    
        return html;
    }
}

export default ChatBot;