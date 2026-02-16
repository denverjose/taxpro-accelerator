
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open a database connection
export async function openDb() {
  return open({
    filename: './chatbot.db', // Path to your SQLite database file
    driver: sqlite3.Database,
  });
}

export async function createTables() {
  const db = await openDb();

  // Create Chat table with threadID and chatBot columns
  await db.exec(`
    CREATE TABLE IF NOT EXISTS Chat (
      id TEXT PRIMARY KEY,
      threadID TEXT,
      chatBotState TEXT,  -- To store the serialized state of the chatBot (optional)
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
      updatedAt TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create Message table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS Message (
      id TEXT PRIMARY KEY,
      chatId TEXT,
      sender TEXT,
      content TEXT,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (chatId) REFERENCES Chat(id)
    );
  `);

  return db;
}
