// "Family" unit: everyday conversations at home. Standard Pakistani Urdu.
//
// Address rules used throughout (same as Learn Bangla's, to be confirmed by the content owner):
//   • The child (Sara) says آپ to ALL elders — Ammi, Abbu, Nana, Dada, Nani, Chacha…
//   • Elders say تم to the child.
//   • Sara says تم to her friends (Ali, Hina).
// Sara is a girl, so her verbs end in -ی (میں آ رہی ہوں، کروں گی).
// Each line: [speakerId, bn, roman, en, art?]   (bn = the Urdu; art = picture cue, used in the 5–7 track)

export const roster = {
  t: { bn: 'سارہ', en: 'Sara', emoji: '🧒', me: true },
  am: { bn: 'امی', en: 'Ammi', emoji: '👩' },
  ab: { bn: 'ابو', en: 'Abbu', emoji: '👨' },
  nana: { bn: 'نانا', en: 'Nana', emoji: '👴' },
  nani: { bn: 'نانی', en: 'Nani', emoji: '👵' },
  dada: { bn: 'دادا', en: 'Dada', emoji: '👴' },
  ch: { bn: 'چچا', en: 'Chacha', emoji: '🧔' },
  fr: { bn: 'علی', en: 'Ali', emoji: '🧑' },
  nila: { bn: 'حنا', en: 'Hina', emoji: '👧' },
  shop: { bn: 'دکاندار', en: 'Shopkeeper', emoji: '🧑‍🌾' },
  dr: { bn: 'ڈاکٹر', en: 'Doctor', emoji: '👨‍⚕️' },
  old: { bn: 'بزرگ', en: 'Elderly man', emoji: '👴' },
}

const L = (who, bn, roman, en, art) => ({ who, bn, roman, en, art })

export const ADDRESS_TIP =
  'We say آپ to every elder — Ammi, Abbu, Nana, Dada, Nani, uncles and aunts. Elders say تم to children, and you say تم to friends.'

// ---- Everyday phrases (taught before the conversations) -----------------------------------
const P = (bn, roman, en) => ({ bn, roman, en })

export const phrases = {
  young: [
    P('السلام علیکم', 'assalaam-o-alaikum', 'Peace be upon you (greeting)'),
    P('وعلیکم السلام', 'wa-alaikum-assalaam', 'And peace be upon you (reply)'),
    P('بسم اللہ', 'bismillah', 'In the name of Allah (said before eating)'),
    P('الحمد للہ', 'alhamdulillah', 'Praise be to Allah'),
    P('ان شاء اللہ', 'in shaa\'allah', 'God willing'),
    P('اللہ حافظ', 'allah haafiz', 'Goodbye (may Allah protect you)'),
  ],
  older: [
    P('السلام علیکم', 'assalaam-o-alaikum', 'Peace be upon you (greeting)'),
    P('وعلیکم السلام', 'wa-alaikum-assalaam', 'And peace be upon you (reply)'),
    P('بسم اللہ', 'bismillah', 'In the name of Allah (said before eating)'),
    P('الحمد للہ', 'alhamdulillah', 'Praise be to Allah'),
    P('ان شاء اللہ', 'in shaa\'allah', 'God willing'),
    P('ماشاء اللہ', 'maa shaa\'allah', 'As Allah has willed (what a wonderful thing!)'),
    P('جزاک اللہ', 'jazaak allah', 'May Allah reward you (a thank-you)'),
    P('اللہ حافظ', 'allah haafiz', 'Goodbye (may Allah protect you)'),
    P('آمین', 'aameen', 'Ameen'),
    P('عید مبارک', 'eid mubaarak', 'Eid Mubarak'),
    P('دعا کیجیے گا', 'dua kijiye ga', 'Please pray for me (said to an elder)'),
  ],
}

// ---- آپ or تم? ------------------------------------------------------------------------------------
// Young: pick the pronoun for each person. Older: pick the right sentence.
// Older pairs are bank items (so they are reviewed and get audio): { right, wrong }.
export const politeYoung = [
  { title: 'What do you say to your Nana?', art: '👴', who: 'Nana', right: 'آپ' },
  { title: 'What do you say to your Ammi?', art: '👩', who: 'Ammi', right: 'آپ' },
  { title: 'What do you say to your friend Ali?', art: '🧑', who: 'Ali', right: 'تم' },
  { title: 'What do you say to your Dada?', art: '👴', who: 'Dada', right: 'آپ' },
  { title: 'Nana is talking to you. What does Nana say?', art: '👴', who: 'Nana to you', right: 'تم' },
  { title: 'What do you say to your Abbu?', art: '👨', who: 'Abbu', right: 'آپ' },
]

export const politeOlder = [
  {
    title: 'You ask your Nana how he is. What do you say?',
    art: '👴',
    right: P('آپ کیسے ہیں؟', 'aap kaise hain?', 'How are you? (respectful)'),
    wrong: [P('تم کیسے ہو؟', 'tum kaise ho?', 'How are you?')],
    existing: true,
  },
  {
    title: 'You ask Abbu for some water. What do you say?',
    art: '👨',
    right: P('ابو، مجھے تھوڑا پانی دیں گے؟', 'Abbu, mujhe thoṛa paani dein ge?', 'Abbu, will you give me a little water?'),
    wrong: [P('ابو، مجھے تھوڑا پانی دو۔', 'Abbu, mujhe thoṛa paani do.', 'Abbu, give me a little water. (too casual)')],
  },
  {
    title: 'You ask your friend Ali to play. What do you say?',
    art: '🧑',
    right: P('علی، تم کھیلو گے؟', 'Ali, tum khelo ge?', 'Ali, will you play?'),
    wrong: [P('علی، آپ کھیلیں گے؟', 'Ali, aap khelein ge?', 'Ali, will you play? (too formal)')],
  },
  {
    title: 'You invite Dada to sit down. What do you say?',
    art: '👴',
    right: P('دادا جان، آپ بیٹھیں۔', 'Daada jaan, aap baiṭhein.', 'Dada, please sit down.'),
    wrong: [P('دادا جان، تم بیٹھو۔', 'Daada jaan, tum baiṭho.', 'Dada, sit down. (too casual)')],
  },
  {
    title: 'Nana asks if you washed your hands. What does he say?',
    art: '👴',
    right: P('تم نے ہاتھ دھوئے؟', 'tum ne haath dhoye?', 'Did you wash your hands?'),
    wrong: [P('آپ نے ہاتھ دھوئے؟', 'aap ne haath dhoye?', 'Did you wash your hands? (to an elder)')],
  },
  {
    title: 'You ask Nani if she has eaten. What do you say?',
    art: '👵',
    right: P('نانی جان، آپ نے کھانا کھا لیا؟', 'Naani jaan, aap ne khaana kha liya?', 'Nani, have you eaten?'),
    wrong: [P('نانی جان، تم نے کھانا کھا لیا؟', 'Naani jaan, tum ne khaana kha liya?', 'Nani, have you eaten? (too casual)')],
  },
]

