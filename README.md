# Learn Urdu

A free Urdu learning site (no login needed), built from the Learn Bangla code. Standard Pakistani Urdu in Nastaliq script, written right to left, with an optional Roman Urdu transliteration. Built with Vite + React, React Router and Tailwind. Progress is saved in the browser (localStorage).

## Run it

```bash
npm install
npm run dev
```

## What is here (phase 1)

Two tracks, both starting from the alphabet:

- **Little Learners (5–7):** the letters in shape families, family words, numbers, colours, animals, food, body, around us, My Pakistan, greetings, and the Family conversation units. Reviews are treasure hunts.
- **Explorers (8–12):** all letters, aspirated sounds (بھ پھ…), vowel marks (zabar, zer, pesh and the long vowels), first words, vocabulary, sentences, present-tense verb patterns and the Family units.

Also working: XP, streaks and games, tracing (auto-scored), Review today (spaced repetition), Say it, the voice studio, the save code, offline audio and install-as-an-app.

**Still to write** (the files exist as empty stubs, so the features stay hidden until they have content):
the 13–15, 16–18 and 18+ tracks (`teenWords`, `teenSentences`, `teenText`, `adultText`, `conjuncts`), story chats (`stories.js`), Super challenges (`super/*`), Explore Pakistan (`explore.js`, `bdMap.js`) and the Playbook (`playbook/*`). `scripts/lint-stories.mjs` and `scripts/lint-super.mjs` still check Bangla rules and need porting with that content.

## How the curriculum is organised

```
src/data/alphabet.js       letters in shape families (with their spoken names), vowel marks, aspirates
src/data/words.js          word lists by topic
src/data/sentences.js      sentences and present-tense verb patterns
src/data/family.js         Family unit: phrases, آپ / تم practice, conversations
src/curriculum/bank.js     the content bank: every item gets a stable id
src/curriculum/tracks.js   tracks → units → lessons (lists of item ids)
src/curriculum/exercises.js  generates each lesson's practice from its items
```

The Urdu text lives in a field called `bn` (the name is kept from Learn Bangla so the shared code did not have to change).

Urdu-specific details:

- `.font-urdu` text uses Noto Nastaliq Urdu and takes its direction from its first letter (`unicode-bidi: plaintext`), so Urdu lines run right to left inside the English interface. Urdu letters inside English sentences use a slightly larger "Urdu Inline" face (`src/index.css`).
- A letter on its own is spoken by its name (ب → بے), from `name` in `alphabet.js` (`src/audio/norm.js`).
- Typing answers ignore vowel marks and accept Arabic-keyboard variants of ی ک ہ.
- Stroke guides are generated from the font (right to left, body first) and stay hidden until approved on `/review/strokes`.

**Reviewing content:** open `/review`, mark each item, then use *Copy corrections* or *Download as JSON*.

**Address rules** (Family unit): the child (Sara) says آپ to every elder; elders say تم to the child; Sara says تم to friends (Ali, Hina). Check with `npm run lint:family`.

## Audio

```bash
pip install edge-tts
npm run audio            # voice ur-PK-UzmaNeural; skips files that already exist
```

To use real recordings, replace a file in `public/audio` with your own mp3 of the same name, or record in the voice studio (`/studio`).
