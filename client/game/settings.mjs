// Code associated with the settings section.

import { el } from '../main.mjs';

// Updates the settings of the game
export function updateSettings(audioFunc, keysFunc) {
  showSelectedSettings();
  toggleSounds(audioFunc);
  toggleKeyboard(keysFunc);
}

// Highlights the selected options in the settings section
function showSelectedSettings() {
  el.settings.forEach(
    set => set.checked ? set.labels[0].classList.add('selected') : set.labels[0].classList.remove('selected'),
  );
}

// Toggles clicking sounds
function toggleSounds(audioFunc) {
  if (el.toggleSounds.checked) {
    el.audioCrl.forEach(item => item.addEventListener('click', audioFunc));
  } else {
    el.audioCrl.forEach(item => item.removeEventListener('click', audioFunc));
  }
}

// Toggles physical keyboard input
function toggleKeyboard(keysFunc) {
  if (el.toggleKeyboard.checked) {
    window.addEventListener('keydown', keysFunc);
  } else {
    window.removeEventListener('keydown', keysFunc);
  }
}
