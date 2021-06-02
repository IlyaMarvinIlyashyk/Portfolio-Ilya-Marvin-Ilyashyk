
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

const navDesktop = () => {
    
    let previousScrollPosition = window.pageYOffset;
    
    if (window.innerWidth >= 625) {
        window.onscroll = () => {
            const currentScrollPosition = window.pageYOffset;
            
            if (previousScrollPosition > currentScrollPosition) {
                
                document.querySelector(".navContainer").style.top = "0";
            } else {
                document.querySelector(".navContainer").style.top = "-10rem";
            }
            
            previousScrollPosition = currentScrollPosition;
        }
    }
    
    else if (window.innerWidth < 625) {
        return
    }
}

window.addEventListener("resize", navDesktop)
window.addEventListener("load", navDesktop)
const menu = document.querySelector("ul");
const hamburger = document.querySelector(".hamburger");
const active = document.querySelector(".active");
const inactive = document.querySelector(".inactive");

hamburger.addEventListener("click", toggleMenu)

function toggleMenu() {

    if (menu.classList.contains("showNav")) {
        menu.classList.remove("showNav");
        inactive.style.display = "none";
        active.style.display = "block"
    }

    else {
        menu.classList.add("showNav");
        inactive.style.display = "block";
        active.style.display = "none";
    }
}

const menuLinks = document.querySelectorAll(".navLink")

menuLinks.forEach(
    function (navLink) {
        navLink.addEventListener("click", toggleMenu)
    })


console.log(window.innerWidth)



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

