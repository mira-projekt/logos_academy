"use strict";
// Завдання 1:

// Необхідно зробити наступні дії з файлом homework.html за допомогою JS. Запропонувати користувачу вибрати стиль для сторінки. А саме:

// — фон для сторінки

// — тип шрифта на сторінці

// — вирівнювання для заголовка h1

// — фон для параграфа з посиланнями

// — колір тексту у параграфі з посиланнями і для самих посилань. При чому колір тексту для посилань призначити у циклі

// — колір, розмір, товщину тексту у елементі div

// — тип маркера для маркованого списку на сторінці

// Таким чином слід запропонувати користувачу ввести десять налаштувань сторінки і застосувати їх. Ці дані вводимо в кожен окремий prompt().

// ДОДАТОК ДО ЗАВДАННЯ: замість зсилок на конкретні сайти, вивести у панелі навігації зсилки на три сайти, які вкаже користувач.

// Наприклад користувач у вікно prompt() ввів адресу football24.ua, в такому разі треба створити посилання, яке веде на сайт football24, а текстом цього посилання(тим, по чому можна клікнути) буде також football24.ua.

//1..фон для сторінки
let backgroundColor = prompt(
	"На сайті: https://www.imgonline.com.ua/color-palette.php  оберіть колір фону Вашої сторінки та запишіть його номер у поле нижче.Наприклад, rgb(250,240,230)"
);

let pageBackground = (backgroundColor) => {
	if (backgroundColor !== "" && backgroundColor !== null) {
		document.body.style.background = backgroundColor;
	} else {
		document.body.style.backgroundColor = "rgb(255, 250, 250)";
	}
};
pageBackground(backgroundColor);

//2..тип шрифта на сторінці

let fontFamily = prompt("Оберіть тип шрифта для сайту");
document.body.style.fontFamily = fontFamily;

//3..вирівнювання для заголовка h1

let textAlign = prompt("Задайте вирівнювання для заголовку");
document.querySelector("h1").style.textAlign = textAlign;

//4..фон для параграфа з посиланнями

let backgroundPar = prompt(`Оберіть фон для параграфу 'Улюблені сайти'`);

let p = document.querySelector("p");
p.style.background = backgroundPar;

//5..колір тексту у параграфі з посиланнями і для самих посилань. При чому колір тексту для посилань призначити у циклі
//у параграфі

let colorP = prompt(
	`Задайте колір тексту для параграфу "Мої улюблені сайти" (англ.)`
);

p.style.color = colorP;

//для посилань
let hexA = prompt("Напишіть колір тексту для посилань (англ.)");
let colorLinks = (hexA) => {
	let links = document.getElementsByTagName("a");
	for (let i = 0; i < links.length; i++) {
		if (links[i].href) {
			links[i].style.color = hexA;
		}
	}
};
colorLinks(hexA);

//6.. колір, розмір, товщину тексту у елементі div

let divSt = document.querySelector("div.learning-plan");

//color
let colorText = prompt(
	"Задайте колір шрифта ( у форматі:#000000, rgb(13, 57, 110)  або англ."
);
divSt.style.color = colorText;

//sizeText
let sizeText = +prompt("Задайте розмір тексту");

function font() {
	if (sizeText > 0) {
		sizeText = sizeText + "px";
		divSt.style.fontSize = sizeText;
	} else {
		divSt.style.fontSize = "medium";
	}
}
font(sizeText);

//fontWeight
let fontWeight = +prompt("Задайте товщину тексту в діапазоні від 100 до 900");
divSt.style.fontWeight = fontWeight;

//7..тип маркера для маркованого списку на сторінці

let marker = +prompt(
	"Оберіть тип для маркованого списку та запишіть його номер: 1 -точка; 2 - коло, 3 -квадрат"
);

let mark = document.getElementById("myList");

let myFunction = (marker) => {
	if (marker === 2) {
		mark.style.listStyleType = "circle";
	} else if (marker === 3) {
		mark.style.listStyleType = "square";
	} else {
		mark.style.listStyleType = "disc";
	}
};
myFunction(marker);

//8..замість зсилок на конкретні сайти, вивести у панелі навігації зсилки на три сайти, які вкаже користувач

let mySite1 = prompt("Введіть посилання на Ваш улюблений сайт 1"),
	mySiteName1 = prompt("Напишіть назву сайту 1");

let mySite2 = prompt("Введіть посилання на Ваш улюблений сайт 2"),
	mySiteName2 = prompt("Напишіть назву сайту 2");

let mySite3 = prompt("Введіть посилання на Ваш улюблений сайт 3"),
	mySiteName3 = prompt("Напишіть назву сайту 3");

let a = document.querySelectorAll("a");

a[0].setAttribute("href", `${mySite1}`);
a[0].textContent = mySiteName1;

a[1].setAttribute("href", `${mySite2}`);
a[1].textContent = mySiteName2;

a[2].setAttribute("href", `${mySite3}`);
a[2].textContent = mySiteName3;
