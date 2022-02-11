"use strict";
// Завдання 3:

// Необхідно реалізувати наступний функціонал як на відео images, а саме:
// — на сторінці знаходяться три пустих блоки div.
// — при кліку на блок виводить функція prompt() в яку ми вводи url адресу зображення
// — це зображення стає фоном для цього конкретного блоку

//ver1 Вставка як backgroundImage

let box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
	box[i].addEventListener("click", function () {
		let imgMy = prompt("Введіть посилання на картинку");
		this.style.backgroundImage = `url('${imgMy}')`;
	});
}

//____________________________________
// ver2 Вставка як Image

// let box = document.querySelectorAll(".box");

// for (let i = 0; i < box.length; i++) {
// 	box[i].addEventListener("click", function () {
// 		let imgMy = prompt("Введіть посилання на картинку");
// 		let img = new Image();
// 		img.src = imgMy;
// 		img.style.height = "90%";
// 		img.style.width = "90%";
// 		img.style.padding = "15px";
// 		img.style.marginLeft = "10px";
// 		this.appendChild(img);
// 	});
// }
