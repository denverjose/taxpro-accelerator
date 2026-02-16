
"use server";
import { ChatBot } from "../../lib/ChatBot";
import { openDb, createTables } from '../../sqlite3/chatbot';
import { v4 as uuidv4 } from 'uuid'; // to generate unique IDs for chat and messages

// Store chatbot instances and thread information
const chatBots = new Map<string, { chatBot: ChatBot, initialThreadID: string | null }>();


// Start a new chat session (keep it simple as before)
export async function startChatAction() {

  const db = await createTables();
  const chatId = uuidv4(); // Generate a unique chat ID

  // Insert a new chat into the SQLite Chat table (no threadID for now)
  await db.run(`
    INSERT INTO Chat (id, createdAt, updatedAt)
    VALUES (?, datetime('now'), datetime('now'))
  `, [chatId]);

  const chatBot = new ChatBot(null); // Initialize a new ChatBot instance
  chatBots.set(chatId, { chatBot, initialThreadID: null }); // Store the chatbot with null threadID initially

  return chatId; // Return the generated chat ID
}

export async function sendMessageAction(chatId: string, message: string) {
  const db = await openDb();
  let chatData = chatBots.get(chatId);

  // console.log("message", message);

  if (!chatData) {
    // Search the database for a chat entry with the given chatId and retrieve threadID
    const chat = await db.get(`SELECT threadID FROM Chat WHERE id = ?`, [chatId]);

    if (!chat || !chat.threadID) {
      // If no matching chatId or threadID is found, throw an error
      console.log(chat)
      console.log(chat.threadID)
      // throw new Error("ChatBot not found for the given chatId.");
    }

    // If a matching chatId is found, create a new ChatBot instance with the retrieved threadID
    const chatBot = new ChatBot(null); // Pass the threadID to the ChatBot constructor
    chatData = { chatBot, initialThreadID: chat.threadID }; // Store the initial threadID
    chatBots.set(chatId, chatData);  // Store the new ChatBot instance in the in-memory map
  }

  const { chatBot, initialThreadID } = chatData;  // Retrieve the chatbot and current threadID (could be null)

  // Sanitize user input
  const sanitizedMessage = message.replace(/<[^>]+>/g, '');

  // Save the user's message to the SQLite Message table
  await db.run(`
    INSERT INTO Message (id, chatId, sender, content, createdAt)
    VALUES (?, ?, ?, ?, datetime('now'))
  `, [uuidv4(), chatId, 'User', sanitizedMessage]);

  try {
    // Pass the current threadID to the chatbot and continue the conversation
    // console.log("sanitizedMessage", sanitizedMessage);

    const [response, threadID] = await chatBot.startThreadWithMessage(sanitizedMessage, initialThreadID);

    // Save the chatbot's response to the SQLite Message table
    await db.run(`
      INSERT INTO Message (id, chatId, sender, content, createdAt)
      VALUES (?, ?, ?, ?, datetime('now'))
    `, [uuidv4(), chatId, 'Assistant', response]);

    // Update the threadID in the database and in-memory if it changes
    if (initialThreadID !== threadID) {
      await db.run(`
        UPDATE Chat
        SET threadID = ?, updatedAt = datetime('now')
        WHERE id = ?
      `, [threadID, chatId]);

      // Update the in-memory storage with the new threadID
      chatBots.set(chatId, { chatBot, initialThreadID: threadID });
    }

    return response; // Return the chatbot's response
  } catch (error) {
    console.error("Error processing chatbot message:", error);
    return "There was an error processing your request.";
  }
}


// Terminate a chat session and delete the chat data
export async function terminateChatAction(chatId: string) {
  const db = await openDb();

  // Remove the chatbot from memory
  chatBots.delete(chatId);

  // Delete the chat and associated messages from the SQLite database
  // await db.run(`DELETE FROM Chat WHERE id = ?`, [chatId]);
  // await db.run(`DELETE FROM Message WHERE chatId = ?`, [chatId]);

  return "Chat terminated.";
}
