// All controller functions for the dictionary database.

import { dbConn } from './db-connect.mjs';
import * as query from './db-queries.mjs';

// Gets all words from dictionary and their contents
export async function dicEveryWord() {
  const db = await dbConn;
  return db.all(query.everyWord);
}

// Gets a random word from dictionary and its contents
export async function dicRandWord() {
  const db = await dbConn;
  return db.get(query.randWord);
}

// Gets all words of a specific category from dictionary and their contents
export async function dicEveryWordCat(cat) {
  const db = await dbConn;
  return db.all(query.everyWordCat, cat);
}

// Gets a random word of a specific category from dictionary and its contents
export async function dicRandWordCat(cat) {
  const db = await dbConn;
  return db.get(query.randWordCat, cat);
}

// Gets a specific searched word from the dictionary and its contents
export async function dicWordInfo(word) {
  const db = await dbConn;
  return db.get(query.wordInfo, word);
}
