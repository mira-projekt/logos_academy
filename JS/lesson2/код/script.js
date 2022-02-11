// JS Оператори
/* 
    +, -, /, *, %, **
    =, ==, ===, !, !=, !==
    <, >, <=, >=
    &&, ||
    Інкремент i++ ++i
    Декремент i-- --i
    n = n + 5 => n+=5, n-=5, n/=5, n*=5, n%=5
    Унарні оператори +, -, !
*/

// Оператор if 
// if(умова){
//     тіло умови
// }

// let q = 10;
// if (q <= 5) {
//     console.log('yes');
// }

// let age = prompt('write your age');
// if(age >= 18) {
//     console.log('Ласкаво просимо до клубу');
// }

// let age = prompt('write your age');
// if(age >= 18) {
//     console.log('Ласкаво просимо до клубу');
// }
// else{
//     console.log('Ще замалий');
// }

// let age = prompt('write your age');
// if(age >= 18) {
//     console.log('Ласкаво просимо до клубу');
// }
// else if(age < 18) {
//     console.log('Ще замалий');
// }
// else{
//     console.log('Ти ввів на число');
// }

// let age = prompt('write your age');
// if(age >= 18) {
//     console.log('Ласкаво просимо до клубу');
// }
// else if(age == null) {
//     console.log('Вхід скасовано');
// }
// else if(age < 18) {
//     console.log('Ще замалий');
// }
// else{
//     console.log('Ти ввів на число');
// }

// let age = prompt('write your age');
// if(age >= 18) {
//     console.log('Ласкаво просимо до клубу');
// }
// else if(age == null) {
//     console.log('Вхід скасовано');
// }
// else if(age == "") {
//     console.log('Ви нічого не ввели');
// }
// else if(age < 18) {
//     console.log('Ще замалий');
// }
// else{
//     console.log('Ти ввів на число');
// }

// let club = prompt('write the best football club');
// if(club == 'Arsenal'){
//     let ask = prompt('do you love Arsenal? Write yes or no')
//     if(ask == 'yes'){
//         console.log('Me too');
//     }
//     else if(ask == 'no'){
//         console.log('Opacha');
//     }
// }
// else {
//     console.log('Bad choose');
// }

// let n1 = 10;
// let n2 = '10';
// if(n1 === n2) {
//     console.log('yes');
// }
// else {
//     console.log('no');
// }

// let n1 = +prompt('write first number');
// let n2 = +prompt('write second number');
// if(n1>n2){
//     console.log(`Значення в змінній n1=${n1} більше за n2=${n2}`);
// }
// else if(n1<n2){
//     console.log(`Значення в змінній n1=${n1} менше за n2=${n2}`);
// }
// else if(n1===n2){
//     console.log(`Змінній n1 та n2 мають рівне значення рівне ${n1}`);
// }

// let ask = prompt('Яке прізвище першого президента незалежної України?');
// // if(ask === 'Кравчук' || ask === 'кравчук') {
// //     console.log('Відповідь вірна');
// // }
// if(ask.toLowerCase() === 'кравчук' || ask.toLowerCase() === 'kravchyk') {
//     console.log('Відповідь вірна');
// }


// let count = 0;
// console.log('Count =', count);
// let ask = prompt('Яке прізвище першого президента незалежної України?');
// if (ask.toLowerCase() === 'кравчук' || ask.toLowerCase() === 'kravchyk') {
//     console.log('Відповідь вірна');
//     count++;
// }
// console.log('Count =', count);
// 0-2 дуже погано
// 3-4 погано
// 5-7 добре
// 8-9 дуже добре
// 10 відмінно
// if (count === 0 || count === 1 || count === 2) {
//     console.log('дуже погано')
// }
// if (count >= 0 && count <= 2) {
//     console.log('дуже погано')
// }

// let life = prompt('write your age');
// if(life>=0 && life<=1) {
//     console.log('Немовля');
// }
// else if(life>1 && life<6){
//     console.log('Дитина');
// }
// else if(life>=6 && life<17){
//     console.log('Школяр');
// }
// else if(life>=17 && life<=22){
//     console.log('Студент');
// }

// let life = prompt('write your age');
// if((life>=0 && life<=1 ) || life == 'baby') {
//     console.log('Немовля');
// }
// else if(life>1 && life<6){
//     console.log('Дитина');
// }
// else if(life>=6 && life<17){
//     console.log('Школяр');
// }
// else if(life>=17 && life<=22){
//     console.log('Студент');
// }

// let ask = confirm('Do you like coffee?');
// if(ask) {
//     console.log('Me too');
// }
// else {
//     console.log('I like tea too');
// }

// let ask = confirm('Do you like coffee?');
// if(ask)
//     console.log('Me too');
// else
//     console.log('I like tea too');

// let ask = confirm('Do you like coffee?');
// if(ask) console.log('Me too');
// else console.log('I like tea too');

// let ask = confirm('Do you like coffee?');
// ask ? console.log('Me too') : console.log('I like tea too');

// confirm('Do you like coffee?') ? console.log('Me too') : console.log('I like tea too');

// let ask = confirm('Do you like coffee?');
// let message = ask ? 'Me too' : 'I like tea too';
// console.log(message);

// Створити змінну zero яка приймати значення з prompt. Потрібно перевірити значення змінної
/* 
1. Коли ввели додатнє число або символ "+" тоді в консолі виводити "Ви ввели додатнє число"
2. Коли ввели від'ємне число або символ "-" тоді в консолі виводити "Ви ввели від'ємне число"
3. Коли ввели число 0 або слово "zero" тоді в консолі виводити "Ви ввели число нуль"
4. Коли скасували дію тоді в консолі виводити "Ви скасували умову"
5. Коли ввели текст тоді в консолі виводити "Ви ввели текст"
6. Коли нічого не ввели тоді в консолі виводити "Ви нічого не ввели"
*/

let zero = prompt('Введіть число або символ');
if(zero>0 || zero == "+") {
    console.log('Ви ввели додатнє число');
}
else if(zero == null) {
    console.log(`Ви скасували умову`);
}
else if(zero == "") {
    console.log(`Ви нічого не ввели`);
}
else if(zero<0 || zero == "-") {
    console.log(`Ви ввели від'ємне число`);
}
else if(zero==0 || zero == "zero") {
    console.log(`Ви ввели число нуль`);
}
else {
  console.log('Ви ввели текст');
}