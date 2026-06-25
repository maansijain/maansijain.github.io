// ─────────────────────────────────────────────────────────────
//  MONSOON PRESCRIPTION — quiz.js
//  Part 1 of 3: prescription data
// ─────────────────────────────────────────────────────────────

const prescriptions = [

  {
    id: "body",
    archetype: "the body",
    artwork: "images/brb-dance-berlin.jpg",
    artworkTitle: "brb: going to dance in berlin, 2023",
    poem: "The Dance of the Eunuchs",
    poemText: "It was hot, so hot, before the eunuchs came\nTo dance, wide skirts going round and round, cymbals\nRichly clashing, and anklets jingling, jingling,\nJingling . . . Beneath the fiery gulmohur, with\nLong braids flying, dark eyes flashing, they danced and\nThey danced, oh, they danced till they bled . . . There were green\nTattoos on their cheeks, jasmines in their hair, some\nWere dark and some were almost fair. Their voices\nWere harsh, their songs melancholy; they sang of\nLovers dying and of children left unborn . . .\nSome beat their drums; others beat their sorry breasts\nAnd wailed, and writhed in vacant ecstasy. They\nWere thin in limbs and dry, like half-burnt logs from\nFuneral pyres, a drought and a rottenness\nWere in each of them. Even the crows were so\nSilent on trees, and the children, wide eyed, still;\nAll were watching these poor creatures' convulsions.\nThe sky crackled then, thunder came, and lightning\nAnd rain, a meagre rain that smelt of dust in\nAttics and the urine of lizards and mice . . .",
    prescription: "You have been living slightly above your body for some time now. Not far above it — just a centimetre or two. Enough to miss the texture of things. This painting does not ask whether you feel like dancing. It assumes you already are. Your assignment is to let something happen in your body this week that your mind did not schedule. Eat something slowly. Move somewhere without destination. Do not call it exercise.",
    dosage: "Repeat until the distance closes.",
    sideEffects: "Unexpected appetite. Desire for green fabric. The faint memory of a night you thought you had forgotten.",
    tags: ["embodiment", "pleasure", "release", "celebration", "body"]
  },

  {
    id: "exile",
    archetype: "the exile",
    artwork: "images/where-am-i-blue-dot.jpg",
    artworkTitle: "where am i, we asked the blue dot, 2023",
    poem: "Farewell to Bombay",
    poemText: "I take leave of you, fair city, while tears\nHide somewhere in my adult eyes\nAnd sadness is silent as a stone\nIn the river's unmoving\nCore . . .\nIt's goodbye, goodbye, goodbye\nTo slender shapes behind window panes\nShut against indiscriminate desire\nAnd rain; to yellow moons\nSo long ignored, so long unloved;\nTo the birds, flesh-hungry,\nCircling in the sky\nWith shrill and hostile cries; to the crowd\nNear the sea, walking or sitting\nBut always talking, talking,\nTalking . . .\nI take leave of you, fair city, keep your tears,\nYour anger and your smile for others,\nYoung, who come with unjaded eyes;\nGive them your sad-eyed courtesans with tinsel\nAnd jasmine in their hair, your marble\nSlabs in morgues, your brittle\nRoadside laughter . . .\nIt's goodbye, goodbye, goodbye . . .\nTo the silence and the sounds;\nTo streets that I never walked\nBut in dreams, to lips that I never kissed\nBut in dreams; to children\nLovely as flowers, out of me\nNever born . . .",
    prescription: "You carry more than one city inside you. You know this because certain songs land differently depending on where you are when you hear them, and you are never quite sure which version of yourself is the one that counts. This work was made from a map. You are also a map of everywhere you have been. You do not need to choose a city. You need to stop pretending the question has a clean answer.",
    dosage: "Once, when arriving somewhere. Once, when leaving.",
    sideEffects: "Nostalgia that does not hurt. Permission to belong provisionally.",
    tags: ["displacement", "migration", "searching", "orientation", "exile"]
  },

  {
    id: "glamour",
    archetype: "the glamour wound",
    artwork: "images/searching-open-air.jpg",
    artworkTitle: "searching for an open air (chattarpur farmhouse life in delhi), 2023",
    poem: "An Introduction",
    poemText: "I don't know politics but I know the names\nOf those in power, and can repeat them like\nDays of week, or names of months, beginning with\nNehru. I am Indian, very brown, born in\nMalabar, I speak three languages, write in\nTwo, dream in one. Don't write in English, they said,\nEnglish is not your mother-tongue. Why not leave\nMe alone, critics, friends, visiting cousins,\nEvery one of you? Why not let me speak in\nAny language I like? The language I speak\nBecomes mine, its distortions, its queernesses\nAll mine, mine alone. It is half English, half\nIndian, funny perhaps, but it is honest,\nIt is as human as I am human, don't\nYou see? It voices my joys, my longings, my\nHopes, and it is useful to me as cawing\nIs to crows or roaring to the lions, it\nIs human speech, the speech of the mind that is\nHere and not there, a mind that sees and hears and\nIs aware. Not the deaf, blind speech\nOf trees in storm or of monsoon clouds or of rain or the\nIncoherent mutterings of the blazing\nFuneral pyre. I was child, and later they\nTold me I grew, for I became tall, my limbs\nSwelled and one or two places sprouted hair. When\nI asked for love, not knowing what else to ask\nFor, he drew a youth of sixteen into the\nBedroom and closed the door. He did not beat me\nBut my sad woman-body felt so beaten.\nThe weight of my breasts and womb crushed me. I shrank\nPitifully. Then . . . I wore a shirt and my\nBrother's trousers, cut my hair short and ignored\nMy womanliness. Dress in sarees, be girl,\nBe wife, they said. Be embroiderer, be cook,\nBe a quarreller with servants. Fit in. Oh,\nBelong, cried the categorizers. Don't sit\nOn walls or peep in through our lace-draped windows.\nBe Amy, or be Kamala. Or, better\nStill, be Madhavikutty. It is time to\nChoose a name, a role. Don't play pretending games.\nDon't play at schizophrenia or be a\nNympho. Don't cry embarrassingly loud when\nJilted in love . . . I met a man, loved him. Call\nHim not by any name, he is every man\nWho wants woman, just as I am every\nWoman who seeks love. In him . . . the hungry haste\nOf rivers, in me . . . the ocean's tireless\nWaiting. Who are you, I ask each and every one,\nThe answer is, it is I. Anywhere and\nEverywhere, I see the one who calls himself\nI; in this world, he is tightly packed like the\nSword in its sheath. It is I who drink lonely\nDrinks at twelve, midnight, in hotels of strange towns,\nIt is I who laugh, it is I who make love\nAnd then, feel shame, it is I who lie dying\nWith a rattle in my throat. I am sinner,\nI am saint. I am the beloved and the\nBetrayed. I have no joys which are not yours, no\nAches which are not yours. I too call myself I.",
    prescription: "You have been told many times who you are, and each time you have adapted the answer slightly to fit the room. This is not weakness. It is a very old and very tiring skill. Kamala Das wrote this poem to refuse the demand that she be legible. You are allowed the same refusal. You do not owe anyone a clean category.",
    dosage: "Read it when someone makes you feel like too much.",
    sideEffects: "Reduced tolerance for definitions. Sudden clarity about which rooms deserve your whole self.",
    tags: ["identity", "performance", "defiance", "being seen", "refusal"]
  },

  {
    id: "nourisher",
    archetype: "the nourisher",
    artwork: "images/club-kitchen.jpg",
    artworkTitle: "club kitchen, 2024",
    poem: "Summer in Calcutta",
    poemText: "What is this drink but\nThe April sun, squeezed\nLike an orange in\nMy glass? I sip the\nFire, I drink and drink\nAgain, I am drunk,\nYes, but on the gold\nOf suns. What noble\nVenom now flows through\nMy veins and fills my\nMind with unhurried\nLaughter? My worries\nDoze. Wee bubbles ring\nMy glass, like a bride's\nNervous smile, and meet\nMy lips. Dear, forgive\nThis moment's lull in\nWanting you, the blur\nIn memory. How\nBrief the term of my\nDevotion, how brief\nYour reign when I with\nGlass in hand, drink, drink,\nAnd drink again this\nJuice of April suns.",
    prescription: "You have been postponing delight. Telling yourself there will be time for pleasure once things settle. Things will not settle. The moka pot on the stove is not waiting for a better occasion. Neither is the light coming through the kitchen window at this specific hour. You are prescribed: one meal eaten without a screen. One cup of something hot, drunk slowly, for no reason except that it is good.",
    dosage: "Daily, without guilt.",
    sideEffects: "Increased sensitivity to small pleasures. Possible desire to cook for someone you love.",
    tags: ["pleasure", "appetite", "warmth", "nourishment", "ordinary joy"]
  },

  {
    id: "survivor",
    archetype: "the survivor",
    artwork: "images/no-rehashing-pain.jpg",
    artworkTitle: "no rehashing pain for breakfast, 2025",
    poem: "The Sunshine Cat",
    poemText: "They did this to her, the men who knew her, the man\nShe loved, who loved her not enough, being selfish\nAnd a coward, the husband who neither loved nor\nUsed her, but was a ruthless watcher, and the band\nOf cynics she turned to, clinging to their chests where\nNew hair sprouted like great-winged moths, burrowing her\nFace into their smells and their young lusts to forget,\nTo forget, oh, to forget . . . and, they said, each of\nThem, I do not love, I cannot love, it is not\nIn my nature to love, but I can be kind to you . . .\nThey let her slide from pegs of sanity into\nA bed made soft with tears and she lay there weeping,\nFor sleep had lost its use; I shall build walls with tears,\nShe said, walls to shut me in . . . Her husband shut her\nIn, every morning; locked her in a room of books\nWith a streak of sunshine lying near the door, like\nA yellow cat, to keep her company, but soon,\nWinter came and one day while locking her in, he\nNoticed that the cat of sunshine was only a\nLine, a hair-thin line, and in the evening when\nHe returned to take her out, she was a cold and\nHalf-dead woman, now of no use at all to men.",
    prescription: "You have remembered this so many times that the memory has worn grooves into you. The story is true. It happened. And you have now told it to yourself more times than it needs to be told. This painting has a very clear opinion: not at breakfast. Not as the first thing. The wound is real. It does not also need to be the centrepiece.",
    dosage: "Begin one morning differently.",
    sideEffects: "Unexpected spaciousness. The faint, strange feeling of not being in crisis.",
    tags: ["release", "recovery", "survival", "letting go", "grief"]
  },

  {
    id: "dreamer",
    archetype: "the dreamer",
    artwork: "images/infinite-abundant-nature.jpg",
    artworkTitle: "infinite/abundant nature and the deionizing balcony view, 2024",
    poem: "Forest Fire",
    poemText: "Of late I have begun to feel a hunger\nTo take in with greed, like a forest fire that\nConsumes, and, with each killing gains a wilder,\nBrighter charm, all that comes my way. Bald child in\nOpen pram, you think I only look, and you\nToo, slim lovers behind the tree and you, old\nMan with paper in your hand and sunlight in\nYour hair . . . My eyes lick at you like flames, my nerves\nConsume; and, when I finish with you, in the\nPram, near the tree and, on the park bench, I spit\nOut small heaps of ash, nothing else. But in me\nThe sights and smells and sounds shall thrive and go on\nAnd on and on. In me shall sleep the baby\nThat sat in prams, and, sleep and wake and smile its\nToothless smile. In me shall walk the lovers, hand\nIn hand, and in me, where else, the old shall sit\nAnd feel the touch of sun. In me, the street-lamps\nShall glimmer, the cabaret girls cavort, the\nWedding drums resound, the eunuchs swirl coloured\nSkirts and sing sad songs of love, the wounded moan,\nAnd in me the dying mother with hopeful\nEyes shall gaze around, seeking her child, now grown\nAnd gone away to other towns, other arms.",
    prescription: "You live with one foot in a life you have not arrived at yet. This is not a problem to fix. The capacity to want a different world than the one in front of you is how worlds change. But you are also allowed to let your eyes lick at what is here — the fern, the light, the particular quality of this afternoon — the way Das does: consuming without destroying.",
    dosage: "Three minutes of looking at something growing.",
    sideEffects: "Appetite for the present. Unusual peace with not knowing what comes next.",
    tags: ["wonder", "desire", "possibility", "expansion", "imagination"]
  },

  {
    id: "witness",
    archetype: "the witness",
    artwork: "images/gaze.jpg",
    artworkTitle: "gaze, 2025",
    poem: "The Freaks",
    poemText: "He talks, turning a sun-stained\nCheek to me, his mouth, a dark\nCavern, where stalactites of\nUneven teeth gleam, his right\nHand on my knee, while our minds\nAre willed to race towards love;\nBut, they only wander, tripping\nIdly over puddles of\nDesire . . . Can this man with\nNimble finger-tips unleash\nNothing more alive than the\nSkin's lazy hungers? Who can\nHelp us who have lived so long\nAnd have failed in love? The heart,\nAn empty cistern, waiting\nThrough long hours, fills itself\nWith coiling snakes of silence.\nI am a freak. It's only\nTo save my face, I flaunt, at\nTimes, a grand, flamboyant lust.",
    prescription: "You have made an art of watching. You notice things others miss — the texture of a room, the shift in someone's voice, the moment a conversation tips. But watching has become a way of keeping a safe distance from being watched in return. This figure's back is to us. They are looking at something we cannot see. You are invited — not forced — to turn around.",
    dosage: "Let one person see you fully this week.",
    sideEffects: "Discomfort followed by relief. Possible revelation.",
    tags: ["intimacy", "observation", "longing", "distance", "being seen"]
  },

  {
    id: "transit",
    archetype: "the one in transit",
    artwork: "images/no-we-going-elsewhere.jpg",
    artworkTitle: "no we're going elsewhere, 2020",
    poem: "I Shall Some Day",
    poemText: "I shall some day leave, leave the cocoon\nYou built around me with morning tea,\nLove-words flung from doorways and of course\nYour tired lust. I shall someday take\nWings, fly around, as often petals\nDo when free in air, and you dear one,\nJust the sad remnant of a root, must\nLie behind, sans pride, on double-beds\nAnd grieve. But, I shall someday return, losing\nNearly all, hurt by wind, sun and rain,\nToo hurt by fierce happiness to want\nA further jaunt or a further spell\nOf freedom, and I shall someday see\nMy world, de-fleshed, de-veined, de-blooded,\nJust a skeletal thing, then shut my\nEyes and take refuge, if nowhere else,\nHere in your nest of familiar scorn . . .",
    prescription: "You are mid-flight and you know it. The plexi is warped — the world you are photographing will not resolve into a stable image. That is correct. This is not a malfunction. Kamala Das knew she would leave before she knew where she was going. The leaving itself was the knowledge. You already know what you are leaving. You are working up to saying it out loud.",
    dosage: "Once, when you need permission.",
    sideEffects: "Sudden certainty. Followed by the calm of someone who has already decided.",
    tags: ["transition", "departure", "freedom", "restlessness", "becoming"]
  },

  {
    id: "lost",
    archetype: "the lost and found",
    artwork: "images/ill-think-about-it-tomorrow.jpg",
    artworkTitle: "i'll think about it tomorrow, 2020",
    poem: "My Grandmother's House",
    poemText: "There is a house now far away where once\nI received love . . . That woman died,\nThe house withdrew into silence, snakes moved\nAmong books I was then too young\nTo read, and, my blood turned cold like the moon.\nHow often I think of going\nThere, to peer through blind eyes of windows or\nJust listen to the frozen air,\nOr in wild despair, pick an armful of\nDarkness to bring it here to lie\nBehind my bedroom door like a brooding\nDog . . . you cannot believe, darling,\nCan you, that I lived in such a house and\nWas proud, and loved . . . I who have lost\nMy way and beg now at strangers' doors to\nReceive love, at least in small change?",
    prescription: "Lost and hormonally addled and unable to quite see through the glass. You know what Scarlett knew: sometimes the only honest answer to an impossible question is to defer it until tomorrow. Not because you are avoiding — but because the body is overwhelmed and tomorrow is another option. This is not failure. This is a woman who has survived enough to know that she will survive this too. Push through. The fern grows through the warped plexi regardless.",
    dosage: "Once, when you are too tired to decide.",
    sideEffects: "Tomorrow arrives. You handle it.",
    tags: ["memory", "longing", "home", "grief", "return", "nostalgia"]
  },

  {
    id: "searcher",
    archetype: "the searcher",
    artwork: "images/only-living-swimmer-mumbai.jpg",
    artworkTitle: "the only living swimmer in mumbai, 2025",
    poem: "A Hot Noon in Malabar",
    poemText: "This is a noon for beggars with whining\nVoices, a noon for men who come from hills\nWith parrots in a cage and fortune-cards,\nAll stained with time, for brown Kurava girls\nWith old eyes, who read palms in light singsong\nVoices, for bangle-sellers who spread\nOn the cool black floor those red and green and blue\nBangles, all covered with the dust of roads,\nFor all of them, whose feet, devouring rough\nMiles, grow cracks on the heels, so that when they\nClambered up our porch, the noise was grating,\nStrange . . . This is a noon for strangers who part\nThe window-drapes and peer in, their hot eyes\nBrimming with the sun, not seeing a thing in\nShadowy rooms and turn away and look\nSo yearningly at the brick-ledged well. This\nIs a noon for strangers with mistrust in\nTheir eyes, dark, silent ones who rarely speak\nAt all, so that when they speak, their voices\nRun wild, like jungle-voices. Yes, this is\nA noon for wild men, wild thoughts, wild love. To\nBe here, far away, is torture. Wild feet\nStirring up the dust, this hot noon, at my\nHome in Malabar, and I so far away . . .",
    prescription: "Something in you is still moving when everything around you is still. You are the figure in the pool, in the middle of the city, in the middle of the afternoon, in the middle of everything — swimming. The city watches. You do not stop. This is not stubbornness. It is the original form of the self, before it learned to perform rest.",
    dosage: "Whenever you are told to slow down by someone who is not you.",
    sideEffects: "Renewed faith in your own momentum. Mild indifference to observers.",
    tags: ["freedom", "solitude", "movement", "survival", "wildness"]
  },

  {
    id: "romantic",
    archetype: "the romantic",
    artwork: "images/whose-money-anyway.jpg",
    artworkTitle: "whose money is it anyway & bet, 2025",
    poem: "In Love",
    poemText: "Of what does the burning mouth\nOf sun, burning in today's\nSky remind me oh, yes, his\nMouth . . . and his limbs like pale and\nCarnivorous plants reaching\nOut for me, and the sad lie\nOf my unending lust. Where\nIs room, excuse or even\nNeed for love, for, isn't each\nEmbrace a complete thing,\nA finished jigsaw, when mouth on\nMouth, I lie, ignoring my poor\nMoody mind, while pleasure\nWith deliberate gaiety\nTrumpets harshly into the\nSilence of the room . . . At noon\nI watch sleek crows flying\nLike poison on wings - and at\nNight, from behind the Burdwan\nRoad, the corpse-bearers cry 'Bol\nHari Bol', a strange lacing\nFor moonless nights, while I walk\nThe verandah, sleepless,\nA million questions awake in\nMe, and all about him, and\nThis skin-communicated\nThing that I dare not yet in\nHis presence call our love.",
    prescription: "You are someone who wants things with a seriousness that surprises even you. The casino wobbles in the lens — glamour and risk, the whole arrangement distorted by too much wanting. Das knew this: the burning mouth of the sun, the body's reach. What you feel is not too much. It is simply very specifically yours. The bet is already placed.",
    dosage: "When desire feels embarrassing.",
    sideEffects: "Permission to want precisely what you want.",
    tags: ["desire", "ambivalence", "intimacy", "risk", "body"]
  },

  {
    id: "becoming",
    archetype: "the becoming",
    artwork: "images/raw-innard-carpentry.jpg",
    artworkTitle: "raw innard style custom carpentry — surface pictured, 2020",
    poem: "Words",
    poemText: "All round me are words, and words and words,\nThey grow on me like leaves, they never\nSeem to stop their slow growing\nFrom within . . . But I tell myself, words\nAre a nuisance, beware of them, they\nCan be so many things, a\nChasm where running feet must pause, to\nLook, a sea with paralysing waves,\nA blast of burning air or,\nA knife most willing to cut your best\nFriend's throat . . . Words are a nuisance, but\nThey grow on me like leaves on a tree,\nThey never seem to stop their coming\nFrom a silence, somewhere deep within . . .",
    prescription: "You are mid-construction and it shows. The grain of the wood, the light source hidden inside — this is what it looks like to be in the middle of making something that does not yet have a name. Words grow on Das like leaves, from a silence somewhere deep within. Whatever is happening inside you is also growing from somewhere real. You are not behind. You are in process.",
    dosage: "When you mistake incompletion for failure.",
    sideEffects: "Patience. The faint pleasure of not being finished.",
    tags: ["transformation", "process", "making", "becoming", "interiority"]
  }

];

