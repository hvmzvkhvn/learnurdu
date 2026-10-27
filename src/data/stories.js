// Branching story chats. Standard Pakistani Urdu. (The 13+ stories come with those tracks.)
//
// A story is a graph of nodes, played as a text-message conversation:
//   say(...)     an NPC message         ask(...)   the learner picks a reply (each option can move the meter)
//   sys(...)     English narration      branch(...) jumps to an ending by meter score
//   end(...)     an ending card
// Address rules: the learner says آپ to every elder and shopkeeper, تم to friends; elders say تم to the learner.
// The learner may be a boy or a girl, so their replies avoid gendered verb endings (no کرتا / کرتی, گا / گی):
// they use مجھے…, questions like میں پانی لاؤں؟ and plain statements instead.
// `place.older` is the 8–12 unit the story is inserted into (see curriculum/tracks.js).
const sys = (en, next) => ({ sys: en, next })
const say = (who, bn, roman, en, next) => ({ who, bn, roman, en, next })
const o = (bn, roman, en, meter, next) => ({ bn, roman, en, meter, next })
const ask = (...options) => ({ choice: options })
const branch = (...rules) => ({ branch: rules })
const end = (title, emoji, en, tier) => ({ end: { title, emoji, en, tier } })

export const stories = [
  // ============================================ 8–12 ============================================
  {
    id: 'mithai', tracks: ['older'], place: { older: 'o-numbers' }, title: 'At the Sweet Shop', emoji: '🍬',
    blurb: 'Abbu gave you money for sweets. Ask politely and count your rupees!',
    meter: { label: 'Manners', emoji: '😊', start: 50 },
    cast: { seller: { bn: 'دکاندار', en: 'Shopkeeper', emoji: '🧑‍🍳' } },
    start: 's0',
    keys: ['n1', 'r1a', 'n3', 'r3a'],
    nodes: {
      s0: sys('Abbu gave you 100 rupees to buy sweets for the family. You walk into the sweet shop.', 'n1'),
      n1: say('seller', 'آئیے! کیا چاہیے؟', 'Aaiye! Kya chaahiye?', 'Come in! What would you like?', 'c1'),
      c1: ask(
        o('مجھے دو گلاب جامن دے دیں۔', 'Mujhe do gulaab jaaman de dein.', 'Please give me two gulab jamuns.', 20, 'r1a'),
        o('مہربانی کر کے مجھے ایک لڈو دیں۔', 'Mehrbaani kar ke mujhe ek laḍḍoo dein.', 'Please give me one laddoo.', 15, 'r1b'),
        o('مٹھائی دو!', 'Miṭhaai do!', 'Give me sweets!', -10, 'r1c'),
      ),
      r1a: say('seller', 'جی، یہ لیں۔', 'Ji, yeh lein.', 'Sure, here you are.', 'n2'),
      r1b: say('seller', 'جی ضرور، یہ لیں۔ بہت میٹھا ہے!', 'Ji zaroor, yeh lein. Bohat meeṭha hai!', "Of course, here you are. It's very sweet!", 'n2'),
      r1c: say('seller', 'بیٹا، "دیں" کہتے ہیں۔', 'Beṭa, "dein" kehte hain.', 'Dear, we say "dein" (please give).', 'n2'),
      n2: say('seller', 'اور کچھ چاہیے؟', 'Aur kuchh chaahiye?', 'Anything else?', 'c2'),
      c2: ask(
        o('جی نہیں، شکریہ۔', 'Ji nahin, shukriya.', 'No, thank you.', 10, 'r2a'),
        o('جی، چار سموسے بھی دیں۔', 'Ji, chaar samose bhi dein.', 'Yes, four samosas too, please.', 10, 'r2b'),
        o('نہیں!', 'Nahin!', 'No!', -5, 'r2c'),
      ),
      r2a: say('seller', 'اچھا۔', 'Achchha.', 'All right.', 'n3'),
      r2b: say('seller', 'ٹھیک ہے! یہ لیں۔', 'Ṭheek hai! Yeh lein.', 'All right! Here you are.', 'n3'),
      r2c: say('seller', 'ٹھیک ہے…', 'Ṭheek hai…', 'All right…', 'n3'),
      n3: say('seller', 'کل سو روپے ہوئے۔', 'Kul sau rupay hue.', 'That comes to one hundred rupees.', 'c3'),
      c3: ask(
        o('یہ لیں، سو روپے۔', 'Yeh lein, sau rupay.', 'Here you are, one hundred rupees.', 20, 'r3a'),
        o('یہ لیں، پچاس روپے۔', 'Yeh lein, pachaas rupay.', 'Here you are, fifty rupees.', -10, 'r3b'),
        o('بہت مہنگا ہے!', 'Bohat mehnga hai!', "That's too expensive!", -5, 'r3c'),
      ),
      r3a: say('seller', 'شکریہ! پھر آئیے گا۔', 'Shukriya! Phir aaiye ga.', 'Thank you! Do come again.', 'b1'),
      r3b: say('seller', 'نہیں بیٹا، سو روپے۔', 'Nahin beṭa, sau rupay.', 'No dear, one hundred rupees.', 'b1'),
      r3c: say('seller', 'بیٹا، یہ صحیح قیمت ہے۔', 'Beṭa, yeh sahih qeemat hai.', 'Dear, this is the fair price.', 'b1'),
      b1: branch({ min: 85, next: 'eA' }, { min: 60, next: 'eB' }, { next: 'eC' }),
      eA: end('Sweet success!', '🍬', 'You asked nicely, counted your money and went home with the sweets. Abbu will be so pleased!', 'great'),
      eB: end('Sweets in the bag', '🙂', 'You got the sweets. Remember to ask with "دیں" and to count your rupees carefully.', 'ok'),
      eC: end('A sour start', '🍋', 'It was a bit tricky. Try again: ask with "دیں" and say شکریہ.', 'rough'),
    },
  },

  {
    id: 'newfriend', tracks: ['older'], place: { older: 'o-hello' }, title: 'A New Friend at the Park', emoji: '🛝',
    blurb: 'A girl on the swing says salaam. Make a friend!',
    meter: { label: 'Friendship', emoji: '💛', start: 50 },
    cast: { zara: { bn: 'زارا', en: 'Zara', emoji: '👧' } },
    start: 's0',
    keys: ['n1', 'r1a', 'n2', 'n4'],
    nodes: {
      s0: sys('You are at the park. A girl on the swing waves at you.', 'n1'),
      n1: say('zara', 'السلام علیکم! میرا نام زارا ہے۔', 'Assalaam-o-alaikum! Mera naam Zaara hai.', 'Peace be upon you! My name is Zara.', 'c1'),
      c1: ask(
        o('وعلیکم السلام، زارا! تم سے مل کر خوشی ہوئی۔', 'Wa-alaikum-assalaam, Zaara! Tum se mil kar khushi hui.', 'And peace be upon you, Zara! Nice to meet you.', 20, 'r1a'),
        o('ہیلو۔', 'Hello.', 'Hello.', 5, 'r1b'),
        o('تم کون ہو؟', 'Tum kaun ho?', 'Who are you?', -10, 'r1c'),
      ),
      r1a: say('zara', 'مجھے بھی خوشی ہوئی!', 'Mujhe bhi khushi hui!', 'Nice to meet you too!', 'n2'),
      r1b: say('zara', 'ہیلو! آؤ، کھیلتے ہیں۔', 'Hello! Aao, khelte hain.', "Hello! Come on, let's play.", 'n2'),
      r1c: say('zara', 'میں زارا ہوں… میں یہاں نئی ہوں۔', 'Main Zaara hoon… main yahaan nayi hoon.', "I'm Zara… I'm new here.", 'n2'),
      n2: say('zara', 'تمہارا گھر کہاں ہے؟', 'Tumhaara ghar kahaan hai?', 'Where is your house?', 'c2'),
      c2: ask(
        o('میرا گھر پارک کے پاس ہے۔', 'Mera ghar paark ke paas hai.', 'My house is near the park.', 15, 'r2a'),
        o('وہاں، مسجد کے پاس۔', 'Wahaan, masjid ke paas.', 'Over there, near the mosque.', 15, 'r2b'),
        o('تم کیوں پوچھ رہی ہو؟', 'Tum kyun poochh rahi ho?', 'Why are you asking?', -5, 'r2c'),
      ),
      r2a: say('zara', 'ارے! میرا گھر بھی قریب ہے۔', 'Are! Mera ghar bhi qareeb hai.', 'Oh! My house is close too.', 'n3'),
      r2b: say('zara', 'اچھا! ہم مسجد کے پیچھے رہتے ہیں۔', 'Achchha! Hum masjid ke peechhe rehte hain.', 'Oh! We live behind the mosque.', 'n3'),
      r2c: say('zara', 'بس ایسے ہی۔', 'Bas aise hi.', 'No reason.', 'n3'),
      n3: say('zara', 'جھولا جھولیں؟ تم پہلے بیٹھو۔', 'Jhoola jhoolein? Tum pehle baiṭho.', 'Shall we swing? You sit first.', 'c3'),
      c3: ask(
        o('نہیں، پہلے تم۔ شکریہ!', 'Nahin, pehle tum. Shukriya!', 'No, you go first. Thank you!', 20, 'r3a'),
        o('ٹھیک ہے، شکریہ!', 'Ṭheek hai, shukriya!', 'OK, thank you!', 10, 'r3b'),
        o('ہٹو! میری باری ہے!', 'Haṭo! Meri baari hai!', "Move! It's my turn!", -15, 'r3c'),
      ),
      r3a: say('zara', 'واہ! تم بہت مہربان ہو۔', 'Waah! Tum bohat mehrbaan ho.', 'Wow! You are very kind.', 'n4'),
      r3b: say('zara', 'مزہ آ رہا ہے!', 'Maza aa raha hai!', 'This is fun!', 'n4'),
      r3c: say('zara', 'اچھا… ٹھیک ہے۔', 'Achchha… ṭheek hai.', 'Oh… all right.', 'n4'),
      n4: say('zara', 'مجھے اب گھر جانا ہے۔ کل پھر کھیلیں؟', 'Mujhe ab ghar jaana hai. Kal phir khelein?', 'I have to go home now. Shall we play again tomorrow?', 'c4'),
      c4: ask(
        o('ہاں، ضرور! خدا حافظ، زارا۔', 'Haan, zaroor! Khuda haafiz, Zaara.', 'Yes, of course! Goodbye, Zara.', 15, 'r4a'),
        o('شاید۔', 'Shaayad.', 'Maybe.', 0, 'r4b'),
        o('نہیں۔', 'Nahin.', 'No.', -10, 'r4c'),
      ),
      r4a: say('zara', 'خدا حافظ! کل ملتے ہیں۔', 'Khuda haafiz! Kal milte hain.', 'Goodbye! See you tomorrow.', 'b1'),
      r4b: say('zara', 'اچھا، دیکھتے ہیں۔', 'Achchha, dekhte hain.', "OK, we'll see.", 'b1'),
      r4c: say('zara', 'اوہ… ٹھیک ہے۔', 'Oh… ṭheek hai.', 'Oh… all right.', 'b1'),
      b1: branch({ min: 85, next: 'eA' }, { min: 60, next: 'eB' }, { next: 'eC' }),
      eA: end('A new best friend', '🌟', 'You greeted Zara warmly, shared the swing and made plans for tomorrow. What a lovely afternoon!', 'great'),
      eB: end('A friendly hello', '🙂', 'You and Zara had fun. Next time, answer her salaam with وعلیکم السلام and let her go first.', 'ok'),
      eC: end('Not quite friends yet', '🌧️', 'It was a bit awkward. Try again: reply to salaam, be kind about turns, and say خدا حافظ.', 'rough'),
    },
  },

  {
    id: 'nanivisit', tracks: ['older'], place: { older: 'o-ft-elders' }, title: 'Nani Comes to Visit', emoji: '👵',
    blurb: 'Nani has come all the way from Karachi. Make her feel welcome!',
    meter: { label: 'Respect', emoji: '🤲', start: 50 },
    cast: { nani: { bn: 'نانی', en: 'Nani', emoji: '👵' } },
    start: 's0',
    keys: ['n1', 'r1a', 'n3', 'r3a'],
    nodes: {
      s0: sys('Nani has come from Karachi to stay with you. She rings the doorbell.', 'n1'),
      n1: say('nani', 'السلام علیکم، میری جان! کیا حال ہے؟', 'Assalaam-o-alaikum, meri jaan! Kya haal hai?', 'Peace be upon you, my dear! How are you?', 'c1'),
      c1: ask(
        o('وعلیکم السلام، نانی جان! میں ٹھیک ہوں۔ آپ کیسی ہیں؟', 'Wa-alaikum-assalaam, Naani jaan! Main ṭheek hoon. Aap kaisi hain?', 'And peace be upon you, Nani! I am fine. How are you?', 20, 'r1a'),
        o('ٹھیک۔', 'Ṭheek.', 'Fine.', 0, 'r1b'),
        o('تم کیسی ہو، نانی؟', 'Tum kaisi ho, Naani?', 'How are you, Nani? (too casual)', -15, 'r1c'),
      ),
      r1a: say('nani', 'الحمد للہ، بالکل ٹھیک ہوں۔', 'Alhamdulillah, bilkul ṭheek hoon.', 'Alhamdulillah, I am very well.', 'n2'),
      r1b: say('nani', 'بس ٹھیک؟ آؤ، گلے ملو!', 'Bas ṭheek? Aao, gale milo!', 'Just fine? Come, give me a hug!', 'n2'),
      r1c: say('nani', 'بیٹا، بڑوں کو "آپ" کہتے ہیں۔', 'Beṭa, baṛon ko "aap" kehte hain.', 'Dear, we say "aap" to elders.', 'n2'),
      n2: say('nani', 'میں بہت تھک گئی ہوں۔', 'Main bohat thak gayi hoon.', "I'm very tired.", 'c2'),
      c2: ask(
        o('نانی جان، آپ بیٹھیں۔ میں پانی لاؤں؟', 'Naani jaan, aap baiṭhein. Main paani laaoon?', 'Nani, please sit down. Shall I bring you some water?', 20, 'r2a'),
        o('آپ کا بیگ میں اٹھاؤں؟', 'Aap ka baig main uṭhaaoon?', 'Shall I carry your bag?', 15, 'r2b'),
        o('ابھی ٹی وی پر کارٹون آ رہے ہیں۔', 'Abhi ṭee vee par kaarṭoon aa rahe hain.', 'Cartoons are on TV right now.', -10, 'r2c'),
      ),
      r2a: say('nani', 'شاباش! ہاں، ٹھنڈا پانی لا دو۔', 'Shaabaash! Haan, ṭhanḍa paani la do.', 'Well done! Yes, bring me some cold water.', 'n3'),
      r2b: say('nani', 'شکریہ، میری جان۔ ماشاء اللہ!', "Shukriya, meri jaan. Maa shaa'allah!", 'Thank you, my dear. Mashallah!', 'n3'),
      r2c: say('nani', 'اچھا… میں خود لے لیتی ہوں۔', 'Achchha… main khud le leti hoon.', "Oh… I'll get it myself.", 'n3'),
      n3: say('nani', 'دیکھو، میں تمہارے لیے کیا لائی ہوں!', 'Dekho, main tumhaare liye kya laayi hoon!', 'Look what I have brought for you!', 'c3'),
      c3: ask(
        o('واہ! شکریہ، نانی جان!', 'Waah! Shukriya, Naani jaan!', 'Wow! Thank you, Nani!', 20, 'r3a'),
        o('یہ کیا ہے؟', 'Yeh kya hai?', 'What is it?', 5, 'r3b'),
        o('بس یہی؟', 'Bas yahi?', 'Is that all?', -15, 'r3c'),
      ),
      r3a: say('nani', 'یہ کراچی کا حلوہ ہے۔ تمہیں پسند ہے نا؟', 'Yeh Karaachi ka halwa hai. Tumhein pasand hai na?', "It's halwa from Karachi. You like it, don't you?", 'n4'),
      r3b: say('nani', 'کراچی کا حلوہ! کھا کر دیکھو۔', 'Karaachi ka halwa! Kha kar dekho.', 'Halwa from Karachi! Try it.', 'n4'),
      r3c: say('nani', 'بیٹا، تحفے پر شکریہ کہتے ہیں۔', 'Beṭa, tohfe par shukriya kehte hain.', 'Dear, we say thank you for a present.', 'n4'),
      n4: say('nani', 'رات کو تمہیں کہانی سناؤں؟', 'Raat ko tumhein kahaani sunaaoon?', 'Shall I tell you a story tonight?', 'c4'),
      c4: ask(
        o('جی ہاں، نانی جان! آپ کی کہانیاں سب سے اچھی ہیں۔', 'Ji haan, Naani jaan! Aap ki kahaaniyaan sab se achchhi hain.', 'Yes, Nani! Your stories are the best.', 15, 'r4a'),
        o('ٹھیک ہے۔', 'Ṭheek hai.', 'OK.', 5, 'r4b'),
        o('نہیں، مجھے فون چاہیے۔', 'Nahin, mujhe fon chaahiye.', 'No, I want the phone.', -10, 'r4c'),
      ),
      r4a: say('nani', 'ان شاء اللہ، آج بادشاہ کی کہانی سناؤں گی۔', "In shaa'allah, aaj baadshaah ki kahaani sunaaoon gi.", "God willing, tonight I'll tell you the story of the king.", 'b1'),
      r4b: say('nani', 'اچھا، کھانے کے بعد۔', 'Achchha, khaane ke baad.', 'All right, after dinner.', 'b1'),
      r4c: say('nani', 'تھوڑی دیر فون، پھر کہانی۔', 'Thoṛi der fon, phir kahaani.', 'The phone for a little while, then a story.', 'b1'),
      b1: branch({ min: 85, next: 'eA' }, { min: 60, next: 'eB' }, { next: 'eC' }),
      eA: end("Nani's favourite", '💖', 'You greeted Nani with respect, looked after her and thanked her for the halwa. She tells everyone how well brought up you are!', 'great'),
      eB: end('A warm welcome', '🙂', 'Nani had a nice arrival. Remember: آپ for every elder, and offer to help before you are asked.', 'ok'),
      eC: end('A wobbly welcome', '🌧️', 'Nani felt a little ignored. Try again: greet her with آپ, offer water, and say شکریہ for her present.', 'rough'),
    },
  },

  {
    id: 'rainyday', tracks: ['older'], place: { older: 'o-around' }, title: 'A Rainy Day with Ammi', emoji: '🌧️',
    blurb: 'School is closed for the rain. Find something fun to do with Ammi.',
    meter: { label: 'Fun', emoji: '☔', start: 50 },
    cast: { am: { bn: 'امی', en: 'Ammi', emoji: '👩' } },
    start: 's0',
    keys: ['n1', 'r1a', 'n3', 'r3b'],
    nodes: {
      s0: sys('It is raining hard and school is closed. You are at home with Ammi.', 'n1'),
      n1: say('am', 'آج بہت بارش ہو رہی ہے۔ کیا کرنا ہے؟', 'Aaj bohat baarish ho rahi hai. Kya karna hai?', "It's raining a lot today. What shall we do?", 'c1'),
      c1: ask(
        o('امی، کیا ہم کاغذ کی کشتی بنائیں؟', 'Ammi, kya hum kaaghaz ki kashti banaaein?', 'Ammi, shall we make paper boats?', 20, 'r1a'),
        o('میں کتاب پڑھوں؟', 'Main kitaab paṛhoon?', 'Shall I read a book?', 15, 'r1b'),
        o('بہت بوریت ہے!', 'Bohat boriyat hai!', "It's so boring!", -5, 'r1c'),
      ),
      r1a: say('am', 'اچھا خیال ہے! کاغذ لے آؤ۔', 'Achchha khayaal hai! Kaaghaz le aao.', 'Good idea! Bring some paper.', 'n2'),
      r1b: say('am', 'شاباش! بعد میں کشتی بھی بنائیں گے۔', 'Shaabaash! Baad mein kashti bhi banaaein ge.', "Well done! We'll make a boat afterwards too.", 'n2'),
      r1c: say('am', 'چلو، کچھ مزے کا کرتے ہیں۔', 'Chalo, kuchh maze ka karte hain.', "Come on, let's do something fun.", 'n2'),
      n2: say('am', 'دیکھو، کھڑکی کے باہر کیا ہے؟', 'Dekho, khiṛki ke baahar kya hai?', 'Look, what is outside the window?', 'c2'),
      c2: ask(
        o('بادل اور بارش!', 'Baadal aur baarish!', 'Clouds and rain!', 15, 'r2a'),
        o('ایک پرندہ درخت پر ہے۔', 'Ek parinda darakht par hai.', 'There is a bird in the tree.', 15, 'r2b'),
        o('کچھ نہیں۔', 'Kuchh nahin.', 'Nothing.', -5, 'r2c'),
      ),
      r2a: say('am', 'ہاں! آسمان کالا ہو گیا ہے۔', 'Haan! Aasmaan kaala ho gaya hai.', 'Yes! The sky has turned dark.', 'n3'),
      r2b: say('am', 'بیچارہ! وہ بارش سے بچ رہا ہے۔', 'Bechaara! Woh baarish se bach raha hai.', 'Poor thing! It is sheltering from the rain.', 'n3'),
      r2c: say('am', 'غور سے دیکھو!', 'Ghaur se dekho!', 'Look carefully!', 'n3'),
      n3: say('am', 'کیا تمہیں بھوک لگی ہے؟', 'Kya tumhein bhook lagi hai?', 'Are you hungry?', 'c3'),
      c3: ask(
        o('جی امی۔ کیا آپ پکوڑے بنائیں گی؟', 'Ji Ammi. Kya aap pakoṛe banaaein gi?', 'Yes Ammi. Will you make pakoras?', 15, 'r3a'),
        o('جی، میں آپ کی مدد کروں؟', 'Ji, main aap ki madad karoon?', 'Yes, shall I help you?', 20, 'r3b'),
        o('ابھی کھانا دو!', 'Abhi khaana do!', 'Give me food now!', -15, 'r3c'),
      ),
      r3a: say('am', 'ضرور! بارش میں پکوڑے تو بنتے ہیں۔', 'Zaroor! Baarish mein pakoṛe to bante hain.', 'Of course! Rain always calls for pakoras.', 'b1'),
      r3b: say('am', 'شاباش! آؤ، آلو دھو دو۔', 'Shaabaash! Aao, aaloo dho do.', 'Well done! Come and wash the potatoes.', 'b1'),
      r3c: say('am', 'بیٹا، امی سے "دیں" کہتے ہیں۔', 'Beṭa, ammi se "dein" kehte hain.', 'Dear, with Ammi we say "dein" (please give).', 'b1'),
      b1: branch({ min: 85, next: 'eA' }, { min: 60, next: 'eB' }, { next: 'eC' }),
      eA: end('Best rainy day ever', '⛵', 'Paper boats, bird-watching and hot pakoras with Ammi. You were polite and helpful the whole time!', 'great'),
      eB: end('A cosy afternoon', '☕', 'A nice day indoors. Next time, offer to help Ammi in the kitchen.', 'ok'),
      eC: end('A grumpy rainy day', '🌧️', 'The rain made everyone grumpy. Try again: suggest something fun and ask Ammi politely.', 'rough'),
    },
  },
]

export const storiesFor = (track) => stories.filter((s) => s.tracks.includes(track))
