alert("Commensing countdown, engines on!");
const username = prompt("Hi there, what's your name?");
alert(`Hi, ${username}. Welcome to The Mars Adventure Game!`);
alert("Yesterday you received a call from NASA...");
alert("They need a brave hero to go to Mars, and YOU have been chosen!!");
let excited = prompt("Are you excited? Type Y or N");
excited = excited.toUpperCase();

if (excited === "Y") {
  alert("I knew you'd say that. It's so cool that you're going to Mars!");
} else if (excited === "N") {
  alert("Well, it's too late to go back now.");
}

alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt("How many suitcases do you plan on bringing?");
numSuitcases = Number(numSuitcases);

if (numSuitcases > 2) {
  alert(
    "That's way too many! You'll have to pack more lightly. Try fitting it all into 2 suitcases."
  );
} else {
  alert("Perfect. You'll certainly fit in this spaceship!");
}

alert("You're allowed to bring one companion animal with you.");
let companionType = prompt(
  "What kind of companion animal would you like to bring?"
);
let companionName = prompt("What is your companion's name?");

let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();

let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

firstLetter = companionType[0];
firstLetter = firstLetter.toUpperCase();

otherLetters = companionType.slice(1);
otherLetters = otherLetters.toLowerCase();

companionType = firstLetter + otherLetters;

alert(`Cool, so you're bringing ${companionName} the ${companionType}.`);

alert("NASA has a interior design team offering to outfit your space ship.");
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt("Which decor would you like?");

let decor;
if (decorChoice === "A") {
  decor = "modern minimalist";
} else if (decorChoice === "B") {
  decor = "Retro/vintage space age";
} else if (decorChoice === "C") {
  decor = "Victorian-era steampunk";
}

alert(
  `${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship. It has a nice ring to it.`
);

let timer = 5;
while (timer > 0) {
  alert(`${timer}...`);
  timer -= 1;
}
alert("*** LIFTOFF ***");