// ─────────────────────────────────────────────────────────────
//  Part 2: questions
// ─────────────────────────────────────────────────────────────

const questions = [
  {
    text: "when nobody is watching, where does your mind go?",
    options: [
      { text: "a city i left behind", tags: ["exile", "displacement", "migration"] },
      { text: "a future i haven't reached yet", tags: ["becoming", "transition", "imagination"] },
      { text: "someone i miss", tags: ["longing", "intimacy", "grief"] },
      { text: "food, pleasure, and small comforts", tags: ["pleasure", "nourishment", "body"] },
      { text: "a completely different life", tags: ["freedom", "restlessness", "desire"] },
      { text: "whatever is directly in front of me", tags: ["embodiment", "observation", "survival"] }
    ]
  },
  {
    text: "which room feels most important right now?",
    options: [
      { text: "kitchen", tags: ["nourishment", "pleasure", "warmth"] },
      { text: "balcony", tags: ["solitude", "possibility", "expansion"] },
      { text: "dance floor", tags: ["embodiment", "release", "celebration"] },
      { text: "swimming pool", tags: ["freedom", "movement", "survival"] },
      { text: "train station", tags: ["transition", "departure", "migration"] },
      { text: "bathroom mirror", tags: ["identity", "being seen", "performance"] }
    ]
  },
  {
    text: "what are you carrying too much of?",
    options: [
      { text: "an old story", tags: ["grief", "letting go", "survival"] },
      { text: "someone else's expectations", tags: ["defiance", "refusal", "identity"] },
      { text: "nostalgia", tags: ["longing", "home", "return"] },
      { text: "hope", tags: ["desire", "imagination", "becoming"] },
      { text: "nothing — i need more weight, not less", tags: ["embodiment", "appetite", "body"] },
      { text: "the feeling of being watched", tags: ["observation", "distance", "being seen"] }
    ]
  },
  {
    text: "which sentence feels closest to your life right now?",
    options: [
      { text: "i am searching.", tags: ["searching", "orientation", "solitude"] },
      { text: "i am arriving.", tags: ["becoming", "transition", "home"] },
      { text: "i am recovering.", tags: ["recovery", "survival", "letting go"] },
      { text: "i am becoming.", tags: ["becoming", "process", "making"] },
      { text: "i am celebrating.", tags: ["pleasure", "release", "celebration"] },
      { text: "i am waiting.", tags: ["longing", "observation", "intimacy"] }
    ]
  },
  {
    text: "a stranger offers you one gift. which do you choose?",
    options: [
      { text: "a key", tags: ["transition", "freedom", "becoming"] },
      { text: "a photograph", tags: ["memory", "longing", "return"] },
      { text: "a meal", tags: ["nourishment", "warmth", "pleasure"] },
      { text: "a secret", tags: ["intimacy", "being seen", "desire"] },
      { text: "a beautiful outfit", tags: ["performance", "identity", "defiance"] },
      { text: "directions home", tags: ["home", "exile", "orientation"] }
    ]
  },
  {
    text: "when you think about the future, what image appears?",
    options: [
      { text: "open water", tags: ["freedom", "movement", "wildness"] },
      { text: "a crowded dance floor", tags: ["embodiment", "celebration", "release"] },
      { text: "a house full of people", tags: ["warmth", "belonging", "nourishment"] },
      { text: "a train leaving the station", tags: ["departure", "restlessness", "transition"] },
      { text: "a garden after rain", tags: ["expansion", "imagination", "possibility"] },
      { text: "a city glowing at night", tags: ["displacement", "searching", "desire"] }
    ]
  },
  {
    text: "what deserves more attention from you?",
    options: [
      { text: "my body", tags: ["embodiment", "body", "pleasure"] },
      { text: "my pleasure", tags: ["appetite", "nourishment", "desire"] },
      { text: "my grief", tags: ["grief", "recovery", "letting go"] },
      { text: "my creativity", tags: ["making", "process", "becoming"] },
      { text: "my sense of adventure", tags: ["freedom", "wildness", "movement"] },
      { text: "my need to be seen", tags: ["intimacy", "being seen", "identity"] }
    ]
  },
  {
    text: "which feeling are you secretly hoping to experience more often?",
    options: [
      { text: "wonder", tags: ["imagination", "expansion", "possibility"] },
      { text: "relief", tags: ["recovery", "letting go", "survival"] },
      { text: "belonging", tags: ["home", "warmth", "return"] },
      { text: "desire", tags: ["desire", "intimacy", "body"] },
      { text: "freedom", tags: ["freedom", "departure", "wildness"] },
      { text: "delight", tags: ["pleasure", "celebration", "appetite"] }
    ]
  },
  {
    text: "what is your current relationship to the past?",
    options: [
      { text: "i revisit it constantly", tags: ["longing", "grief", "nostalgia"] },
      { text: "i am trying to escape it", tags: ["departure", "letting go", "restlessness"] },
      { text: "i have mostly made peace with it", tags: ["recovery", "survival", "return"] },
      { text: "it follows me around", tags: ["grief", "exile", "displacement"] },
      { text: "i study it carefully", tags: ["observation", "making", "process"] },
      { text: "i barely remember it", tags: ["embodiment", "freedom", "present"] }
    ]
  },
  {
    text: "imagine someone who loves you completely. what do they tell you?",
    options: [
      { text: "slow down.", tags: ["observation", "solitude", "expansion"] },
      { text: "keep going.", tags: ["survival", "movement", "wildness"] },
      { text: "come home.", tags: ["home", "return", "belonging"] },
      { text: "stop apologising.", tags: ["defiance", "identity", "refusal"] },
      { text: "let yourself be seen.", tags: ["intimacy", "being seen", "desire"] },
      { text: "you are allowed to enjoy this.", tags: ["pleasure", "body", "appetite"] }
    ]
  }
];

