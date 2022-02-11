"use strict";

// Завдання 2:
// Необхідно реалізувати наступний функціонал як на відео taskList, а саме:

// — при кліку кнопку Додати додававляти нове завдання в список завдань

// — якщо при добавлянні поле пусте має вивести повідомлення у модальному вікні про попередження: “Пусте поле не можна добавити”

// — в списку завдань при кліку на чекбокс завдання має видалятися зі списку

// — якщо залишилося 1не завдання то його не можна видалити

// — якщо захочемо видалити то має вивести повідомлення у модальному вікні про попередження: “Останній таск зі списку Ви не можете видалити”

const closeButton = document.querySelector(".error__close");
const errorMessage = document.querySelector(".error__message");
const taskList = document.querySelector("ul");
const addButton = document.querySelector(".container__addTask--addButton");
const $input = document.querySelector(".container__addTask--input");
const errorWindow = document.querySelector(".error");

const $list = [];
let check = document.createElement("input");

addButton.addEventListener("click", () => {
	let text = document.createElement("span");
	text.textContent = $input.textContent;
	let label1 = document.createElement("label");
	check.type = "checkbox";
	check.addEventListener("click", function () {
		console.log(text.textContent);
	});

	label1.appendChild(check);
	label1.appendChild(text);
	// taskList.appendChild(label1);

	if ($input.textContent === "") {
		errorWindow.classList.remove("hidden");
		errorMessage.textContent = "Empty input field! Enter the task.";
	} else {
		$list.push(taskList.appendChild(label1));
		$input.textContent = "";
	}
});

// function listeners() {
// 	for (let i = 0; check.length > i; i++) {
// 		check[i].addEventListener("click", (e) => {
// 			deleteTask(e.target);
// 		});
// 	}
// }

function deleteTask(node) {
	if ($list.length === 1) {
		errorWindow.classList.remove("hidden");
		errorMessage.textContent =
			"Last task in the task list! You cannot delete it.";
	} else {
		let target = node.outerHTML;
		let index = $list.indexOf(target);
		node.remove();
		$list.splice(index, 1);
	}
}

function render() {
	function init() {
		let list = $list.join("");
		return list;
	}

	taskList.innerHTML = init();
}

closeButton.addEventListener("click", () => {
	errorWindow.classList.add("hidden");
});