// ---- Conversations --------------------------------------------------------------------------------
// young: 4 short lines with picture cues.  older: 6–7 line conversations.
const S = (key, title, emoji, young, older) => ({ key, title, emoji, young, older })

const allScenes = [
  // ===================================== MORNINGS =====================================
  S('wake', 'Good Morning!', '⏰',
    [
      L('am', 'سارہ، اٹھ جاؤ۔ صبح ہو گئی۔', 'Sara, uṭh jaao. Subh ho gayi.', 'Sara, wake up. It is morning.', '⏰'),
      L('t', 'السلام علیکم، امی۔', 'Assalaam-o-alaikum, Ammi.', 'Peace be upon you, Ammi.', '👋'),
      L('am', 'وعلیکم السلام۔ جلدی سے منہ دھو لو۔', 'Wa-alaikum-assalaam. Jaldi se munh dho lo.', 'And peace be upon you. Quickly wash your face.', '🚿'),
      L('t', 'جی، امی۔', 'Ji, Ammi.', 'Yes, Ammi.', '✅'),
    ],
    [
      L('am', 'سارہ، اٹھ جاؤ بیٹی۔ سات بج گئے ہیں۔', 'Sara, uṭh jaao beṭi. Saat baj gaye hain.', "Sara, wake up, dear. It's seven o'clock."),
      L('t', 'امی، بس پانچ منٹ اور۔', 'Ammi, bas paanch minaṭ aur.', 'Ammi, just five more minutes.'),
      L('am', 'نہیں، اسکول کو دیر ہو جائے گی۔', 'Nahin, school ko der ho jaaegi.', 'No, you will be late for school.'),
      L('t', 'اچھا، میں اٹھ رہی ہوں۔ السلام علیکم، امی۔', 'Achchha, main uṭh rahi hoon. Assalaam-o-alaikum, Ammi.', "OK, I'm getting up. Peace be upon you, Ammi."),
      L('am', 'وعلیکم السلام۔ جلدی سے منہ ہاتھ دھو لو۔', 'Wa-alaikum-assalaam. Jaldi se munh haath dho lo.', 'And peace be upon you. Quickly wash your face and hands.'),
      L('t', 'امی، آپ نے ناشتہ بنا لیا؟', 'Ammi, aap ne naashta bana liya?', 'Ammi, have you made breakfast?'),
      L('am', 'ہاں، پراٹھا تیار ہے۔', 'Haan, paraaṭha tayyaar hai.', 'Yes, the paratha is ready.'),
    ]),
  S('ready', 'Ready for School', '🎒',
    [
      L('ab', 'سارہ، تمہارا بستہ کہاں ہے؟', 'Sara, tumhaara basta kahaan hai?', 'Sara, where is your school bag?', '🎒'),
      L('t', 'ابو، یہ رہا۔', 'Abbu, yeh raha.', 'Abbu, here it is.', '👉'),
      L('ab', 'شاباش! جوتے پہن لو۔', 'Shaabaash! Joote pehan lo.', 'Well done! Put your shoes on.', '👟'),
      L('t', 'جی، ابو۔', 'Ji, Abbu.', 'Yes, Abbu.', '✅'),
    ],
    [
      L('ab', 'سارہ، تیار ہو گئیں؟ ہمیں آٹھ بجے نکلنا ہے۔', 'Sara, tayyaar ho gayeen? Hamein aaṭh baje nikalna hai.', 'Sara, are you ready? We have to leave at eight.'),
      L('t', 'جی ابو، بس جوتے پہن رہی ہوں۔', 'Ji Abbu, bas joote pehan rahi hoon.', "Yes Abbu, I'm just putting my shoes on."),
      L('ab', 'تمہارا بستہ اور پانی کی بوتل کہاں ہے؟', 'Tumhaara basta aur paani ki botal kahaan hai?', 'Where are your school bag and water bottle?'),
      L('t', 'بستہ یہاں ہے، لیکن بوتل نہیں مل رہی۔', 'Basta yahaan hai, lekin botal nahin mil rahi.', "The bag is here, but I can't find the bottle."),
      L('ab', 'وہ میز پر رکھی ہے۔', 'Woh mez par rakhi hai.', "It's on the table."),
      L('t', 'مل گئی! شکریہ، ابو۔ آپ گاڑی میں انتظار کریں۔', 'Mil gayi! Shukriya, Abbu. Aap gaaṛi mein intezaar karein.', 'Found it! Thank you, Abbu. Please wait in the car.'),
    ]),

  // ===================================== SCHOOL DAYS =====================================
  S('home', 'Home from School', '🏠',
    [
      L('am', 'سارہ، اسکول کیسا رہا؟', 'Sara, school kaisa raha?', 'Sara, how was school?', '🏫'),
      L('t', 'بہت اچھا، امی!', 'Bohat achchha, Ammi!', 'Very good, Ammi!', '😄'),
      L('am', 'ہاتھ دھو لو۔ کھانا تیار ہے۔', 'Haath dho lo. Khaana tayyaar hai.', 'Wash your hands. Lunch is ready.', '🧼'),
      L('t', 'جی، ابھی آئی۔', 'Ji, abhi aayi.', 'OK, coming right now.', '🏃'),
    ],
    [
      L('t', 'السلام علیکم، امی! میں آ گئی۔', 'Assalaam-o-alaikum, Ammi! Main aa gayi.', "Peace be upon you, Ammi! I'm home."),
      L('am', 'وعلیکم السلام، بیٹی۔ آج اسکول کیسا رہا؟', 'Wa-alaikum-assalaam, beṭi. Aaj school kaisa raha?', 'And peace be upon you, dear. How was school today?'),
      L('t', 'بہت اچھا۔ آج ہم نے سائنس میں پودے لگائے۔', 'Bohat achchha. Aaj hum ne science mein paude lagaaye.', 'Very good. Today we planted plants in science.'),
      L('am', 'واہ! کیا تمہیں ہوم ورک ملا ہے؟', 'Waah! Kya tumhein home work mila hai?', 'Wow! Did you get homework?'),
      L('t', 'جی، ریاضی کا۔ میں کھانے کے بعد کر لوں گی۔', 'Ji, riyaazi ka. Main khaane ke baad kar loon gi.', "Yes, maths. I'll do it after lunch."),
      L('am', 'ٹھیک ہے۔ پہلے ہاتھ دھو لو۔', 'Ṭheek hai. Pehle haath dho lo.', 'All right. Wash your hands first.'),
    ]),
  S('friend', 'A Good Friend', '🧑‍🤝‍🧑',
    [
      L('fr', 'سارہ، کیا تم میرے ساتھ کھیلو گی؟', 'Sara, kya tum mere saath khelo gi?', 'Sara, will you play with me?', '⚽'),
      L('t', 'ہاں علی، ضرور!', 'Haan Ali, zaroor!', 'Yes Ali, of course!', '😄'),
      L('fr', 'چلو، گیند پکڑو!', 'Chalo, gend pakṛo!', 'Come on, catch the ball!', '🏐'),
      L('t', 'پکڑ لی!', 'Pakaṛ li!', 'Caught it!', '🙌'),
    ],
    [
      L('fr', 'سارہ، تم کل اسکول کیوں نہیں آئیں؟', 'Sara, tum kal school kyun nahin aaeen?', "Sara, why didn't you come to school yesterday?"),
      L('t', 'مجھے بخار تھا۔ اب میں ٹھیک ہوں۔', 'Mujhe bukhaar tha. Ab main ṭheek hoon.', 'I had a fever. Now I am fine.'),
      L('fr', 'اللہ کا شکر ہے۔ کیا تمہیں ہوم ورک چاہیے؟', 'Allah ka shukr hai. Kya tumhein home work chaahiye?', 'Thank God. Do you need the homework?'),
      L('t', 'ہاں، مہربانی ہو گی۔ تمہارے پاس نوٹس ہیں؟', 'Haan, mehrbaani hogi. Tumhaare paas notes hain?', 'Yes, that would be kind. Do you have the notes?'),
      L('fr', 'ہاں، میں تمہیں اپنی کاپی دے دیتا ہوں۔', 'Haan, main tumhein apni kaapi de deta hoon.', "Yes, I'll give you my exercise book."),
      L('t', 'شکریہ علی، تم بہت اچھے دوست ہو۔', 'Shukriya Ali, tum bohat achchhe dost ho.', 'Thank you Ali, you are a very good friend.'),
    ]),

  // ===================================== FOOD & KITCHEN =====================================
  S('meal', 'Dinner Time', '🍛',
    [
      L('am', 'کھانا تیار ہے۔ آ جاؤ!', 'Khaana tayyaar hai. Aa jaao!', 'Food is ready. Come!', '🍛'),
      L('t', 'بسم اللہ۔', 'Bismillah.', 'In the name of Allah.', '🤲'),
      L('am', 'دال اور روٹی کھاؤ۔', 'Daal aur roṭi khaao.', 'Eat the lentils and roti.', '🫓'),
      L('t', 'بہت مزے کی ہے، امی!', 'Bohat maze ki hai, Ammi!', "It's very tasty, Ammi!", '😋'),
    ],
    [
      L('am', 'سارہ، کھانا لگ گیا ہے۔ سب کو بلا لو۔', 'Sara, khaana lag gaya hai. Sab ko bula lo.', 'Sara, the food is on the table. Call everyone.'),
      L('t', 'ابو، دادا جان، کھانا تیار ہے!', 'Abbu, Daada jaan, khaana tayyaar hai!', 'Abbu, Dada, the food is ready!'),
      L('dada', 'آ رہا ہوں، بیٹی۔ آج کیا پکا ہے؟', 'Aa raha hoon, beṭi. Aaj kya paka hai?', "Coming, dear. What's been cooked today?"),
      L('t', 'آلو گوشت اور چاول۔ دادا جان، آپ بیٹھیں۔', 'Aaloo gosht aur chaawal. Daada jaan, aap baiṭhein.', 'Meat with potatoes, and rice. Dada, please sit.'),
      L('dada', 'شاباش۔ پہلے بسم اللہ پڑھو۔', 'Shaabaash. Pehle bismillah paṛho.', 'Well done. First say Bismillah.'),
      L('t', 'بسم اللہ۔ امی، بہت مزے کا ہے!', 'Bismillah. Ammi, bohat maze ka hai!', "Bismillah. Ammi, it's delicious!"),
    ]),
  S('bazar', 'At the Market', '🛒',
    [
      L('ab', 'چلو، بازار چلیں۔', 'Chalo, baazaar chalein.', "Come on, let's go to the market.", '🛒'),
      L('shop', 'آم لیں، میٹھے آم!', 'Aam lein, meeṭhe aam!', 'Buy mangoes, sweet mangoes!', '🥭'),
      L('t', 'ابو، آم لے لیں؟', 'Abbu, aam le lein?', 'Abbu, shall we buy mangoes?', '🙏'),
      L('ab', 'ہاں، ایک کلو لے لیتے ہیں۔', 'Haan, ek kilo le lete hain.', "Yes, let's get a kilo.", '⚖️'),
    ],
    [
      L('shop', 'آئیے صاحب، کیا چاہیے؟', 'Aaiye saahab, kya chaahiye?', 'Come in, sir. What would you like?'),
      L('ab', 'ایک کلو ٹماٹر اور آدھا کلو پیاز دے دیں۔', 'Ek kilo ṭamaaṭar aur aadha kilo pyaaz de dein.', 'Please give me a kilo of tomatoes and half a kilo of onions.'),
      L('t', 'ابو، کیا ہم آم بھی لے سکتے ہیں؟', 'Abbu, kya hum aam bhi le sakte hain?', 'Abbu, can we buy mangoes too?'),
      L('ab', 'ٹھیک ہے۔ بھائی، آم کتنے کے ہیں؟', 'Ṭheek hai. Bhaai, aam kitne ke hain?', 'All right. Brother, how much are the mangoes?'),
      L('shop', 'دو سو روپے کلو۔ بہت میٹھے ہیں!', 'Do sau rupay kilo. Bohat meeṭhe hain!', "Two hundred rupees a kilo. They're very sweet!"),
      L('t', 'شکریہ، ابو! آپ سب سے اچھے ہیں۔', 'Shukriya, Abbu! Aap sab se achchhe hain.', "Thank you, Abbu! You're the best."),
    ]),

  // ===================================== PRAYER & RAMADAN =====================================
  S('masjid', 'To the Mosque', '🕌',
    [
      L('ab', 'چلو، مسجد چلیں۔', 'Chalo, masjid chalein.', "Come on, let's go to the mosque.", '🕌'),
      L('t', 'ابو، میں وضو کر لوں؟', 'Abbu, main wuzu kar loon?', 'Abbu, shall I do wudu?', '💧'),
      L('ab', 'ہاں، شاباش۔', 'Haan, shaabaash.', 'Yes, well done.', '👍'),
      L('t', 'میں تیار ہوں!', 'Main tayyaar hoon!', "I'm ready!", '✅'),
    ],
    [
      L('ab', 'سارہ، عصر کی اذان ہو گئی۔ مسجد چلو گی؟', 'Sara, asr ki azaan ho gayi. Masjid chalo gi?', 'Sara, the call to the afternoon prayer has been made. Will you come to the mosque?'),
      L('t', 'جی ابو، میں وضو کر کے آتی ہوں۔', 'Ji Abbu, main wuzu kar ke aati hoon.', "Yes Abbu, I'll do wudu and come."),
      L('ab', 'دوپٹہ بھی لے لینا۔', 'Dupaṭṭa bhi le lena.', 'Take your dupatta too.'),
      L('t', 'جی۔ ابو، کیا ہم جماعت سے نماز پڑھیں گے؟', 'Ji. Abbu, kya hum jamaa\'at se namaaz paṛhein ge?', 'Yes. Abbu, will we pray in congregation?'),
      L('ab', 'ہاں، خواتین کا حصہ اوپر ہے۔', 'Haan, khawaateen ka hissa oopar hai.', "Yes, the women's section is upstairs."),
      L('t', 'ٹھیک ہے۔ نماز کے بعد میں آپ کا انتظار کروں گی۔', 'Ṭheek hai. Namaaz ke baad main aap ka intezaar karoon gi.', "OK. I'll wait for you after the prayer."),
    ]),
  S('iftar', 'Iftar', '🌅',
    [
      L('am', 'افطار کا وقت ہو گیا!', 'Iftaar ka waqt ho gaya!', "It's time to break the fast!", '🌅'),
      L('t', 'امی، کھجور کہاں ہے؟', 'Ammi, khajoor kahaan hai?', 'Ammi, where are the dates?', '🌴'),
      L('am', 'یہ لو، بیٹی۔', 'Yeh lo, beṭi.', 'Here you are, dear.', '🤲'),
      L('t', 'شکریہ، امی!', 'Shukriya, Ammi!', 'Thank you, Ammi!', '🙏'),
    ],
    [
      L('am', 'سارہ، اذان میں پانچ منٹ ہیں۔ دسترخوان لگا دو۔', 'Sara, azaan mein paanch minaṭ hain. Dastarkhwaan laga do.', 'Sara, there are five minutes until the call to prayer. Lay out the meal.'),
      L('t', 'جی امی۔ کیا میں پکوڑے بھی لے آؤں؟', 'Ji Ammi. Kya main pakoṛe bhi le aaoon?', 'Yes Ammi. Shall I bring the pakoras too?'),
      L('am', 'ہاں، اور روح افزا کا شربت بھی۔', 'Haan, aur Rooh Afza ka sharbat bhi.', 'Yes, and the Rooh Afza drink too.'),
      L('t', 'امی، آپ تھک گئی ہوں گی۔ میں مدد کرتی ہوں۔', 'Ammi, aap thak gayi hon gi. Main madad karti hoon.', 'Ammi, you must be tired. I will help.'),
      L('am', 'جیتی رہو، بیٹی۔ لو، اذان ہو رہی ہے۔', 'Jeeti raho, beṭi. Lo, azaan ho rahi hai.', 'Bless you, dear. Listen, the call to prayer is starting.'),
      L('t', 'بسم اللہ۔ پہلے کھجور سے روزہ کھولتے ہیں۔', 'Bismillah. Pehle khajoor se roza kholte hain.', 'Bismillah. First we break the fast with a date.'),
    ]),

  // ===================================== NANA, DADA & NANI =====================================
  S('nana', "Nana's Stories", '📖',
    [
      L('nana', 'سارہ، یہاں آؤ۔ کہانی سنو گی؟', 'Sara, yahaan aao. Kahaani suno gi?', 'Sara, come here. Would you like to hear a story?', '📖'),
      L('t', 'جی نانا جان، ضرور!', 'Ji Naana jaan, zaroor!', 'Yes Nana, of course!', '😄'),
      L('nana', 'ایک دفعہ کا ذکر ہے…', 'Ek dafa ka zikr hai…', 'Once upon a time…', '✨'),
      L('t', 'پھر کیا ہوا؟', 'Phir kya hua?', 'Then what happened?', '🤔'),
    ],
    [
      L('t', 'نانا جان، آپ کی چائے۔', 'Naana jaan, aap ki chaaye.', 'Nana, here is your tea.'),
      L('nana', 'جیتی رہو، بیٹی۔ بیٹھو، تمہیں ایک کہانی سناتا ہوں۔', 'Jeeti raho, beṭi. Baiṭho, tumhein ek kahaani sunaata hoon.', "Bless you, dear. Sit down, I'll tell you a story."),
      L('t', 'آپ کے بچپن کی کہانی؟', 'Aap ke bachpan ki kahaani?', 'A story from your childhood?'),
      L('nana', 'ہاں۔ جب میں تمہاری عمر کا تھا، ہم گاؤں میں رہتے تھے۔', 'Haan. Jab main tumhaari umar ka tha, hum gaaon mein rehte the.', 'Yes. When I was your age, we lived in a village.'),
      L('t', 'کیا وہاں بجلی تھی؟', 'Kya wahaan bijli thi?', 'Was there electricity there?'),
      L('nana', 'نہیں! ہم لالٹین کی روشنی میں پڑھتے تھے۔', 'Nahin! Hum laalṭain ki roshni mein paṛhte the.', 'No! We studied by the light of a lantern.'),
      L('t', 'واہ! نانا جان، اور سنائیں۔', 'Waah! Naana jaan, aur sunaaein.', 'Wow! Nana, tell me more.'),
    ]),
  S('videocall', 'A Call with Nani', '📱',
    [
      L('nani', 'السلام علیکم، سارہ!', 'Assalaam-o-alaikum, Sara!', 'Peace be upon you, Sara!', '📱'),
      L('t', 'وعلیکم السلام، نانی جان!', 'Wa-alaikum-assalaam, Naani jaan!', 'And peace be upon you, Nani!', '👋'),
      L('nani', 'تم کیسی ہو؟', 'Tum kaisi ho?', 'How are you?', '💬'),
      L('t', 'میں ٹھیک ہوں۔ آپ کیسی ہیں؟', 'Main ṭheek hoon. Aap kaisi hain?', 'I am fine. How are you?', '😊'),
    ],
    [
      L('nani', 'سارہ، میری آواز آ رہی ہے؟', 'Sara, meri aawaaz aa rahi hai?', 'Sara, can you hear me?'),
      L('t', 'جی نانی جان، اب آ رہی ہے۔ آپ کیسی ہیں؟', 'Ji Naani jaan, ab aa rahi hai. Aap kaisi hain?', 'Yes Nani, I can now. How are you?'),
      L('nani', 'اللہ کا شکر ہے۔ تمہارے امتحان کیسے ہوئے؟', 'Allah ka shukr hai. Tumhaare imtihaan kaise hue?', 'Thank God. How did your exams go?'),
      L('t', 'بہت اچھے۔ میں نے ریاضی میں پورے نمبر لیے!', 'Bohat achchhe. Main ne riyaazi mein poore number liye!', 'Very well. I got full marks in maths!'),
      L('nani', 'ماشاء اللہ! میں بہت خوش ہوں۔', "Maa shaa'allah! Main bohat khush hoon.", "Mashallah! I'm very happy."),
      L('t', 'نانی جان، آپ ہمارے پاس کب آئیں گی؟', 'Naani jaan, aap hamaare paas kab aaein gi?', 'Nani, when will you come to visit us?'),
      L('nani', 'ان شاء اللہ، عید پر آؤں گی۔', "In shaa'allah, Eid par aaoon gi.", "God willing, I'll come at Eid."),
    ]),

  // ===================================== PLAY & OUTINGS =====================================
  S('play', 'Hide and Seek', '🙈',
    [
      L('nila', 'سارہ، چھپن چھپائی کھیلیں؟', 'Sara, chhupan chhupaai khelein?', 'Sara, shall we play hide and seek?', '🙈'),
      L('t', 'ہاں حنا! تم گنتی گنو۔', 'Haan Hina! Tum ginti gino.', 'Yes Hina! You count.', '🔢'),
      L('nila', 'ایک، دو، تین…', 'Ek, do, teen…', 'One, two, three…', '1️⃣'),
      L('t', 'تم مجھے نہیں ڈھونڈ سکتیں!', 'Tum mujhe nahin ḍhoonḍ saktein!', "You can't find me!", '😆'),
    ],
    [
      L('nila', 'سارہ، چھٹی کے دن کیا کرو گی؟', 'Sara, chhuṭṭi ke din kya karo gi?', 'Sara, what will you do on the day off?'),
      L('t', 'میں سوچ رہی تھی کہ ہم پارک میں سائیکل چلائیں۔', 'Main soch rahi thi ke hum paark mein saaikal chalaaein.', 'I was thinking we could ride bikes in the park.'),
      L('nila', 'زبردست! لیکن مجھے امی سے پوچھنا ہو گا۔', 'Zabardast! Lekin mujhe ammi se poochhna hoga.', "Great! But I'll have to ask my mum."),
      L('t', 'میں بھی ابو سے اجازت لے لیتی ہوں۔', 'Main bhi abbu se ijaazat le leti hoon.', "I'll ask my dad's permission too."),
      L('nila', 'ٹھیک ہے۔ چار بجے ملتے ہیں۔', 'Ṭheek hai. Chaar baje milte hain.', "OK. Let's meet at four."),
      L('t', 'پکا! خدا حافظ، حنا۔', 'Pakka! Khuda haafiz, Hina.', 'Deal! Goodbye, Hina.'),
    ]),
  S('rain', 'Monsoon Rain', '🌧️',
    [
      L('t', 'امی، بارش ہو رہی ہے!', 'Ammi, baarish ho rahi hai!', "Ammi, it's raining!", '🌧️'),
      L('am', 'چھتری لے لو۔', 'Chhatri le lo.', 'Take an umbrella.', '☂️'),
      L('t', 'کیا میں کاغذ کی کشتی بناؤں؟', 'Kya main kaaghaz ki kashti banaaoon?', 'Shall I make a paper boat?', '⛵'),
      L('am', 'ہاں، ضرور!', 'Haan, zaroor!', 'Yes, of course!', '😄'),
    ],
    [
      L('t', 'امی، دیکھیں! زور کی بارش ہو رہی ہے۔', 'Ammi, dekhein! Zor ki baarish ho rahi hai.', "Ammi, look! It's raining hard."),
      L('am', 'ہاں، برسات شروع ہو گئی ہے۔ کھڑکی بند کر دو۔', 'Haan, barsaat shuroo ho gayi hai. Khiṛki band kar do.', 'Yes, the monsoon has started. Close the window.'),
      L('t', 'کیا میں تھوڑی دیر صحن میں بارش میں نہا لوں؟', 'Kya main thoṛi der sehan mein baarish mein naha loon?', 'Can I play in the rain in the courtyard for a little while?'),
      L('am', 'صرف دس منٹ۔ پھر کپڑے بدل لینا۔', 'Sirf das minaṭ. Phir kapṛe badal lena.', 'Only ten minutes. Then change your clothes.'),
      L('t', 'شکریہ امی! کیا آپ پکوڑے بنائیں گی؟', 'Shukriya Ammi! Kya aap pakoṛe banaaein gi?', 'Thank you Ammi! Will you make pakoras?'),
      L('am', 'ہاں، بارش میں پکوڑے تو بنتے ہیں!', 'Haan, baarish mein pakoṛe to bante hain!', 'Yes, rain always calls for pakoras!'),
    ]),

  // ===================================== CARE & MANNERS =====================================
  S('sorry', 'Saying Sorry', '😔',
    [
      L('t', 'اوہ! گلاس ٹوٹ گیا۔', 'Oh! Gilaas ṭooṭ gaya.', 'Oh! The glass broke.', '💥'),
      L('am', 'کوئی بات نہیں۔ دور رہو۔', 'Koi baat nahin. Door raho.', 'Never mind. Stay back.', '✋'),
      L('t', 'معاف کیجیے، امی۔', 'Maaf kijiye, Ammi.', "I'm sorry, Ammi.", '😔'),
      L('am', 'میں نے معاف کیا۔ احتیاط کرنا۔', 'Main ne maaf kiya. Ehtiyaat karna.', 'I forgive you. Be careful.', '🤗'),
    ],
    [
      L('t', 'ابو، مجھے آپ کو کچھ بتانا ہے۔', 'Abbu, mujhe aap ko kuchh bataana hai.', 'Abbu, I have to tell you something.'),
      L('ab', 'ہاں بیٹی، بولو۔', 'Haan beṭi, bolo.', 'Yes dear, tell me.'),
      L('t', 'مجھ سے آپ کا چشمہ گر کر ٹوٹ گیا۔', 'Mujh se aap ka chashma gir kar ṭooṭ gaya.', 'I dropped your glasses and they broke.'),
      L('ab', 'اوہ! تمہیں چوٹ تو نہیں لگی؟', 'Oh! Tumhein choṭ to nahin lagi?', "Oh! You didn't get hurt, did you?"),
      L('t', 'نہیں۔ معاف کیجیے، ابو۔ میں آئندہ احتیاط کروں گی۔', 'Nahin. Maaf kijiye, Abbu. Main aainda ehtiyaat karoon gi.', "No. I'm sorry, Abbu. I'll be careful from now on."),
      L('ab', 'سچ بتانے کا شکریہ۔ یہ زیادہ اہم ہے۔', 'Sach bataane ka shukriya. Yeh zyaada aham hai.', 'Thank you for telling the truth. That matters more.'),
    ]),
  S('bed', 'Bedtime', '🛏️',
    [
      L('am', 'سونے کا وقت ہو گیا۔', 'Sone ka waqt ho gaya.', "It's time to sleep.", '🛏️'),
      L('t', 'امی، میں نے دانت صاف کر لیے!', 'Ammi, main ne daant saaf kar liye!', "Ammi, I've brushed my teeth!", '🪥'),
      L('am', 'شاباش۔ شب بخیر۔', 'Shaabaash. Shab bakhair.', 'Well done. Good night.', '🌙'),
      L('t', 'شب بخیر، امی۔', 'Shab bakhair, Ammi.', 'Good night, Ammi.', '😴'),
    ],
    [
      L('am', 'سارہ، دس بج گئے۔ کتاب رکھ دو۔', 'Sara, das baj gaye. Kitaab rakh do.', "Sara, it's ten o'clock. Put the book down."),
      L('t', 'امی، بس یہ صفحہ ختم کر لوں۔', 'Ammi, bas yeh safha khatam kar loon.', 'Ammi, let me just finish this page.'),
      L('am', 'ٹھیک ہے۔ دانت صاف کیے؟', 'Ṭheek hai. Daant saaf kiye?', 'All right. Did you brush your teeth?'),
      L('t', 'جی، کر لیے۔ اور سونے کی دعا بھی پڑھ لی۔', 'Ji, kar liye. Aur sone ki dua bhi paṛh li.', 'Yes, I did. And I said the bedtime dua too.'),
      L('am', 'شاباش۔ اب لیٹ جاؤ۔ شب بخیر۔', 'Shaabaash. Ab leṭ jaao. Shab bakhair.', 'Well done. Now lie down. Good night.'),
      L('t', 'شب بخیر، امی۔ اللہ حافظ۔', 'Shab bakhair, Ammi. Allah haafiz.', 'Good night, Ammi. May Allah protect you.'),
    ]),
  // ===================================== MORE SCENES (phase 2) =====================================
  S('tiffin', 'The Lunchbox', '🍱',
    [
      L('am', 'یہ تمہارا ٹفن ہے۔', 'Yeh tumhaara ṭifin hai.', 'This is your lunchbox.', '🍱'),
      L('t', 'امی، اس میں کیا ہے؟', 'Ammi, is mein kya hai?', 'Ammi, what is in it?', '🤔'),
      L('am', 'انڈا، روٹی اور ایک سیب۔', 'Anḍa, roṭi aur ek seb.', 'An egg, roti and an apple.', '🍎'),
      L('t', 'واہ! شکریہ، امی۔', 'Waah! Shukriya, Ammi.', 'Wow! Thank you, Ammi.', '😋'),
    ],
    [
      L('am', 'سارہ، ٹفن بستے میں رکھ لیا؟', 'Sara, ṭifin baste mein rakh liya?', 'Sara, have you put your lunchbox in your bag?'),
      L('t', 'ابھی نہیں، امی۔ آج کیا بنایا ہے؟', 'Abhi nahin, Ammi. Aaj kya banaaya hai?', 'Not yet, Ammi. What have you made today?'),
      L('am', 'آلو کا پراٹھا اور تھوڑا سا اچار۔', 'Aaloo ka paraaṭha aur thoṛa sa achaar.', 'A potato paratha and a little pickle.'),
      L('t', 'میرا پسندیدہ! کیا میں حنا کے لیے بھی ایک لے جاؤں؟', 'Mera pasandeeda! Kya main Hina ke liye bhi ek le jaaoon?', 'My favourite! Can I take one for Hina too?'),
      L('am', 'ضرور۔ بانٹ کر کھانا اچھی بات ہے۔', 'Zaroor. Baanṭ kar khaana achchhi baat hai.', 'Of course. Sharing food is a good thing.'),
      L('t', 'شکریہ امی! اللہ حافظ۔', 'Shukriya Ammi! Allah haafiz.', 'Thank you, Ammi! Goodbye.'),
    ]),
  S('homework', 'Homework Help', '📒',
    [
      L('ab', 'سارہ، ہوم ورک کر لیا؟', 'Sara, home work kar liya?', 'Sara, have you done your homework?', '📒'),
      L('t', 'ابو، یہ سوال مشکل ہے۔', 'Abbu, yeh sawaal mushkil hai.', 'Abbu, this question is hard.', '😟'),
      L('ab', 'آؤ، مل کر کرتے ہیں۔', 'Aao, mil kar karte hain.', "Come, let's do it together.", '🤝'),
      L('t', 'شکریہ، ابو!', 'Shukriya, Abbu!', 'Thank you, Abbu!', '🙏'),
    ],
    [
      L('ab', 'سارہ، آج کا ہوم ورک کیا ہے؟', 'Sara, aaj ka home work kya hai?', "Sara, what is today's homework?"),
      L('t', 'ابو، اردو میں ایک کہانی لکھنی ہے۔', 'Abbu, Urdu mein ek kahaani likhni hai.', 'Abbu, I have to write a story in Urdu.'),
      L('ab', 'بہت اچھا! کس کے بارے میں لکھو گی؟', 'Bohat achchha! Kis ke baare mein likho gi?', 'Very good! What will you write about?'),
      L('t', 'ہماری بلی کے بارے میں۔ کیا آپ املا دیکھ لیں گے؟', 'Hamaari billi ke baare mein. Kya aap imla dekh lein ge?', 'About our cat. Will you check the spelling?'),
      L('ab', 'ہاں، لیکن پہلے خود کوشش کرو۔', 'Haan, lekin pehle khud koshish karo.', 'Yes, but try by yourself first.'),
      L('t', 'جی ابو، ختم کر کے آپ کو دکھاتی ہوں۔', 'Ji Abbu, khatam kar ke aap ko dikhaati hoon.', "Yes Abbu, I'll show you when I've finished."),
    ]),
  S('cook', 'Cooking with Ammi', '🍳',
    [
      L('am', 'آؤ، آٹا گوندھیں۔', 'Aao, aaṭa goondhein.', "Come, let's knead the dough.", '🫓'),
      L('t', 'امی، میں بھی کروں؟', 'Ammi, main bhi karoon?', 'Ammi, can I do it too?', '🙋'),
      L('am', 'ہاں، پہلے ہاتھ دھو لو۔', 'Haan, pehle haath dho lo.', 'Yes, wash your hands first.', '🧼'),
      L('t', 'دیکھیں، میری روٹی گول ہے!', 'Dekhein, meri roṭi gol hai!', 'Look, my roti is round!', '⭕'),
    ],
    [
      L('am', 'سارہ، آج میری مدد کرو گی؟ ہم بریانی بنا رہے ہیں۔', 'Sara, aaj meri madad karo gi? Hum biryaani bana rahe hain.', "Sara, will you help me today? We're making biryani."),
      L('t', 'جی امی! میں کیا کروں؟', 'Ji Ammi! Main kya karoon?', 'Yes Ammi! What shall I do?'),
      L('am', 'پیاز اور ٹماٹر دھو دو۔ چھری میں چلاؤں گی۔', 'Pyaaz aur ṭamaaṭar dho do. Chhuri main chalaaoon gi.', "Wash the onions and tomatoes. I'll use the knife."),
      L('t', 'دھو لیے۔ اب چاول بھی دھو دوں؟', 'Dho liye. Ab chaawal bhi dho doon?', 'Done. Shall I wash the rice now too?'),
      L('am', 'ہاں، اور پھر آدھا گھنٹہ بھگو دو۔', 'Haan, aur phir aadha ghanṭa bhigo do.', 'Yes, and then soak it for half an hour.'),
      L('t', 'امی، خوشبو بہت اچھی آ رہی ہے!', 'Ammi, khushboo bohat achchhi aa rahi hai!', 'Ammi, it smells wonderful!'),
    ]),
  S('eid', 'Eid Mubarak!', '🌙',
    [
      L('t', 'عید مبارک، ابو!', 'Eid mubaarak, Abbu!', 'Eid Mubarak, Abbu!', '🌙'),
      L('ab', 'عید مبارک، بیٹی! یہ لو، تمہاری عیدی۔', 'Eid mubaarak, beṭi! Yeh lo, tumhaari eidi.', 'Eid Mubarak, dear! Here is your Eidi.', '💵'),
      L('t', 'شکریہ، ابو! اللہ آپ کو خوش رکھے۔', 'Shukriya, Abbu! Allah aap ko khush rakhe.', 'Thank you, Abbu! May Allah keep you happy.', '🙏'),
      L('ab', 'چلو، دادی کو سلام کرنے چلیں۔', 'Chalo, daadi ko salaam karne chalein.', "Come, let's go and greet Dadi.", '👵'),
    ],
    [
      L('am', 'سارہ، جلدی تیار ہو جاؤ۔ عید کی نماز کا وقت ہو رہا ہے۔', 'Sara, jaldi tayyaar ho jaao. Eid ki namaaz ka waqt ho raha hai.', "Sara, get ready quickly. It's nearly time for the Eid prayer."),
      L('t', 'امی، میرے نئے کپڑے کیسے لگ رہے ہیں؟', 'Ammi, mere naye kapṛe kaise lag rahe hain?', 'Ammi, how do my new clothes look?'),
      L('am', 'ماشاء اللہ، بہت پیاری لگ رہی ہو!', "Maa shaa'allah, bohat pyaari lag rahi ho!", 'Mashallah, you look lovely!'),
      L('t', 'شکریہ! امی، کیا نماز کے بعد ہم نانی کے گھر جائیں گے؟', 'Shukriya! Ammi, kya namaaz ke baad hum naani ke ghar jaaein ge?', "Thank you! Ammi, will we go to Nani's house after the prayer?"),
      L('am', 'ہاں، اور شام کو سب کزن یہاں آئیں گے۔', 'Haan, aur shaam ko sab kazan yahaan aaein ge.', 'Yes, and in the evening all the cousins will come here.'),
      L('t', 'واہ! عید مبارک، امی!', 'Waah! Eid mubaarak, Ammi!', 'Wow! Eid Mubarak, Ammi!'),
    ]),
  S('dada', "Dada's Garden", '🌹',
    [
      L('dada', 'سارہ، پودوں کو پانی دو گی؟', 'Sara, paudon ko paani do gi?', 'Sara, will you water the plants?', '🪴'),
      L('t', 'جی دادا جان!', 'Ji Daada jaan!', 'Yes, Dada!', '💧'),
      L('dada', 'دیکھو، گلاب کھل گیا!', 'Dekho, gulaab khil gaya!', 'Look, the rose has bloomed!', '🌹'),
      L('t', 'کتنا خوبصورت ہے!', 'Kitna khoobsoorat hai!', 'How beautiful it is!', '😍'),
    ],
    [
      L('dada', 'سارہ، آؤ، باغ میں میری مدد کرو۔', 'Sara, aao, baagh mein meri madad karo.', 'Sara, come and help me in the garden.'),
      L('t', 'جی دادا جان۔ آج ہم کیا لگائیں گے؟', 'Ji Daada jaan. Aaj hum kya lagaaein ge?', 'Yes, Dada. What will we plant today?'),
      L('dada', 'ٹماٹر اور مرچ کے پودے۔ مٹی میں چھوٹے گڑھے بناؤ۔', 'Ṭamaaṭar aur mirch ke paude. Miṭṭi mein chhoṭe gaṛhe banaao.', 'Tomato and chilli plants. Make small holes in the soil.'),
      L('t', 'دادا جان، آپ نے باغبانی کہاں سے سیکھی؟', 'Daada jaan, aap ne baaghbaani kahaan se seekhi?', 'Dada, where did you learn gardening?'),
      L('dada', 'اپنے ابا سے، گاؤں میں۔ اب میں تمہیں سکھا رہا ہوں۔', 'Apne abba se, gaaon mein. Ab main tumhein sikha raha hoon.', "From my father, in the village. Now I'm teaching you."),
      L('t', 'پھر ایک دن میں بھی کسی کو سکھاؤں گی۔', 'Phir ek din main bhi kisi ko sikhaaoon gi.', 'Then one day I will teach someone too.'),
    ]),
  S('cricket', 'Cricket Match', '🏏',
    [
      L('fr', 'سارہ، کرکٹ کھیلو گی؟', 'Sara, krikeṭ khelo gi?', 'Sara, will you play cricket?', '🏏'),
      L('t', 'ہاں! میں بیٹنگ کروں گی۔', 'Haan! Main baiṭing karoon gi.', "Yes! I'll bat.", '🙋'),
      L('fr', 'یہ لو، گیند آ رہی ہے!', 'Yeh lo, gend aa rahi hai!', 'Here comes the ball!', '⚾'),
      L('t', 'چھکا!', 'Chhakka!', 'A six!', '🎉'),
    ],
    [
      L('fr', 'سارہ، کل اسکول میں کرکٹ میچ ہے۔ تم ہماری ٹیم میں ہو گی؟', 'Sara, kal school mein krikeṭ maich hai. Tum hamaari ṭeem mein ho gi?', "Sara, there's a cricket match at school tomorrow. Will you be on our team?"),
      L('t', 'ضرور! لیکن مجھے بولنگ اچھی نہیں آتی۔', 'Zaroor! Lekin mujhe bauling achchhi nahin aati.', "Of course! But I'm not good at bowling."),
      L('fr', 'کوئی بات نہیں، تم اچھی بیٹنگ کرتی ہو۔', 'Koi baat nahin, tum achchhi baiṭing karti ho.', "Never mind, you're a good batter."),
      L('t', 'چلو، آج شام پارک میں پریکٹس کریں؟', 'Chalo, aaj shaam paark mein praikṭis karein?', 'Shall we practise in the park this evening?'),
      L('fr', 'ہاں! میں حنا کو بھی بلا لیتا ہوں۔', 'Haan! Main Hina ko bhi bula leta hoon.', "Yes! I'll ask Hina to come too."),
      L('t', 'زبردست! پانچ بجے ملتے ہیں۔', 'Zabardast! Paanch baje milte hain.', 'Great! See you at five.'),
    ]),
  S('doctor', 'At the Doctor', '🩺',
    [
      L('dr', 'کیا ہوا، بیٹی؟', 'Kya hua, beṭi?', 'What happened, dear?', '🩺'),
      L('t', 'میرے پیٹ میں درد ہے۔', 'Mere peṭ mein dard hai.', 'My tummy hurts.', '🤕'),
      L('dr', 'یہ دوائی لو۔ جلد ٹھیک ہو جاؤ گی۔', 'Yeh dawaai lo. Jald ṭheek ho jaao gi.', "Take this medicine. You'll be better soon.", '💊'),
      L('t', 'شکریہ، ڈاکٹر صاحب۔', 'Shukriya, Ḍaakṭar saahab.', 'Thank you, Doctor.', '🙏'),
    ],
    [
      L('dr', 'السلام علیکم، سارہ۔ کیا تکلیف ہے؟', 'Assalaam-o-alaikum, Sara. Kya takleef hai?', "Peace be upon you, Sara. What's the trouble?"),
      L('t', 'وعلیکم السلام۔ ڈاکٹر صاحب، مجھے دو دن سے بخار ہے۔', 'Wa-alaikum-assalaam. Ḍaakṭar saahab, mujhe do din se bukhaar hai.', "And peace be upon you. Doctor, I've had a fever for two days."),
      L('dr', 'منہ کھولو اور "آ" کہو۔ ہاں، گلا خراب ہے۔', 'Munh kholo aur "aa" kaho. Haan, gala kharaab hai.', 'Open your mouth and say "aah". Yes, your throat is sore.'),
      L('t', 'کیا مجھے انجکشن لگے گا؟', 'Kya mujhe injekshan lage ga?', 'Will I have to have an injection?'),
      L('dr', 'نہیں، بس یہ شربت دن میں تین بار پینا۔', 'Nahin, bas yeh sharbat din mein teen baar peena.', 'No, just drink this syrup three times a day.'),
      L('t', 'شکریہ، ڈاکٹر صاحب۔ آپ بہت اچھے ہیں۔', 'Shukriya, Ḍaakṭar saahab. Aap bohat achchhe hain.', 'Thank you, Doctor. You are very kind.'),
    ]),
]

