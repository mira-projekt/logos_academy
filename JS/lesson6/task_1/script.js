'use strict';
// Завдання 1:

// — Написати розв’язок нижче описаного завдання за допомогою arrow function:
// 1. Створити функцію яка прийматиме одне числове значення.
// 2. Це значення в функції означатиме кількіть елементів послідовності Фібаначі.
// 3. Обрахуйте цю послідовність і виведіть виведіть всі її елементи в консоль.
// Приклад роботи:
// 1. fib(5) – має повернути 1 1 2 3 5.
// 2. fib(10) – має повернути 1 1 2 3 5 8 13 21 34 55.

// const zero = x => x === 0 ? 0 : res(x);
// const one = y => y === 1 ? y : zero(y);
// const res = z => z > 1 ? res(z - 1) + res(z - 2) : one(z);

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log( fib(5) ); // 5
// console.log(fib(10)); // 55

let fib = n => {
  let a = 1;
  let b = 1;
  if (n == 1) {
    console.log(a);
  } else if (n == 2 || n >= 3) {
    console.log(a); 
    console.log(b);      
    }
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
  }  
  return b;
};
fib(5);
fib(10);

// const fib = n => {
//   const array = Array(n);
//   for (let i = 0; i < array.length; i++) {
//     if (i > 1) {
//       array[i] = array[i - 1] + array[i - 2];
//     } else {
//       array[i] = 1;
//     }
//   }
//   return array;
// };

// console.log(fib(5));

