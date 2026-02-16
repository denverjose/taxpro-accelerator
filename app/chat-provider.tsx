
"use client";
import React, { createContext, useState, useEffect } from "react";
import {
  startChatAction,
  sendMessageAction,
  terminateChatAction,
} from "./actions/chatbot-actions";
import { initialMessage } from "@/lib/constants/chatbot-constants";

interface ChatContextType {
  chatId: string | null;
  chatHistory: { sender: string; text: string }[];
  isBotTyping: boolean;
  startChat: () => Promise<void>;
  sendMessage: (message: string) => Promise<void>;
  closeChat: () => void; // New closeChat function added to context
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chatId, setChatId] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);
  const [isBotTyping, setBotTyping] = useState<boolean>(false);
  const [chatStarted, setChatStarted] = useState<boolean>(false);

  // Function to start a new chat session
  const startChat = async () => {
    if (!chatStarted) {
      const newChatId = await startChatAction();
      setChatId(newChatId);
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "Assistant",
          text: initialMessage,
        },
      ]);
      setChatStarted(true);
    }
  };

  // Function to send a message in an active chat session
  const sendMessage = async (message: string) => {
    if (chatId) {
      // Add user's message to chat history
      setChatHistory((prev) => [...prev, { sender: "User", text: message }]);
      setBotTyping(true);

      // Fetch the assistant's response
      const response = await sendMessageAction(chatId, message);
      setBotTyping(false);

      if (response) {
        // Add assistant's response to chat history
        setChatHistory((prev) => [...prev, { sender: "Assistant", text: response }]);
      }
    } else {
      console.error("ChatBot ID not found.");
    }
  };

  // Function to close chat session, clear state, and reset chat
  const closeChat = async () => {
    if (chatId) {
      await terminateChatAction(chatId); // Optionally terminate the chat on the server
    }
    setChatId(null); // Clear chat ID
    setChatHistory([]); // Clear chat history
    setChatStarted(false); // Reset the chat started state
    setBotTyping(false); // Reset bot typing state
  };

  return (
    <ChatContext.Provider
      value={{ chatId, chatHistory, isBotTyping, startChat, sendMessage, closeChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};