export const scenes = {
  young: allScenes.map((s) => ({ key: s.key, title: s.title, emoji: s.emoji, lines: s.young })),
  older: allScenes.map((s) => ({ key: s.key, title: s.title, emoji: s.emoji, lines: s.older })),
}

// The Family conversations are split into themed units (all titled "Family: …").
// `scenes` lists scene keys in teaching order; the first unit also holds the phrases and آپ/تم lessons.
const layout = [
  { key: 'morning', title: 'Family: Mornings', emoji: '⏰', blurb: 'Waking up, getting ready, the lunchbox', scenes: ['wake', 'ready', 'tiffin'] },
  { key: 'school', title: 'Family: School Days', emoji: '🎒', blurb: 'Coming home, homework and friends', scenes: ['home', 'homework', 'friend'] },
  { key: 'food', title: 'Family: Food & Kitchen', emoji: '🍛', blurb: 'Meals, cooking and the market', scenes: ['meal', 'cook', 'bazar'] },
  { key: 'prayer', title: 'Family: Prayer & Ramzan', emoji: '🕌', blurb: 'The mosque, iftar and Eid', scenes: ['masjid', 'iftar', 'eid'] },
  { key: 'elders', title: 'Family: Nana, Dada & Nani', emoji: '👴', blurb: 'Stories, the garden and calls with grandparents', scenes: ['nana', 'dada', 'videocall'] },
  { key: 'play', title: 'Family: Play & Outings', emoji: '⚽', blurb: 'Hide and seek, the monsoon and cricket', scenes: ['play', 'rain', 'cricket'] },
  { key: 'care', title: 'Family: Care & Manners', emoji: '🤝', blurb: 'Sorry, the doctor and bedtime', scenes: ['sorry', 'doctor', 'bed'] },
]
export const unitLayout = { young: layout, older: layout }
