
// SCRAMBLER TEXT 

import scramblerFunction from './scramble.js'

// on /of 
scramblerFunction();

const scrambleText = [
    'Hello',
    'Salut',
    'Privet',
    '¿Qué tal?',
    'Ciao',
    'Yā, Yō',
    'Hallo, Hi',
    'Oi',
    'Nǐ hǎo',
    'Anyoung',
    'Ahlan',
    'Hej, Halløj',
    'Habari, Hujambo',
    'Hoi, Hallo',
    'Yassou',
    'Hai, Helo',
    'Selam',
    'Hej, Tjena',
    'Hei'
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

// NAV BAR SCROLL EFFECT

let previousScrollPosition = window.pageYOffset;
window.onscroll = () => {
    const currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition) {
        document.querySelector(".navContainer").style.top = "0";
    } else {
        document.querySelector(".navContainer").style.top = "-10rem";
    }

    previousScrollPosition = currentScrollPosition;
}

// VIDEOS SCRIPT

document.querySelector(".podcastVideo").addEventListener("mouseover", function () {
    this.play();
});

document.querySelector(".podcastVideo").addEventListener("mouseleave", function () {
    this.pause();
});

document.querySelector(".newsVideo").addEventListener("mouseover", function () {
    this.play();
});

document.querySelector(".newsVideo").addEventListener("mouseleave", function () {
    this.pause();
});

document.querySelector(".covidVideo").addEventListener("mouseover", function () {
    this.play();
});

document.querySelector(".covidVideo").addEventListener("mouseleave", function () {
    this.pause();
});

document.querySelector(".willowVideo").addEventListener("mouseover", function () {
    this.play();
});

document.querySelector(".willowVideo").addEventListener("mouseleave", function () {
    this.pause();
});

document.querySelector(".everythingVideo").addEventListener("mouseover", function () {
    this.play();
});

document.querySelector(".everythingVideo").addEventListener("mouseleave", function () {
    this.pause();
});

