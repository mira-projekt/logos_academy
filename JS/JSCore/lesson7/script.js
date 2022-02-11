"use strict";
// Завдання 2:
// Необхідно реалізувати наступний функціонал як на відео keyboard, а саме:

// — потрібно створити вигляд клавіатури за допомогою html та css

// — за допомогою js та події клавіатури (keyboard event) необхідно добавляти текст який ми вводимо а також підсвічути клавіші які натискаємо

// — мова клавіатури тільки одна – англійська

// — клавіша tab – має робити табуляцію

// — клавіша caps lock – має робити текст в верхньому регістрі

// — клавіша enter – має переносити текст на новий рядок

// — клавіша backspace – має видаляти текст по одній букві

// — клавіші shift – мають робити текст у верхньому регістрі при утриманні даної клавіші

const keyboard = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"-",
	"=",
	"Backspace",
	"Tab",
	"q",
	"w",
	"e",
	"r",
	"t",
	"y",
	"u",
	"i",
	"o",
	"p",
	"[",
	"]",
	"\\",
	"CapsLock",
	"a",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	";",
	"'",
	"Enter",
	"Shift",
	"z",
	"x",
	"c",
	"v",
	"b",
	"n",
	"m",
	",",
	".",
	"/",
	"Shift",
	"Control",
	"Control",
	"C",
	"Alt",
];
// document.onkeydown = function (e) {
// 	console.log(e.key + ", " + e.keyCode);
// 	keyboard.push(e.key);
// 	console.log(keyboard);
// };
// document.onkeydown = function (event) {
// 	console.log(event);
// 	keyboard.push(event.key);
// 	console.log(keyboard);
// };

function init() {
	let out = "";
	for (let i = 0; i < keyboard.length; i++) {
		out +=
			'<div class="myKey" data = " ' +
			keyboard[i] +
			' " >' +
			String.fromCharCode(keyboard[i]) +
			"</div>";
		document.querySelector("#keyboard").innerHTML = out;
	}
}
init();

// Клавиша Backspace:

//document.keyup(function(e) {
// 	if (e.key === "Backspace" || e.keyCode === 8) {
// alert('Нажата клавиша Backspace');
// document.getElementByTagName("div")[16].classList.add("bg-tap");
// let del = document.getElementByTagName("div")[1].innerText;
// del.innerText(0,- 1);
// 	}
// });

//enter
// else if (e.keyCode === 13){
//   document.querySelector('').innerHTML += '/n';
// }

// document.keyup(function(e) {
// 	if (e.shiftKey && e.keyCode === 16) {
// 		alert('Нажат Shift');
// 	}
// });
