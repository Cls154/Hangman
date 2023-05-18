**Key Features**: 
- Sidebar: Press the sidebar button in the top left to toggle the options tab.
- Categories: Selecting the various category option will make the hangman game provide only words associated with that    category.
- Settings: Toggle button sounds and keyboard input.
- Hint Button: Fetches the guessing words definition or it used in sentence (without showing the word) from the database, if this fails it will randomly input a correct letter into the guessing word.

- SQLite Database: Contains words with their assisoiated definition, example and category number.

- Dictionary API: 
  1. */api/dictionary/* gets all avaliable words with their contents (definition, example and its category number).
  2. */api/dictionary/word* gets a single random word and its contents from dictionary.
  3. */api/dictionary/word/:word* gets the specific searched word and its contents from the dictionary.
  4. */api/dictionary/categories/:cat* gets all words in the dictionary with specific searched category.
  5. */api/dictionary/categories/:cat/word* gets single random word and its contents from a specific searched category from the dictionary.


**Design & Implementation Rationale**:
- Virtual Keyboard split into vowels and consonants for user convenience as vowels are usually selected first during a hangman game.
- Sidebar used for user convenience to have all possible configurable options in 1 place.


**Unfinished / Future Work**:
- Having multiple categories selected at once.
- Putting text-based content into a seperate file/s and configuring the code to enable language configuration.
- Making font and image size configurable while still maintaining a sense of responsiveness. 
- Scaling the page so it fully fits the whole screen without any need of scrolling.


**References**
- Google Fonts. (2019). Google Fonts. https://fonts.google.com
- Font Awesome. (n.d.). Fontawesome.com. https://fontawesome.com


**Running the Code**
  1. Run `npm i` to download dependencies.
  2. Run `npm start` to bring the server online.