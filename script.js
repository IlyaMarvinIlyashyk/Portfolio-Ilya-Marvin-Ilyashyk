
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

const printText = () => {
    scrambler.scramble(scrambleText[i % scrambleText.length], handleScramble);
    setTimeout(printText, 3000);
    i++;
}
printText();

// VIDEOS SCRIPT

const videos = document.querySelectorAll('video')

videos.forEach((e) => {
    e.addEventListener('mouseover', function () {
        this.play();
    });

    e.addEventListener('mouseleave', function () {
        this.pause();
    });
})

// NAV BAR SCROLL

const nav = document.querySelector('.navContainer');

let scrollPos = 0;

const scrollNavBar = () => {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
        // Scrolling UP
        nav.classList.add('is-visible');
        nav.classList.remove('is-hidden');
    } else {
        // Scrolling DOWN
        nav.classList.add('is-hidden');
        nav.classList.remove('is-visible');
    }
    scrollPos = windowY;
}

window.addEventListener('scroll', scrollNavBar);

// MOBILE HAMBURGER

const menu = document.querySelector('ul');
const hamburger = document.querySelector('.hamburger');
const active = document.querySelector('.active');
const inactive = document.querySelector('.inactive');
const menuLinks = document.querySelectorAll('.navLink');

const toggleMenu = () => {

    if (menu.classList.contains('showNav')) {
        menu.classList.remove('showNav');
        inactive.style.display = 'none';
        active.style.display = 'block';
    }

    else {
        menu.classList.add('showNav');
        inactive.style.display = 'block';
        active.style.display = 'none';
    }
};

const mobile = () => {

    if (window.innerWidth < 800) {
        
        hamburger.addEventListener('click', toggleMenu);

        menuLinks.forEach((navLink) => {
            navLink.addEventListener('click', toggleMenu)
        })
    }

    else if (window.innerWidth >= 800 && menu.classList.contains('showNav')) {
        menu.classList.remove('showNav');
        inactive.style.display = 'none';
        active.style.display = 'block';
    }

    else {
        hamburger.removeEventListener('click', toggleMenu);
        
        menuLinks.forEach((navLink) => {
            navLink.removeEventListener('click', toggleMenu)
        }) 
    }
}

window.addEventListener('resize', mobile);
window.addEventListener('load', mobile);

// loader

// document.documentElement.addEventListener("load", function () {
//     document.getElementById("loader").style.display = "block";
// });

// window.addEventListener("load", function () {
//     document.getElementById("loader").style.display = "none";
// });

// Animate on Scroll Library by Michal Sajnog

AOS.init();