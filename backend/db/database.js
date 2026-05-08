const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'knuckle_sandwich.db');
const db = new sqlite3.Database(dbPath);

const initializeDatabase = async () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Users table
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          password_hash TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Reports table (for M2, basic structure for M1)
      db.run(`
        CREATE TABLE IF NOT EXISTS reports (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER,
          incident_type TEXT,
          description TEXT,
          urgency_level TEXT,
          routing_option TEXT,
          is_anonymous BOOLEAN DEFAULT 0,
          name TEXT,
          submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id)
        )
      `, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  });
};

const getDatabase = () => db;

module.exports = { db, initializeDatabase, getDatabase };
