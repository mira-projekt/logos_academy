'use strict';
// Завдання 2:
// — Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1. Створити функцію яка буде приймати одне число.
// 2. В середині функції перевіряємо чи це число є простим.
// 3. Після перевірки виводимо повідомлення в console.log().

// let num = 18;

// let prime = true;
// for (let i = 2; i < num; i++) {
// 	if (num % i == 0) {
// 		prime = false;
// 		break; // вийдемо з циклу
// 	}
// }

// console.log(prime);

let num = +prompt('Введіть число');

function isPrime(num) {
    let prime = num != 1;
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
let primeN = isPrime(num);
console.log(`${num}`, primeN);



// function getNumbers(num) {
 
//   for (let i = 2 ; i < num ; i++){
//     if (num % i  === 0) {
//         return (`${num} это не простое число`);
//     }
//   }
//   if(num > 1) {
//   		return (`${num} это простое число`);
// 	}
// 	return (`${num} это не простое число`);

// }
// console.log(getNumbers(15));