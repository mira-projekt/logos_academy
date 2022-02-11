// while, do...while

// while(умова){
//     тіло циклу
// }

// for(let i=1; i<=3; i++){
//     document.write(`<h2>Loop ${i}</h2>`)
// }

// let i = 1;
// while (i <= 3) {
//     document.write(`<h2>Loop ${i}</h2>`);
//     i++;
// }

// if else if else for while do...while{}


// if(true){
//     let a = 10;
//     console.log(a);
// }
// console.log(a);

// let a = 20;
// if(true){
//     let a = 10;
//     console.log(a);
// }
// console.log(a);

// let a = 20;//10
// if(true){
//     a = 10;
//     console.log(a);
// }
// console.log(a);

// if(true){
//     var a = 10;
//     console.log(a);
// }
// console.log(a);

// let i=-200;
// for( ; i<=200 ; ){
//     document.write(`<h2>Loop ${i}</h2>`);
//     i+=10;
// }

// let i = -200;
// while (i <= 200) {
//     document.write(`<h2>Loop ${i}</h2>`);
//     i+=10;
// }

// let ask = prompt('write name the best football club');
// while(ask != 'Arsenal'){
//     ask = prompt('write name the best football club');
// }

// let count = 0;
// let ask = prompt('write name the best football club');
// while(ask != 'Arsenal'){
//     ask = prompt('write name the best football club');
//     count++;
// }
// console.log('Кількість неправельних введень =', count);

// !=, !==
// ==, ===

// let ask = +prompt('Скільки буде 2х2');
// while(ask !== 4){
//     ask = +prompt('Скільки буде 2х2');
// }

// document.write(`<h2>Старт циклу</h2>`);
// let i=1;
// // let j=1;
// // let i = 1, j;
// while (i <= 10) {
//     document.write(`<h3>Loop Outside ${i}</h3>`);
//     let j = 1;
//     while (j <= 3) {
//         document.write(`<h4>Loop inside ${j}</h4>`);
//         j++;
//     }
//     i++;
// }
// document.write(`<h2>Кінець циклу</h2>`);

// do {
//     тіло циклу
// }
// while(умова);

// let i = 1;
// do {
//     document.write(`<h3>Loop ${i}</h3>`);
//     i++;
// }
// while (i <= 3);

// let i = 1;
// do {
//     document.write(`<h3>Loop ${i}</h3>`);
//     i++;
// }
// while (i >= 3);

// let i = 1;
// do {
//     if (i <= 3) {
//         document.write(`<h3>Loop ${i}</h3>`);
//         i++;
//     }
// }
// while (i <= 3);

// Користувач вводить по черзі 5 чисел в prompt. Необхідно знайти кількість від'ємних чисел і вивести в консоль
// let count = 0;
// let i = 1;
// while (i <= 5) {
//     let num = +prompt(`write some number ${i} of 5`);
//     if(num < 0) count++;
//     i++;
// }
// console.log(`Кількість від'ємних чисел`, count);

// Користувач вводить числа по черзі до тих пір поки не введе від'ємне число. 
// Порахувати кількість чисел до введення від'ємного числа і вивести всі ці числа в одному рядку через пробіл

// let count = 0;
// let str = '';
// let num = +prompt('write some number');
// while (num > 0) {
//     if (num > 0) {
//         count++;
//         str += num + ' ';
//     }
//     num = +prompt('write some number');
// }
// console.log(`Кількість чисел`, count);
// console.log(`Введені числа =>`, str);

// let count = 0;
// let str = '';
// let num = +prompt('write some number');
// while (num > 0) {
//     count++;
//     str += num + ' ';
//     num = +prompt('write some number');
// }
// console.log(`Кількість чисел`, count);
// console.log(`Введені числа =>`, str);

// Вивести на сторінці(html) символ * стільки разів скільки ввів користувач і в тому напрямку який він вибрав
// тобто горизонтально або вертикально
// 5 горизонтально * * * * *
/* 
    5 вертикально 
    * 
    * 
    * 
    * 
    * 
*/
// let count = +prompt('Write count star');
// let direction = +prompt('Write 1 - horizontal, 2 - vertical');
// let i = 1;
// while (i <= count) {
//     if (direction === 1) {
//         document.write(`<span>* </span>`);
//     } else if (direction === 2) {
//         document.write(`<p>* </p>`);
//     }
//     i++;
// }

// for(let i=1; i<=10; i++){
//     document.write(`<h2>Loop ${i}</h2>`);
//     if(i === 5){
//         break;
//     }
// }

// while(true){
//     let i = +prompt('write number');
//     if(i === 5){
//         break;
//     }
// }

// for(let i=1; i<=10; i++){
//     if(i === 5){
//         continue;
//     }
//     document.write(`<h2>Loop ${i}</h2>`);
// }


// for(let i=1; i<=10; i++){
//     if(i%2!=0){
//         continue
//     }
//     document.write(`<h2>Loop ${i}</h2>`);
// }

// Виведіть мені повідомлення чи число парне, чи непарне чи нуль

// let num = +prompt('write number');
// if(num == 0){
//     console.log('Число нуль')
// }
// else if(num%2==0){
//     console.log('Число парне')
// }
// else if(num%2!=0){
//     console.log('Число непарне')
// }


// let num = +prompt('write number');
// if(num%2==0 && num!=0){
//     console.log('Число парне')
// }
// else if(num%2!=0){
//     console.log('Число непарне')
// }
// else if(num == 0){
//     console.log('Число нуль')
// }

// while(true){
//     while(true){
//         let i = +prompt('write number');
//         if(i === 5){    
//             break;
//         }
//     }
//     break;    
// }


let count = 0;
let str = '';
exit: {
    while(true){
        while(true){
            let i = +prompt('write number');
            if(i === 5){    
                break exit;
            }
            str += i + ' ';
            count++;
        }
    }
}
console.log(`Кількість чисел`, count);
console.log(`Введені числа =>`, str);