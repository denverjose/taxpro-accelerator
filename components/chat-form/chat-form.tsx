"use client";
import { useContext, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChatContext } from "@/app/chat-provider"; // Make sure this path is correct
import { botName } from "@/lib/constants/chatbot-constants";

const ChatForm: React.FC = () => {
  const chatContext = useContext(ChatContext);

  if (!chatContext) {
    throw new Error("ChatForm must be used within a ChatProvider");
  }

  const { chatHistory, isBotTyping, startChat, sendMessage, closeChat } =
    chatContext;

  const [isChatboxOpen, setChatboxOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  // Automatically scroll to the bottom of the chat history
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  const handleCloseChatbox = () => {
    setChatboxOpen(false);
    closeChat(); // Call closeChat to clear chat state and reset session
  };

  const handleMinimizeChatbox = () => {
    setChatboxOpen((prev) => !prev);
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") return;
    setMessage(""); // Clear the input after sending the message
    await sendMessage(message);
  };

  return (
    <div>
      {/* Button to start the chat */}
      <div className="fixed bottom-5 right-5 z-30 rounded-full bg-white">
        <motion.button
          /* @ts-ignore */
          initial={{ "--x": "100%", scale: 1 }}
          /* @ts-ignore */
          animate={{ "--x": "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
              type: "spring",
              stiffness: 10,
              damping: 5,
              mass: 0.1,
            },
          }}
          onClick={() => {
            startChat();
            setChatboxOpen(true);
          }}
          className="transition flex items-center py-1 px-3 rounded-full relative radial-gradient linear-mask bg-background-calendly shadow-sm shadow-white hover:bg-background-calendly-hover"
        >
          <div className="flex items-center gap-2 text-bot-text">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M320 0c17.7 0 32 14.3 32 32v64h120c39.8 0 72 32.2 72 72v272c0 39.8-32.2 72-72 72H176c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72h120V32c0-17.7 14.3-32 32-32zm-112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm-128-128a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224h16v192H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16V224h16z"
              />
            </svg>
            <div className="flex flex-col items-start h-full w-full relative">
              <span className="font-bold text-sm">Chat with {botName}</span>
              <span className="italic text-[10px] font-semibold">
                Powered by OpenAI
              </span>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Chatbox UI */}
      <div
        id="chat-container"
        className={`fixed bottom-5 right-4 w-72 md:w-80 text-sm z-30 ${
          isChatboxOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-background-chatform-header text-white rounded-t-lg flex justify-between items-center">
            <p className="text-base font-semibold">{botName}</p>
            <div className="flex items-center justify-center relative">
              <button
                onClick={handleMinimizeChatbox}
                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32-14.3 32 32z"
                  />
                </svg>
              </button>
              <button
                onClick={handleCloseChatbox} // Close and reset the chatbox
                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="chatbox"
            className="p-4 max-h-[70vh] overflow-y-scroll bg-background-chatform"
          >
            {/* <div id="chatbox" className="p-4 max-h-[300px] min-h-64 overflow-y-auto bg-background-chatform"> */}
            <div className="space-y-2">
              {/* Chat history */}
              {chatHistory.map((chat: any, index: any) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    chat.sender === "User" ? "text-right" : "text-left"
                  }`}
                >
                  {/* text-left so it stays the messages on left side on each message */}
                  {/* 09-16-2024 */}
                  <div
                    className={`rounded-lg py-2 px-4 inline-block max-w-[90%] text-left ${
                      chat.sender === "User"
                        ? "bg-background-chatform-userchat text-white"
                        : "bg-background-chatform-botchat text-gray-700"
                    }`}
                  >
                    <strong>
                      {chat.sender === "User" ? "You" : botName}:{" "}
                    </strong>
                    <span
                      className="chatbot-link"
                      dangerouslySetInnerHTML={{ __html: chat.text }}
                    ></span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isBotTyping && (
                <div className="mb-2 text-left ml-2 flex items-center gap-1">
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse delay-400"></div>
                </div>
              )}
              <div ref={endOfMessagesRef} />
            </div>
          </div>

          {/* Input form for sending messages */}
          <form
            className="p-4 border-t flex"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:border-border-chatform-input text-black bg-white placeholder-gray-500"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              className="bg-background-chatform-button text-white px-4 py-2 rounded-r-md hover:bg-background-chatform-button-hover transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatForm;