// ─────────────────────────────────────────────────────────────
//  Part 3: scoring and UI logic
// ─────────────────────────────────────────────────────────────

// tag -> prescription id weights
const tagMap = {
  "embodiment":   { body: 3 },
  "pleasure":     { body: 2, nourisher: 2 },
  "release":      { body: 2, survivor: 1 },
  "celebration":  { body: 2 },
  "appetite":     { nourisher: 2, romantic: 1 },
  "nourishment":  { nourisher: 3 },
  "warmth":       { nourisher: 2 },
  "ordinary joy": { nourisher: 2 },
  "body":         { body: 2, romantic: 2 },
  "displacement": { exile: 3 },
  "migration":    { exile: 2 },
  "searching":    { exile: 2, searcher: 2 },
  "orientation":  { exile: 2 },
  "exile":        { exile: 3 },
  "identity":     { glamour: 3 },
  "performance":  { glamour: 2 },
  "defiance":     { glamour: 2 },
  "being seen":   { glamour: 2, witness: 2 },
  "refusal":      { glamour: 2 },
  "release":      { survivor: 2 },
  "recovery":     { survivor: 3 },
  "survival":     { survivor: 2, searcher: 2 },
  "letting go":   { survivor: 3 },
  "grief":        { survivor: 2, lost: 2 },
  "wonder":       { dreamer: 3 },
  "desire":       { dreamer: 2, romantic: 2 },
  "possibility":  { dreamer: 2 },
  "expansion":    { dreamer: 2 },
  "imagination":  { dreamer: 3 },
  "intimacy":     { witness: 3, romantic: 2 },
  "observation":  { witness: 3 },
  "longing":      { witness: 2, lost: 2 },
  "distance":     { witness: 2 },
  "transition":   { transit: 3 },
  "departure":    { transit: 3 },
  "freedom":      { transit: 2, searcher: 2 },
  "restlessness": { transit: 2 },
  "becoming":     { transit: 2, becoming: 3 },
  "memory":       { lost: 2 },
  "nostalgia":    { lost: 3 },
  "home":         { lost: 2 },
  "return":       { lost: 2 },
  "freedom":      { searcher: 2 },
  "solitude":     { searcher: 2 },
  "movement":     { searcher: 3 },
  "wildness":     { searcher: 2 },
  "risk":         { romantic: 2 },
  "ambivalence":  { romantic: 2 },
  "process":      { becoming: 2 },
  "making":       { becoming: 3 },
  "interiority":  { becoming: 2 },
  "transformation":{ becoming: 2 },
  "belonging":    { nourisher: 1, lost: 1 },
  "present":      { body: 1 }
};

