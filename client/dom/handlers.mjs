// Create a function that gets a handle on all elements

export function getHandles(el) {
  const nodelistIds = document.querySelectorAll('[id]');
  for (const elem of nodelistIds) {
    el[elem.id] = elem;
  }

  el.hm = document.querySelectorAll('.hm');
  el.displays = document.querySelectorAll('.displays');
  el.categories = document.querySelectorAll('.cat');
  el.settings = document.querySelectorAll('.set');
  el.audioCrl = document.querySelectorAll('.audioCrl');
}
