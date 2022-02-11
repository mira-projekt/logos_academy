"use strict";
// Завдання 1:
// Необхідно реалізувати наступний функціонал як на відео backgrounds, а саме:
// — при кліку на текст колір появляється блок з кольорами

// — при кліку на текст зображення появляється блок з зображеннями

// — при кліку на самі блоки з кольорами змінюється колі фону

// — при кліку на самі блоки з зображеннями змінюється зображення фону

// — послідовність чи я задаю колір фону а потім зображення або навпаки не має значення


let textColor = document.querySelector('.text-color');
let textImg = document.querySelector('.text-img');

let wrapBg = document.querySelector ('.wrap-bg');
let wrapImg = document.querySelector ('.wrap-img');

//choose the type of background for the page
textColor.addEventListener('click', () => {
  wrapBg.style.display = "flex";
  wrapImg.style.display = "none";
  listBgColor();
  
});
textImg.addEventListener('click', () => {
  wrapImg.style.display = "flex";
  wrapBg.style.display = "none"; 
  listBgImg(); 
});

let bodyBg = document.querySelector('body');

// backgroundcolor 
let boxBgcolor = document.querySelectorAll('.box-bg');

function listBgColor() {
	for (let i = 0; i < boxBgcolor.length; i++) {     
  	boxBgcolor[i].addEventListener("click",  (e) => {      
      let Bg = e.target.style.backgroundColor;
      bodyBg.style.backgroundColor = Bg;
      bodyBg.style.backgroundImage = "none";
      
    });
}
}
listBgColor(); 


// background-img 
let boxImg = document.querySelectorAll('.box-img');

function listBgImg(){
for (let i = 0; i < boxImg.length; i++) {
	boxImg[i].addEventListener("click",  (e) => {
		let imgMy = e.target.style.backgroundImage;
		bodyBg.style.backgroundImage = imgMy;
	});
}
}
listBgImg();