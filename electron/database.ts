import path from 'path';
import { app } from 'electron';
import isDev from 'electron-is-dev';
import Database from 'better-sqlite3';

const dbPath = isDev ? path.join(__dirname, '../gratitudes.db') : path.join(app.getPath('userData'), 'gratitudes.db');

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS gratitudes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    gratitude TEXT
  )  
`);

export const databaseApi = {
  getGratitudes: (date: string) => {
    const query = db.prepare('SELECT * FROM gratitudes WHERE date = ?');
    return query.all(date);
  },
  addGratitude: (date: string, gratitude: string) => {
    const query = db.prepare('INSERT INTO gratitudes (date, gratitude) VALUES (?, ?)');
    const result = query.run(date, gratitude);
    return {
      id: result.lastInsertRowid,
      date,
      gratitude
    };
  },
  deleteGratitude: (id: number) => {
    const query = db.prepare('DELETE FROM gratitudes WHERE id = ?');
    query.run(id);
  }
};

export default db;
