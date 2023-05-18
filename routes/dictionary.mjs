// Fetching data from the dictionary database.

import express from 'express';
import * as db from '../database/db-controllers.mjs';

export const router = express.Router();

// Gets all words from dictionary and their contents
async function getEveryWord(req, res) {
  res.json(await db.dicEveryWord());
}

// Gets a random word from dictionary and its contents
async function getEveryWordRand(req, res) {
  res.json(await db.dicRandWord());
}

// Gets a specific searched word from dictionary and its contents
async function getWordInfo(req, res) {
  res.json(await db.dicWordInfo(req.params.word));
}


// Gets all words of a specific category from dictionary and their contents
async function getEveryWordCat(req, res) {
  res.json(await db.dicEveryWordCat(req.params.cat));
}

// Gets a random word of a specific category from dictionary and its contents
async function getEveryWordCatRand(req, res) {
  res.json(await db.dicRandWordCat(req.params.cat));
}

router.get('/', getEveryWord);
router.get('/word', getEveryWordRand);
router.get('/word/:word', getWordInfo);
router.get('/categories/:cat', getEveryWordCat);
router.get('/categories/:cat/word', getEveryWordCatRand);
