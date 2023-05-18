// Initialises the database.

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function initDB() {
  const db = await open({
    filename: 'database.sqlite',
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationsPath: './database/migrations-sqlite' });
  return db;
}

export const dbConn = initDB();
