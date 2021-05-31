
// SCRAMBLER TEXT 

import scramblerFunction from './scramble.js'

// on /of 
scramblerFunction();

const scrambleText = [
    'Hey',
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

window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 100) {
        document.querySelector('.ilyaAnchor').style.display = "block";
    } else {
        document.querySelector('.ilyaAnchor').style.display = "none";
    }
};

// ---------------------------------


// function scrollHandler(event) {
//     event.preventDefault();

//     const menuLink = document.querySelectorAll('.mainNav ul li a');
//     const scrollPositionY = window.scrollY;
//     // const windowPositionY = window.screenY;

//     menuLink.forEach(link => {
//         // Get DOM element by ID.
//         const section = document.querySelector(link.hash);

//         // If the current scroll position is somewhere within a specific section.
//         if (scrollPositionY >= section.offsetTop && scrollPositionY < section.offsetTop + section.offsetHeight) {
//             link.classList.add('linkActive');

//         } else {
//             link.classList.remove('linkActive');
//         }
//     });

//     // Check if in home section only to determine whether to hide/show scroll to top button.

let mainNavLinks = document.querySelectorAll(".mainNav ul li a");
// let mainSections = document.querySelectorAll("main section");


window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("linkActive");
        } else {
            link.classList.remove("linkActive");
        }
    });
});


console.log(mainNavLinks)
console.log(mainSections)

// }

// window.addEventListener('scroll', scrollHandler);