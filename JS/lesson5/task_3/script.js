'use strict';

// Завдання 3:
// — Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1. Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// 2. Кількість параметрів у функції може бути від 2х і більше.
// 3. Забороняється використовувати Math.max().
// — Приклад роботи:
// 1. max(5,-2) – має повернути 5.
// 2. max(5,-2, 30, 6) – має повернути 30

// let maxNum = [5,-2, 30, 6];

// for (let i = 0; i < maxNum.length; i++) {
//     if(maxNum[i] > maxNum[0]){
//         maxNum[0] = maxNum[i];
//     }

// }
// alert(maxNum[0]);


function maxNum(...arg) { 
  let maxN = arg[0];
  for(let i=2; i<arg.length; i++){
   if(arg[i] > maxN){
     maxN = arg[i];
   }
  }
  return maxN;
}
alert (maxNum(5, -2, 30, 6));
alert (maxNum(5, -2));