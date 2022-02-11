"use strict";
// Завдання 2:
// Необхідно реалізувати наступний функціонал як на відео secret, а саме:
// — по замовчуванню блок має певний стиль і наступний текст: “У мене є секрет!”
// — при наведенні на блок його стиль змінюєть і текст стає наступним: “Хочеш знати який”
// — при натисканні і утриманні клавіші мишки знову по блоку стиль змінюється і текст стає наступним: “А я тобі не скажу”
// — при відпусканні клавіші мишки стиль і текст знову стає “Хочеш знати який”
// — при відведенні мишки стиль стає як базовий і текст “У мене є секрет!”

let box = document.querySelector(".container");
let text = document.querySelector(".text");

//при наведенні
box.addEventListener("mouseover", function () {
	this.style.backgroundColor = "yellow";
	text.innerHTML = "Хочеш знати який?";
	text.style.color = "blue";
});
// натискаємо
box.onmousedown = function () {
	this.style.backgroundColor = " black";
	text.innerHTML = "A я тобі не скажу!";
	text.style.color = "#FFFFFF";
};

//відпускаємо
box.onmouseup = function () {
	this.style.backgroundColor = "yellow";
	text.innerHTML = "Хочеш знати який?";
	text.style.color = "blue";
};

// відводимо мишку
box.addEventListener("mouseout", function () {
	this.style.backgroundColor = "purple";
	text.innerHTML = "У мене є секрет!";
	text.style.color = "#FFFFFF";
});
