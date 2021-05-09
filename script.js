
// SCRAMBLER TEXT 

import scramblerFunction from './scramble.js'

scramblerFunction();
// on /of 

// scramble text

const scrambleText = [
    'Web Developer',
    'Actor',
    'Web Developer',
    'Traveler',
    'Web Developer',
    'Gamer',
    'Web Developer',
    'Cat Lover'
];

const scrambler = new window.Scrambler();
const handleScramble = (newText) => {
    document.getElementById('scrambleText').innerHTML = newText;
}

let i = 0;

function printText() {
    scrambler.scramble(scrambleText[i % scrambleText.length], handleScramble);
    setTimeout(printText, 3000);
    i++;
}
printText();

