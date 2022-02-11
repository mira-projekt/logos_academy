'use strict';
// Завдання 3:

// Написати розв’язок нижче описаного завдання за допомогою function expression or arrow:
// 1. Створіть функцію, в яку передається 2 параметри, які користувач вводить через вікно prompt().
// 2. Потрібно щоб функція виводила діапазон тільки простих чисел console.log(), між тими які ввів користувач.

// Приклад роботи:
// simpleNumber(10,15) – має повернути 11, 13
// simpleNumber (2,20) – має повернути 2,3,5,7,11,13,17,19



// Визначаємо базове число
let currentNumber = +prompt('Please enter number1.', 0);
// // Отримуємо кількість чисел, які нам потрібно вивести

let count = +prompt('Please enter number2.', 0), a = count;

// //фукція, що перевіряє натуральне число чи ні
const simpleNumber = num => {   
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// //Продовжуємо цикл до тих пір, поки кількість чисел не досягне нуля

while (count != 0 && currentNumber <= a) {
  if(simpleNumber(currentNumber)) {
  console.log(currentNumber);
  count--;
  }
  currentNumber++;
}
  
//vers_2

// let a = +prompt("Введіть число 1");
// let b = +prompt("Введіть число 2");

// let simpleNumber = (a,b) => {
//   let rez = '';
//   nextNum:
//   for (let i = a; i <= b; i++){
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         continue nextNum;
//        }
//       }    
//     console.log(i);
//     rez += ' ${i} ';
//     }
//   return rez;
// };
// console.log(simpleNumber(a,b));