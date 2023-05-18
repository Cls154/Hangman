// Initialises the game.

import { getHandles } from './dom/handlers.mjs';
import { applyEvents } from './dom/events.mjs';
import { gameInit } from './game/hangman.mjs';

export const el = {};

function init() {
  getHandles(el);
  applyEvents();
  gameInit();
}

window.addEventListener('load', init);