let currentQuestion = 0;
let scores = {};

function startQuiz() {
  scores = {};
  prescriptions.forEach(p => { scores[p.id] = 0; });
  currentQuestion = 0;
  showScreen("quiz");
  renderQuestion();
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function renderQuestion() {
  const q = questions[currentQuestion];
  const total = questions.length;

  document.getElementById("progressFill").style.width =
    ((currentQuestion / total) * 100) + "%";
  document.getElementById("questionCount").textContent =
    (currentQuestion + 1) + " / " + total;

  const area = document.getElementById("questionArea");
  area.innerHTML = "";

  const qText = document.createElement("p");
  qText.className = "question-text";
  qText.textContent = q.text;
  area.appendChild(qText);

  const ul = document.createElement("ul");
  ul.className = "options-list";

  q.options.forEach(opt => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.text;
    btn.onclick = () => selectAnswer(opt.tags);
    li.appendChild(btn);
    ul.appendChild(li);
  });

  area.appendChild(ul);
}

function selectAnswer(tags) {
  tags.forEach(tag => {
    const weights = tagMap[tag];
    if (weights) {
      Object.entries(weights).forEach(([id, val]) => {
        if (scores[id] !== undefined) scores[id] += val;
      });
    }
  });

  currentQuestion++;
  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("progressFill").style.width = "100%";

  const winner = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])[0][0];

  const p = prescriptions.find(x => x.id === winner);
  if (!p) return;

  const num = String(prescriptions.findIndex(x => x.id === winner) + 1).padStart(2, "0");
  document.getElementById("resultEyebrow").textContent = "prescription no. " + num;
  document.getElementById("resultArchetype").textContent = p.archetype;
  document.getElementById("resultImage").src = p.artwork;
  document.getElementById("resultImage").alt = p.artworkTitle;
  document.getElementById("resultArtworkTitle").textContent = p.artworkTitle + " — maansi jain";
  document.getElementById("resultPrescription").textContent = p.prescription;
  document.getElementById("resultDosage").textContent = p.dosage;
  document.getElementById("resultSideEffects").textContent = p.sideEffects;
  document.getElementById("resultPoemTitle").textContent = p.poem;
  document.getElementById("resultPoemText").textContent = p.poemText;

  showScreen("result");
}

function resetQuiz() {
  startQuiz();
}
