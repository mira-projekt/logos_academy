"use strict";
// Завдання 3:

// — Створіть об’єкт MyMath який буде реалізовувати наступний функціонал:
// - MyMath.PI – це властивість яка має повертати число Pi.
// Повертає число 3,14159265358979, округлене до 15 знаків після коми.
// - MyMath.pow(number, degree) – це метод який має повертати число в певній степені.
// - MyMath.abs(number) – це метод який має повертати модулю числа.
// - MyMath.max(number1, number2…) – це метод який має повернути максимальне число
//  з переданих.Кількість чисел необмежена.
// - MyMath.min(number1, number2…) – це метод який має поаернути мінімальне число
//  з переданих.Кількість чисел необмежена.
// Також ви маєте повернути наступні повідомлення при використанні методів, якщо:
// - Якщо передали не число - Повинно бути числове значення.
// - Якщо в функцію нічого не передали - Будь ласка, введіть число або числа(в залежності від методу)!
// При створенні цих методів використання об’єкту Math заборонене!

const MyMath = {
	PI() {
		let a = 3.14159265358979;
		return a;
	},

	pow(number, degree) {
		let result = 1;
		let check = false;
		if (degree != 0) {
			if (degree < 0) {
				degree = -degree;
				check = true;
			}
			for (let i = 1; i <= degree; i++) {
				result *= number;
			}
			if (check) {
				result = 1 / result;
			}
			return result;
		}
	},

	//version_2 pow()
	// pow(number, degree) {
	//   if (degree < 1) {
	//   alert(`Степінь ${degree} не підтримується, напишіть натуральне число`);
	//   } else {
	//   alert( this(number, degree) );
	//   }
	//   return (degree >= 0) ? 1 : number * this(number, degree - 1);
	// },

	max(...arg) {
		let maxN = arg[0];
		for (let i = 2; i < arg.length; i++) {
			if (arg[i] > maxN) {
				maxN = arg[i];
			}
		}
		return maxN;
	},

	min(...arg) {
		let maxN = arg[0];
		for (let i = 1; i < arg.length; i++) {
			if (arg[i] < maxN) {
				maxN = arg[i];
			}
		}
		return maxN;
	},

	abs(number) {
		if (number == +number) {
			return number > 0 ? number : 0 - number;
		} else if (number != "" && number !== null) {
			return prompt("Повинно бути числове значення");
		} else {
			return alert("Будь ласка, введіть число!");
		}
	},
};

let number = prompt("Введіть число");
// let degree = prompt('Введіть  2 число');
console.log(MyMath.abs(number));
console.log(MyMath.pow(3, -3));
console.log(MyMath.PI());
console.log(MyMath.min(17, 14, 100, -3));
console.log(MyMath.max(17, 14, 100, -3));
