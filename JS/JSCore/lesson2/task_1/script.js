'use strict';
// Завдання 1:

// — Користувач вводить текст в prompt. Потрібно порахувати і вивести кількість пробілів, які були введені.

//Вирішення
//Варіант 1
// let textSplit = prompt('Введіть текст');
// console.log(`Кількість  ${ textSplit.length}`);
// console.log(`Кількість пробілів ${ textSplit.split (' ').length-1}`);


//Варіант 2
// let ask = prompt('enter the text');
// let space = 0;
// for (let i = 0; i < ask.length; i++) {
//   if (ask[i] === ' ') {
//        space++;
//      } 
// }
// console.log(space);



//Варіант3
// let str = prompt('Введіть текст');

// function s(str) {
//   const arr = str.split(' ');
//   return arr.length - 1;
// }
// console.log(`Кількість пробілів`,':', s(str));

//Варіант4
let text = prompt('Введіть текст');

function pribirCount(text){
let res=text.match(/ /g);
return res.length;
}

//виклик функції
console.log("Кількість пробілів: "+pribirCount(text));