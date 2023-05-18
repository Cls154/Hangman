// All database queries

export const everyWord = 'SELECT * FROM Dictionary;';
export const randWord = 'SELECT * FROM Dictionary ORDER BY RANDOM() LIMIT 1;';
export const everyWordCat = 'SELECT * FROM Dictionary WHERE category = ?;';
export const randWordCat = 'SELECT * FROM Dictionary WHERE category = ? ORDER BY RANDOM() LIMIT 1;';
export const wordInfo = 'SELECT * FROM Dictionary WHERE word = ?;';
