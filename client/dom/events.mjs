// Groups all event functions into 1 apply event function.

import { gameEvents } from '../game/hangman.mjs';
import { sidebarEvents } from '../game/sidebar.mjs';

export function applyEvents() {
  gameEvents();
  sidebarEvents();
}
