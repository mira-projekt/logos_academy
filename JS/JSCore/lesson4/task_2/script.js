"use strict";
// Завдання 2:
// — Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:
// - const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’].
// - const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’].

//var1 ________________________

function arrToString(arr) {
	let str = [];
	for (let i = 0; i < arr.length; i++) {
		str[i] = arr[i].toString();
	}
	return str;
}

const arr1 = arrToString([1, 2, 3]);
const arr2 = arrToString([10, 200, 3333]);

console.log(arr1);
console.log(arr2);

// var2 _______________________

// function arrToString(arr) {
// 	let str = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		str[i] = arr[i] + "";
// 	}
// 	return str;
// }

//var3 __________________________

// function arrToString(arr) {
// 	let str = arr.map((i) => String(i));
// 	return str;
// }

//var4___________________________

// let num = "1234";
// let arr = Array.from(num);
// console.log(arr);
// console.log(typeof arr[0]);
