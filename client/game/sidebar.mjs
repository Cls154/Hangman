// Code associated with the sidebar.

import { el } from '../main.mjs';

// Open and closes sidebar
function toggleSidebar() {
  el.sidebar.classList.toggle('closeState');
  el.sidebar.classList.toggle('openState');
  el.openBar.classList.toggle('sliderOpenState');
  el.openBar.classList.toggle('sliderCloseState');
}

// Toggle between different pages
function togglePages() {
  for (const display of el.displays) {
    if (display.checked) {
      el.optionTitle.textContent = display.labels[0].textContent;
      display.labels[0].classList.add('selected');
    } else {
      display.labels[0].classList.remove('selected');
    }
  }

  el.gameContainer.classList.toggle('hide', !el.showHangman.checked);
  el.catContainer.classList.toggle('hide', !el.showCat.checked);
  el.settingsContainer.classList.toggle('hide', !el.showSettings.checked);
}

// Adds sidebar events
export function sidebarEvents() {
  el.openBar.addEventListener('click', toggleSidebar);
  el.closeBar.addEventListener('click', toggleSidebar);
  el.displays.forEach(display => display.addEventListener('click', togglePages));
}
