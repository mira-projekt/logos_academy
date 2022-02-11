// function sayHello(){
//     console.log('Hello JS');
// }

// Function Expression
// let назваФункції = function(параметри){
//     тіло функції
// }

// function sayHello(){
//     console.log('Hello JS');
// }

// let sayHello = function(){
//     console.log('Hello JS');
// }
// sayHello();

// function sayHello(name){
//     console.log(`Hello ${name}`);
// }

// let sayHello = function(name){
//     console.log(`Hello ${name}`);
// }

// sayHello('Ivan');

// function sayHello(name){
//     return `Hello ${name}`;
// }

// let sayHello = function(name){
//     return `Hello ${name}`;
// }

// console.log(sayHello('Petro'));


// sayHello();

// function sayHello(){
//     console.log('Hello JS');
// }

// let sayHello = function(){
//     console.log('Hello JS');
// }

// sayHello();

'use strict';

// let win = prompt('write 777');
// if(win == '777'){

//     function winner(){
//         console.log('winner');
//     }
// }
// else{
//     function winner(){
//         console.log('losser');
//     }
// }

// winner();

// let win = prompt('write 777');
// if(win == '777'){
//     // winner();
//     function winner(){
//         console.log('winner');
//     }
//     winner();
// }
// else{
//     function winner(){
//         console.log('losser');
//     }
// }

// winner();

// let winner;
// let win = prompt('write 777');
// if (win == '777') {
//     winner = function () {
//         console.log('winner')
//     }
// } 
// else {
//     winner = function () {
//         console.log('losser')
//     }
// }

// winner();


// function sayHello(){
//     console.log('Hello');
// }

// sayHello();

// let hi = sayHello;
// hi();

// let sayHello = function(){
//     console.log('Hello');
// }

// sayHello();

// let hi = sayHello;
// hi();

// es6 - arrow function

// let назваФункції = (параметри) => тіло функції

// let sayHello = function(){
//     console.log('Hello JS');
// }
// sayHello();

// let sayHello = () => { 
//     console.log('Hello JS'); 
// }

// sayHello();

// let sayHello = function(name){
//     console.log(`Hello ${name}`);
// }
// sayHello("Ivan");

// let sayHello = name => {
//     console.log(`Hello ${name}`);
// }
// sayHello("Petro");

// let sayHello = function(name, sname){
//     console.log(`Hello ${name} ${sname}`);
// }
// sayHello("Ivan", "Ivanov");

// let sayHello = (name, sname) => {
//     console.log(`Hello ${name} ${sname}`);
// }
// sayHello("Ivan", "Ivanov");

// let sayHello = function(name, sname){
//     return `Hello ${name} ${sname}`;
// }
// let message = sayHello("Ivan", "Ivanov");
// console.log(message);

// let sayHello = (name, sname) => `Hello ${name} ${sname}`;

// let message = sayHello("Petro", "Petriv");
// console.log(message);

// let sayHello = name => `Hello ${name}`;

// let message = sayHello("Petro");
// console.log(message);

// let age = prompt('write your age');

// let welcome = (age < 18) ?
//   () => alert('йди додому') 
//     : () => alert('вітаю');

// welcome();

// let sayHello = name => {
//     let message = `Hello ${name}`
//     // ...
//     return message;
// };

// Рекурсія

// 5! = 1*2*3*4*5
// function factorial(x){
//     let result = 1;
//     for(let i=2; i<=x; i++){
//         result *= i
//     }
//     return result;
// }
// console.log('Res', factorial(3));

// function factorial(x){
//     if(x<=1) {
//         return 1
//     }
//     return x*factorial(x-1);
// }
// console.log('Res', factorial(3));

/* 
function factorial(x=3){
    if(x<=1) { // 3<=1 false
        return 1
    }
    return 3*factorial(x-1=2){
        if(x<=1) { // 2<=1 false
            return 1
        }
        return 2*factorial(x-1=1){
            if(x<=1) { // 1<=1 true
                return 1 
            }
            return 3*factorial(x-1); // вже не виконаться
        }
    }
} */

/* 
function factorial(x=3){
    if(x<=1) { // 3<=1 false
        return 1
    }
    return 3*2*1
} */

// let factorial = x => x <= 1 ? 1 : x * factorial(x - 1);
// console.log(factorial(5));

// function pow(num, degree){
//     let result = 1
//     for(let i=1; i<=degree; i++){
//         result *= num
//     }
//     return result;
// }
// console.log(pow(2,3));

// function pow(num, degree){
//     if(degree<=0){
//         return 1
//     }
//     return num * pow(num, degree - 1);
// }
// console.log(pow(2,3));

/* function pow(num, degree){ // 2,3
    if(degree<=0){ //3 <=0 false
        return 1
    }
    return num * pow(num, degree - 1){ // 2,2
        if(degree<=0){ //2 <=0 false
            return 1
        }
        return num * pow(num, degree - 1){ // 2,1
            if(degree<=0){ //1 <=0 false
                return 1
            }
            return num * pow(num, degree - 1){ // 2,0
                if(degree<=0){ //0<=0 true
                    return 1
                }
            }
}
 */

/* function pow(num, degree){ // 2,3
    if(degree<=0){ //3 <=0 false
        return 1
    }
    return 2 * 4 => 8
}
 */

// console.log(pow(2,3));

// function pow(num, degree){
//     if(degree<=0){
//         return 1
//     }
//     return num * pow(num, degree - 1);
// }
// console.log(pow(2,3));

let pow = (num, degree) => degree <= 0 ? 1 : num * pow(num, degree - 1);
console.log(pow(3, -3));

// Замикання (Closure)

// function counter(){
//     let x = 0;
//     x++;
//     console.log(x);
// }

// counter();
// counter();
// counter();

// function counter(){
//     let x = 0;
//     return function(){
//         x++;
//         console.log(x);
//         return x
//     }
// }

// let c = counter();
// c();
// c();
// c();

// let q = counter();
// q();
// q();
// q();

// function counter(start){
//     let x = start;
//     return function(){
//         x++;
//         console.log(x);
//         return x
//     }
// }

// let c = counter(0);
// c();
// c();
// c();

// let q = counter(10);
// q();
// q();
// q();

// function counter(start){
//     let x = start;
//   return function (step = 1) {
//     x = x + step;
//     console.log(x);
//     return x;
//   };
// }

// let c = counter(0);
// c();
// c();
// c();

// let q = counter(10);
// q(0);
// q(1);
// q(5);