"use strict";
// Завдання 1:
// Необхідно реалізувати наступний функціонал як на відео color, а саме:
// — при першому наведенні мишки на блок колір фону має ставати червоний
// — при відведенні мишки блок має ставати знову фіолетовий
// — при другому наведенні – блок стає жовтим
// — при третьому – зеленим
// — при наступному наведенні все починається спочатку: червоний, жовтий, зелений
// — так має відбуватися безкінечно по колу

let i = 0;
const arr = ["red", "yellow", "green"];
document
	.querySelector(".container")
	.addEventListener("mouseover", function (e) {
		e.target.style.backgroundColor = arr[i];
	});

document.querySelector(".container").addEventListener("mouseout", function (e) {
	e.target.style.backgroundColor = "purple";
	i++;
	if (i >= arr.length) {
		i = 0;
	}
});

//ver2 ????????????

// const colors = ["green", "red", "yellow"];

// let index = 0;

// function colorChanging() {
// 	index++;
// 	if (index > 2) {
// 		index = 0;
// 	}
// }

// document.querySelector(".container").addEventListener("mouseout", function (e) {
// 	colorChanging();
// });

//___________________________________________
// ver3 логіка

// function over() {
// провіряю
// міняю кольора
// рахую
// }

// function out() {
// міняю колір на фіолетовий
// }

// eвент.over(функція over)
// eвент.out(функція out)
