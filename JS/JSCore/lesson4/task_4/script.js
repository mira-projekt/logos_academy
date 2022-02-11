"use strict";
// Завдання 4:
// — Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок
// і повертає новий масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):

// - const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’]) – запише в змінну масив [‘html’,‘css’,‘js’].

// - const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’])
//– запише в змінну масив[‘html’,‘css’,‘js’,‘python’,‘scss’]).

function removeDuplicates(arr) {
	let result = [],
		obj = {},
		e = 1;

	for (let str of arr) {
		let s = str.toLowerCase();
		if (obj[s] !== e) {
			result.push(str);
			obj[s] = e;
		}
	}
	return result;
}

const arr1 = removeDuplicates(["html", "css", "html", "js"]);

const arr2 = removeDuplicates([
	"html",
	"css",
	"js",
	"html",
	"js",
	"python",
	"js",
	"scss",
]);

console.log(arr1);
console.log(arr2);
