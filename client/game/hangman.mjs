// Code for the main hangman game.

// Imports
import { el } from '../main.mjs';
import { SELECTED_WORD, getWordCat, showSelectedCat } from './categories.mjs';
import { updateSettings } from './settings.mjs';

// Globals
let RUNNING = true;
let TURN_COUNT = 0;
let IN_WORD = [];
let OUT_WORD = [];
let WORD_INFO = [];

// Initilise audio
function audio() {
  const audio = new Audio();
  audio.src = './sounds/tap.wav';
  audio.play();
}

// Creates virtual keyboard
function prepBtns(arr, pos, func) {
  for (let i = 0; i < arr.length; i += 1) {
    const btn = document.createElement('button');
    btn.addEventListener('click', func);
    btn.classList.add('letterBtn');
    btn.id = arr[i];
    btn.textContent = arr[i];
    pos.append(btn);
  }
}

function createBtns() {
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  prepBtns(vowels, el.vowelPos, btnGameUpdate);
  prepBtns(consonants, el.consonantPos, btnGameUpdate);
  el.btnKeyboard = document.querySelectorAll('.letterBtn');
}

// Updates the guessing word as virtual keys or keyboard pressed
function btnGameUpdate(e) {
  const letter = e.target.id;
  e.target.disabled = true;
  prepGameUpdate(letter);
}

function keysGameUpdate(e) {
  if (!(e.keyCode >= 65 && e.keyCode <= 90)) return;
  let letter = e.key;
  letter = letter.toLowerCase();
  if (IN_WORD.includes(letter) || OUT_WORD.includes(letter)) return;
  const linkedBtn = document.querySelector(`#${letter}`);
  linkedBtn.disabled = true;
  prepGameUpdate(letter);
}

function prepGameUpdate(letter) {
  if (!SELECTED_WORD.includes(letter)) {
    OUT_WORD.push(letter);
    for (let i = 0; i < OUT_WORD.length; i += 1) {
      el.hm[i].classList.remove('hide');
    }
    el.winConOut.textContent = `Incorrect Guesses Lefts: ${el.hm.length - OUT_WORD.length}`;
  } else {
    IN_WORD.push(letter);
    prepUpdateWord(letter);
  }
  checkWinCon();
}

class WordObj {
  constructor(letter, indices) {
    this.letter = letter;
    this.indices = indices;
  }

  fill(arr) {
    for (const index of this.indices) {
      arr[index] = this.letter;
    }
  }
}

function prepUpdateWord(letter) {
  const wordState = SELECTED_WORD.split('').map(letter => letter === ' ' ? ' ' : '_');
  const wordArr = SELECTED_WORD.split('');

  for (let i = 0; i < wordArr.length; i += 1) {
    if (letter !== wordArr[i]) continue;
    const exists = WORD_INFO.find(wordObj => wordObj.letter === letter);
    exists ? exists.indices.push(i) : WORD_INFO.push(new WordObj(letter, [i]));
  }

  for (const wordObj of WORD_INFO) {
    for (const index of wordObj.indices) {
      wordState[index] = wordObj.letter;
    }
  }

  el.wordOut.textContent = wordState.join('');
}

// Checks if user has won or lost
function checkWinCon() {
  TURN_COUNT += 1;
  if (el.wordOut.textContent === SELECTED_WORD) {
    el.winConOut.textContent = `You Won With ${TURN_COUNT} Guesses`;
    RUNNING = false;
  }
  if (OUT_WORD.length === el.hm.length) {
    el.winConOut.textContent = `You Lose The Words Was: ${SELECTED_WORD}`;
    RUNNING = false;
  }
  if (!RUNNING) {
    toggleBtnKeyboard(true, el.btnKeyboard);
    window.removeEventListener('keydown', keysGameUpdate);
  }
}

// Hint button
async function getHint() {
  const url = `./api/dictionary/word/${SELECTED_WORD}`;
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    const hints = [
      `Definition: ${data.definition}`,
      `Example: ${data.example}`,
    ];
    el.hint.disabled = true;
    el.hintOut.textContent = `${hints[Math.floor(Math.random() * hints.length)]}`;
  } else {
    const remainingLetters = SELECTED_WORD
      .split('')
      .filter(
        letter => letter === ' ' ? null : IN_WORD.includes(letter) ? null : letter,
      );
    const letter = remainingLetters[Math.floor(Math.random() * remainingLetters.length)];
    const btn = document.querySelector('#' + letter);
    btn.disabled = true;
    el.hint.disabled = true;
    prepGameUpdate(letter);
  }
}


// Resets game content
async function restart() {
  RUNNING = true;
  TURN_COUNT = 0;
  IN_WORD = [];
  OUT_WORD = [];
  WORD_INFO = [];
  el.winConOut.textContent = 'Start game to display remaining mistakes';
  el.hintOut.textContent = '';
  el.hint.disabled = false;
  el.hm.forEach(image => image.classList.add('hide'));
  await getWordCat();
  prepUpdateWord();
  toggleBtnKeyboard(false, el.btnKeyboard);
  if (el.toggleKeyboard.checked) {
    window.addEventListener('keydown', keysGameUpdate);
  }
}

// Enable/disable virtual keyboard
function toggleBtnKeyboard(state, btnArr) {
  for (const btn of btnArr) {
    btn.disabled = state;
  }
}

// adds events
export function gameEvents() {
  el.audioCrl.forEach(item => item.addEventListener('click', audio));
  el.playAgain.addEventListener('click', restart);
  el.hint.addEventListener('click', getHint);
  el.showHangman.addEventListener('click', restart);
  el.categories.forEach(cat => cat.addEventListener('click', showSelectedCat));
  el.settings.forEach(set => set.addEventListener('click', () => updateSettings(audio, keysGameUpdate)));
}

// Initilises game
export async function gameInit() {
  createBtns();
  await getWordCat();
  prepUpdateWord();
}
