var quotes = [
    'This is my depressed stance. When you\'re depressed, it makes a lot of difference how you stand. The Vaguely Unpleasant thing you can do is straighten up and hold your head high because then you\'ll start to feel better. If you\'re going to get any joy out of being depressed, you\'ve got to stand like this.', 
    'To generalize is to be an idiot.',
    'Crap crap crap crap crap crap crap stupid stupid stupid stupid stupid crap.',
    'Time flies like an arrow; fruit flies like a banana',
    'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    'Never memorize something that you can look up',
    "Have you ever noticed how ‘What the hell’ is always the right decision to make?",
    'Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.',
    "Saying 'I notice you're a nerd' is like saying, 'Hey, I notice that you'd rather be intelligent than be stupid, that you'd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why is that?' In fact, it seems to me that most contemporary insults are pretty lame. Even 'lame' is kind of lame. Saying 'You're lame' is like saying 'You walk with a limp.' Yeah, whatever, so does 50 Cent, and he's done all right for himself.",
    '<h3>The story so far\:</h3> <b>In the beginning the Universe was created\.</b> This has made a lot of people very angry and been widely regarded as a bad move\.',
    'The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.',
    'From the moment I picked up your book until I put it down, I was convulsed with laughter. Some day I intend reading it.',
    'Fuck.',
    'I\'m saying that I\'m a moody, insecure, narrow-minded, jealous, borderline homicidal bitch, and I want you to promise me that you\'re okay with that, because it\'s who I am, and you\'re what I need\.',
    'In a way, it\'s nice to know that there are Greek gods out there, because you have somebody to blame when things go wrong. For instance, when you\'re walking away from a bus that\'s just been attacked by monster hags and blown up by lightning, and it\'s raining on top of everything else, most people might think that\'s just really bad luck; when you\'re a half-blood, you understand that some devine force is really trying to mess up your day.',
    'We got to see a Corsair ship up close – all matt black, no markings, no lights – and practically invisible out here in the dark! What a sight to behold! Most people don’t get to see those bastards up close. That is, for very long! Anyways, the ship was just floating there, no sign of life. Our hails weren’t being answered, and so we assumed the ship was dead in space. Captain Mulligan, gods-rest-his-soul, told me to form a boarding party of security and medics from the sickbay and that we were going over there. We weren’t a military ship, and we’re not Star Marines, so we were lightly armed and quite nervous. I mean, this wasn’t just some of my security section being called out to break up a fight at one of the bars on the promenade, this was serious life-and-death shit! So I said ‘okay’, and told my assistant supervisor, Lisa Garfner, to get them all together. Seven of us shifted over to the other ship with the transmatter (you still use those things, I take it?) not knowing what to expect. It could’ve been anything… and it was. It was crazy.',
    'For the gaming fishermen there was the Whatoosie River and its native cocka-snoek, the main game fish of the resident Skegg’s Valley Dynamite Fishing Club. Cocka-snoek were wily and tough and rather too bright for mere fish. You wouldn’t catch much with a rod around here. Many inexperienced visitors would find the bait stolen from their hooks, which punctuated the discovery that their lines had somehow got snagged and tangled irretrievably around some underwater obstruction – sometimes tied together with neat little bows. Often, several direct hits with hand grenades were needed to stun the creatures long enough just to catch them, gut them and fry them, but these former military types had become experts at it. For a modest fee, tours could be arranged via the booking office, which included an overnight stay on the banks of the river where one could drop off to a great night’s sleep after a satisfying meal of cocka-snoek done on an open fire, and the sound the bits of shrapnel made rattling in your stomach.',
    'As they roared past the streetlamps, people emerged from their houses to see what was happening. Nina tried to imagine what their wild crew must look like to these Fjerdans. What did they see as they poked their heads out of windows and doorways? A group of hooting kids clinging to a tank painted with the Fjerdan flag and charging along like some deranged float gone astray from its parade: a girl in purple silk and a boy with red-gold curls poking out from behind the guns; four soaked people holding tight to the sides for dear life—a Shu boy in prison clothes, two bedraggled drüskelle, and Nina, a half-naked girl in shreds of teal chiffon shouting, "We have a moat!',
    'What\'s the good of living if you don\'t try a few things?',
    'It\'s like turtle sex.',
    'We accept the love <i>we think we deserve.</i>',
    'We are all in the gutter, but some of us are looking at the stars.',
    'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that <b>dragons can be beaten.</b>',
    'To the well-organized mind, death is but the next great adventure.',
    'Listen to the mustn\'ts, child. Listen to the don\'ts. Listen to the shouldn\'ts, the impossibles, the won\'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.',
    'Do what you can, with what you have, where you are.',
    '"Duct tape can\'t fix stupid," Bas growled. "Maybe not," Red replied, "but it can hold it down and muffled the screams."',
    'Civilization is held together by duct tape and spit, and I\'m worried about the duct tape.',
    'The important thing to you is not how many years in your life, but how much life in your years!',
    'It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.',
    'There\'s something finite about the thought of death, you know that while you may get there in the end. <center><i>You definitely aren\'t there now.</i></center>',
    'Hold fast to dreams, </br> For if dreams die </br> Life is a broken-winged bird, </br> That cannot fly',
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}