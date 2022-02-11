"use strict";

// Завдання 1:
// Необхідно реалізувати наступний функціонал як на відео scroll, а саме:
// — при скролі текст “scroll down” збільшує розмір тексту

// — далі блок з текстом “slide from left” зміщує чуть позицію вправо а також збільшується лінія підкреслення

// — далі картинка(можна використати будь яку) зміщується вліво

// — ну і в кінці текст “scroll up” зменшує розмір тексту

// — при кліку на “scroll down” відбувається автоматичний скрол до блоку “slide from left”

// — при кліку на “scroll up” відбувається автоматичний скрол до верху сторінки


const leftSlide = document.querySelector('.from_left');
const rightSlide = document.querySelector('.from_right');
const toDown = document.querySelector('.to_down');
const toTop = document.querySelector('.to_top');
const toBottom = document.querySelector('#bottom');
const $top  = document.querySelector('#top');

const scrollItems = function () {

    const options = {
        moveIndex: 4,
        stopColapsing: 1000,
        widthCap: 8,
        fontGrow: 12,
        fontMax: 450,
        bottomFontMin: 206
    };
    
    if(window.scrollY <= options.fontMax){
        toDown.style.fontSize = `${window.scrollY / options.fontGrow + 24}px`;
        
    }    

    if (window.scrollY <= options.stopColapsing) {
        leftSlide.style.left = `${window.scrollY / options.moveIndex + 100}px`;
        leftSlide.style.width = `${window.scrollY / options.widthCap + 250}px`;
        rightSlide.style.right = `${window.scrollY / options.moveIndex + 100}px`;
    }

    toTop.style.fontSize = `${options.bottomFontMin - (window.scrollY / options.fontGrow + 24)}px`;
};

toDown.addEventListener('click', ()=> {
  toBottom.scrollIntoView({        
        behavior: "smooth"
    });
});

toTop.addEventListener('click' ,()=>{
    $top.scrollIntoView({        
        behavior: "smooth"
    });
});

window.addEventListener('scroll', scrollItems);
