//Characters
var jGreen = {
  firstName: "Jacob",
  lastName: "Green",
  occupation: "Artist",
  age: "30",
  color: "green",
  description: "He has a lot of connections and is always willing to help people out -- for a price.",
};
var dOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Biologist",
  age: "50",
  color: "white",
  description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"
};
var vPlum = {
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Video game designer",
  color: "purple",
  age: "22",
  description: "He is a billionaire video game designer who is embracing his new popularity."
};
var kScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  occupation: "Actress",
  color: "red",
  age: "25",
  description: "She is an A-list movie star whose past haunts her."
};
var ePeacock = {
  firstName: "Eleanor",
  lastName: "Peakcock",
  occupation: "Socialite",
  age: "55",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity."
};
var jMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  occupation: "Football Player",
  color: "yellow",
  age: "35",
  description: "He is a former football player who tries to get by on his former glory."
};

//Weapons
var rope = {
  name: "rope",
  weight: "2",
  pain: "low"
};
var knife = {
  name: "knife",
  weight: "1",
  pain: "medium"
};
var candlestick = {
  name: "candlestick",
  weight: "1",
  pain: "high"
};
var dumbbell = {
  name: "dumbbell",
  weight: "15",
  pain: "high"
};
var poison = {
  name: "poison",
  weight: "1",
  pain: "very high"
};
var axe = {
  name: "axe",
  weight: "5",
  pain: "medium"
};
var bat = {
  name: "bat",
  weight: "1",
  pain: "low"
};
var trophy = {
  name: "trophy",
  weight: "3",
  pain: "medium"
};
var pistol = {
  name: "pistol",
  weight: "3",
  pain: "really high"
};

//House Rooms
var diningRoom = {
  name: "Dining Room"
};
var conservatory = {
  name: "Conservatory"
};
var kitchen = {
  name: "Kitchen"
};
var study = {
  name: "Study"
};
var library = {
  name: "Library"
};
var billiardRoom = {
  name: "Billiard room"
};
var lounge = {
  name: "Lounge"
};
var ballroom = {
  name: "Ballroom"
};
var hall = {
  name: "Hall"
};
var aSpa = {
  name: "A spa"
};
var livingRoom = {
  name: "Living room"
};
var observatory = {
  name: "Observatory"
};
var theater = {
  name: "Theater"
};
var guestHouse = {
  name: "Guest house"
};
var aPatio = {
  name: "A patio"
};

//Populate Array with Objects

var characters = [];
var weapons = [];
var rooms = [];

characters.push(jGreen, dOrchid, vPlum, kScarlet, ePeacock, jMustard);
weapons.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
rooms.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, aSpa, livingRoom, observatory, theater, guestHouse, aPatio);

function getRandom(items) {
  return items[Math.floor(Math.random() * (items.length - 1))];
}

function setMystery() {
  var comboMystery = [];
  theCharacter = getRandom(characters);
  theWeapon = getRandom(weapons);
  theRoom = getRandom(rooms);
  comboMystery.push(theCharacter, theWeapon, theRoom);
  return comboMystery;
}

var virtualEnvelope = [];
virtualEnvelope = setMystery();

function printMystery(theMystery) {
  console.log(theMystery[0].firstName, theMystery[0].lastName, 'used a', theMystery[1].name, 'in the', theMystery[2].name);
}

printMystery(virtualEnvelope);
