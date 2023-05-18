-- Up

CREATE TABLE Dictionary (
  word TEXT PRIMARY KEY,
  definition TEXT,
  example TEXT,
  category TEXT REFERENCES category(cat_id) NOT NULL
);

CREATE TABLE Category (
  cat_id TEXT PRIMARY KEY,
  cat TEXT NOT NULL UNIQUE
);

INSERT INTO Category (cat_id, cat) VALUES 
('1', 'hard'),
('2', 'country'),
('3', 'games'),
('4', 'socialmedia');

INSERT INTO Dictionary (word, definition, example, category) VALUES
(
  'affix', 
  'stick, attach, or fasten (something) to something else', 
  'panels to which he _____s copies of fine old prints', 
  '1'
),
(
  'avenue', 
  'a broad road in a town or city, typically having trees at regular intervals along its sides', 
  'tree-lined ______s surround the hotel', 
  '1'
),
(
  'awkward', 
  'causing difficulty; hard to do or deal with', 
  'some ______ questions', 
  '1'
),
(
  'beekeeper', 
  'a person who owns and breeds bees, especially for their honey', 
  '_________s are losing almost a third of their bees each winter', 
  '1'
),
(
  'boggle', 
  '(of a person or their mind) be astonished or baffled when trying to imagine something', 
  'the mind ______s at the spectacle', 
  '1'
),
( 
  'cobweb', 
  'a spiders web, especially when old and dusty.', 
  'the wooden carvings were almost obliterated by ______s', 
  '1'
),
(
  'cycle', 
  'a series of events that are regularly repeated in the same order', 
  'the recurrent _____ of harvest failure, food shortages, and price increases', 
  '1'
),
(
  'disavow', 
  'deny any responsibility or support for', 
  'the union leaders resisted pressure to _______ picket-line violence', 
  '1'
),
(
  'duplex', 
  'a residential building divided into two apartments', 
  'Both sides of the ______ are currently being rented', 
  '1'
),
(
  'equip', 
  'supply with the necessary items for a particular purpose', 
  'all bedrooms are _____ped with a colour TV', 
  '1'
),
( 
  'exodus', 
  'a mass departure of people', 
  'the annual _____ of sun-seeking Canadians to Florida', 
  '1'
),
(
  'funny', 
  'causing laughter or amusement; humorous', 
  'a _____ story', 
  '1'
),
(
  'galaxy', 
  'a system of millions or billions of stars, together with gas and dust, held together by gravitational attraction', 
  'the ______ of which the solar system is a part; the Milky Way', 
  '1'
),
(
  'gossip', 
  'casual or unconstrained conversation or reports about other people, typically involving details that are not confirmed as being true', 
  'he became the subject of much local ______', 
  '1'
),
(
  'icebox', 
  'a chilled box or cupboard for keeping something cold, especially food', 
  'all samples were kept in an ______ during delivery to the laboratory and the experiments were performed as soon as possible', 
  '1'
),
( 
  'injury', 
  'an instance of being damaged', 
  'she suffered an ______ to her back', 
  '1'
),
( 
  'ivory', 
  'a hard creamy-white substance composing the main part of the tusks of an elephant, walrus, or narwhal, often (especially formerly) used to make ornaments and other articles', 
  'a dagger with an _____ handle', 
  '1'
),
( 
  'jackpot', 
  'a large cash prize in a game or lottery, especially one that accumulates until it is won', 
  'she won the ______', 
  '1'
),
(
  'jelly', 
  'a fruit-flavoured dessert made by warming and then cooling a liquid containing gelatin or a similar setting agent in a mould or dish so that it sets into a semi-solid, somewhat elastic mass', 
  'a bowl of _____ and custard', 
  '1'
),
(
  'jockey', 
  'a person who rides in horse races, especially as a profession', 
  'a former champion ______', 
  '1'
),
(
  'joking', 
  'humorous or flippant', 
  'a ______ manner', 
  '1'
),
(
  'joyful', 
  'feeling, expressing, or causing great pleasure and happiness', 
  'listening to ______ music', 
  '1'
),
(
  'jumbo', 
  'a very large person or thing', 
  'a _____ pad', 
  '1'
),
(
  'kayak', 
  'a canoe of a type used originally by the Inuit, made of a light frame with a watertight covering having a small opening in the top to sit in', 
  'they _____ed across vast bodies of water', 
  '1'
),
( 
  'khaki', 
  'a strong cotton or wool fabric of a dull brownish-yellow colour, used especially in military clothing', 
  'he was dressed from head to toe in _____', 
  '1'
),
( 
  'kiosk', 
  'a small open-fronted hut or cubicle from which newspapers, refreshments, tickets, etc. are sold', 
  'The programme appears to have had the greatest impact on shops and _____s', 
  '1'
),
(
  'lengths', 
  'the measurement or extent of something from end to end; the greater of two or the greatest of three dimensions of an object', 
  'the delta is twenty kilometres in _____', 
  '1'
),
( 
  'lucky', 
  'having, bringing, or resulting from good luck', 
  'you had a very _____ escape', 
  '1'
),
( 
  'luxury', 
  'a state of great comfort or elegance, especially when involving great expense', 
  'he lived a life of ______', 
  '1'
),
(
  'lymph', 
  'a colourless fluid containing white blood cells, which bathes the tissues and drains through the lymphatic system into the bloodstream', 
  'The _____ gland is located in the neck', 
  '1'
),
(
  'nightclub', 
  'an entertainment venue that is open from the evening until early morning, having facilities such as a bar and disco or other entertainment', 
  'The group wents to the _________', 
  '1'
),
(
  'onyx', 
  'a semi-precious variety of agate with different colours in layers', 
  'an ____ ashtray', 
  '1'
),
(
  'ovary', 
  'a female reproductive organ in which ova or eggs are produced, present in humans and other vertebrates as a pair', 
  'Over the next five years, the _____ produces viable eggs, which the team extracts and fertilizes on a regular basis', 
  '1'
),
( 
  'pyjamas', 
  'a loose-fitting jacket and trousers for sleeping in', 
  'a pair of _______', 
  '1'
),
( 
  'pneumonia', 
  'lung inflammation caused by bacterial or viral infection, in which the air sacs fill with pus and may become solid', 
  'The doctor diagnosed him with _________', 
  '1'
),
( 
  'pshaw', 
  'an expression of contempt or impatience', 
  'Poison? _____! The very idea!', 
  '1'
),
(
  'puppy', 
  'a young dog', 
  'The family loves the _____ they adopted', 
  '1'
),
( 
  'scratch', 
  'score or mark the surface of (something) with a sharp or pointed object', 
  'the cars paintwork was battered and _______ed', 
  '1'
),
(
  'staff', 
  'all the people employed by a particular organization', 
  'a _____ of 600', 
  '1'
),
( 
  'stretch', 
  '(of something soft or elastic) be made or be capable of being made longer or wider without tearing or breaking', 
  'my jumper _______ed in the wash', 
  '1'
),
(
  'united kingdom', 
  'A country located in Europe', 
  'We decided to take a trip to ______ _______', 
  '2'
),
(
  'china', 
  'A country located in Asia', 
  'We decided to take a trip to _____', 
  '2'
),
(
  'germany', 
  'A country located in Europe', 
  'We decided to take a trip to _______', 
  '2'
),
(
  'america', 
  'This country has the 4th highest percentage of world landmass', 
  'We decided to take a trip to _______', 
  '2'
),
(
  'austrilia', 
  'This country has the 6th highest percentage of world landmass', 
  'We decided to take a trip to _________', 
  '2'
),
(
  'russia', 
  'This country had a population of 144.1 million in 2020', 
  'We decided to take a trip to ______', 
  '2'
),
(
  'minecraft', 
  'A popular game coded in java', 
  'Do you want to play _________', 
  '3'
),
(
  'league of legends', 
  'A popular MOBA game', 
  'Do you want to play ______ __ _______', 
  '3'
),
(
  'mortal kombat', 
  'This game is similar to Street Fighter', 
  'Do you want to play ______ ______', 
  '3'
),
( 
  'bloons tower defense', 
  'The genre of this game is: Tower Defence', 
  'Do you want to play ______ _____ _______', 
  '3'
),
(
  'counter strike global offense', 
  'A popular FPS game', 
  'Do you want to play _______ ______ ______ _______', 
  '3'
),
(
  'warframe', 
  'This is a role-playing third-person shooter multiplayer game', 
  'Do you want to play ________', 
  '3'
),
(
  'twitter', 
  'A blue bird', 
  'They posted a group photo on ______', 
  '4'
),
( 
  'snapchat', 
  'A yellow bell', 
  'They posted a group photo on ________', 
  '4'
),
(
  'facebook', 
  'A book of faces', 
  'They posted a group photo on ________', 
  '4'
),
(
  'instagram', 
  'A photo and video sharing platform', 
  'They posted a group photo on _________', 
  '4'
),
(
  'whatsapp', 
  'Owned by Meta Platforms', 
  'They posted a group photo on ________', 
  '4'
);

-- Down
DROP TABLE Dictionary;
DROP TABLE Category;