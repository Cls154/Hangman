// Code associated with the category section.

import { el } from '../main.mjs';

export let SELECTED_WORD = null;

// Highlights which category is selected
export function showSelectedCat() {
  el.categories.forEach(
    cat => cat.checked ? cat.labels[0].classList.add('selected') : cat.labels[0].classList.remove('selected'),
  );
}

// Assigns a word to SELECTED_WORD according to which category selected
export async function getWordCat() {
  for (let i = 0; i < el.categories.length; i += 1) {
    if (!el.categories[i].checked) continue;
    switch (el.categories[i].id) {
      case 'catAll':
        await fetchAll();
        break;
      case 'catHard':
        await fetchByCategory('1');
        break;
      case 'catCountry':
        await fetchByCategory('2');
        break;
      case 'catGame':
        await fetchByCategory('3');
        break;
      case 'catSocials':
        await fetchByCategory('4');
        break;
    }
  }
}

async function fetchAll() {
  const url = './api/dictionary/word';
  await fetchWord(url);
}

async function fetchByCategory(category) {
  const url = `./api/dictionary/categories/${category}/word`;
  await fetchWord(url);
}

async function fetchWord(url) {
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    SELECTED_WORD = data.word;
  } else {
    console.log('error');
  }
}
