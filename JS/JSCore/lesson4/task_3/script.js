"use strict";
// Завдання 3:
// — Напишіть функцію getLength(arr), яка приймає масив arr з стрічок
//і повертає новий масив з довжиною елементів тих стрічок:

// - const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3].

// - const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8].

function getLength(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		res[i] = arr[i].length;
	}
	return res;
}
const arr1 = getLength(["Ivan", "Pavlo", "Ira"]);
const arr2 = getLength(["Oleksiy", "Andriana"]);

console.log(arr1);
console.log(arr2);
