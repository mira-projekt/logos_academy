// switch (значення) {
//     case ідентифікатором:
//         дія
//         break;
//     case ідентифікатором:
//         дія
//         break;
//     case ідентифікатором:
//     case ідентифікатором:
//         дія
//         break;
//     default:
//         дія
//         break;
// }

// let country = prompt('write country car');

// switch (country) {
//     case 'germany':
//         console.log('Audi, BMW, Mercedes');
//         break;
//     case 'france':
//         console.log('Pegeout, Renault, Citroen');
//         break;
//     case 'south korea':
//     case 'japan':
//         console.log('Hyundai, Kia, Suzuki');
//         break;
//     default: 
//         console.log('wrong country car');
//         break;
// }

// function Declaration
// function Expression
// function Arrow
// function Construction

// function Declaration

// function назваФукції(параметeр?...){
//     тіло функції
// }

// alert()
// prompt()
// confirm()

// function sayHello(){
//     console.log('Hello JS');
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

// function sayHello(name){
//     console.log(`Hello ${name}`);
// }

// sayHello('Ivan');
// sayHello('Petro');

// function sayHello(name, sname){
//     console.log(`Hello ${name} ${sname}`);
// }

// sayHello('Ivan', 'Ivanov');
// sayHello('Ivan');
// sayHello();

// function sayHello(name, sname){
//     name = name || 'Guest';
//     sname = sname || 'Guestovych';
//     console.log(`Hello ${name} ${sname}`);
// }

// sayHello('Ivan', 'Ivanov');
// sayHello('Ivan');
// sayHello();

// undefined, null, '', 0, false


// es6 
// function sayHello(name = 'Guest', sname = 'Guestovych'){
//     console.log(`Hello ${name} ${sname}`);
// }

// sayHello('Ivan', 'Ivanov');
// sayHello('Ivan');
// sayHello();

// Функції мають 2 неявних параметри: arguments, this
// arguments - псевдомасив
// function sumElem(){
//     console.log(arguments);
//     // console.log(arguments[0]);
//     // console.log(arguments[1]);
//     // console.log(arguments[10]);
//     // console.log(arguments.length);
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++){
//         // console.log(arguments[i]);
//         // sum = sum + arguments[i];
//         sum += arguments[i];
//     }
//     console.log(sum);
// }
// sumElem(10,20,30,40,50,60);
// sumElem(10,20,30);
// sumElem(1,2,3,4,5,6,7,8,9,10);

// es6
// function sumElem(a,b, ...arg){
//     console.log('a,b',a,b);
//     console.log('arg', arg);
//     console.log('arguments',arguments);
// }
// sumElem(10,20);

// function sumElem(...arg){
//     let sum = 0;
//     for(let i=0; i<arg.length; i++){
//         sum += arg[i];
//     }
//     console.log(sum);
// }
// sumElem(10,20);

// Область видимості функції

// function f1(){
//     let a = 10;
//     console.log(a); // 10
// }
// f1();
// console.log(a); // error

// let a = 20;
// function f1(){
//     let a = 10;
//     console.log(a); // 10
// }
// f1();
// console.log(a);// 20

// let a = 20;
// function f1(){
//     a = 10;
//     console.log(a); // 10
// }
// f1();
// console.log(a);// 10

// let a = 20;
// function f1(a){
//     a = 10;
//     console.log(a); // 10
// }
// f1(30);
// console.log(a);// 20

// let a = 20;
// function f1(a){
//     let a = 10; // error
//     console.log(a); 
// }
// f1(30);
// console.log(a);

// alert();
// prompt();
// confirm();

// function sayHello(name){
//     console.log(`Hello ${name}`);
// }

// let message = sayHello('Ivan');
// console.log('Message', message); 

// function sayHello(name){
//     return `Hello ${name}`
// }

// let message = sayHello('Ivan');
// console.log('Message', message); 

// function sayHello(name){
//     return `Hello ${name}`;
//     console.log('some'); // не буде працювати
// }

// let message = sayHello('Ivan');
// console.log('Message', message);

// function sayHello(name){
//     if(!name) {
//         return `Hello Guest`;
//     }
//     else{
//         return `Hello ${name}`;
//     }
// }

// function sayHello(name){
//     return !name ? `Hello Guest` : `Hello ${name}`;
// }

// let message = sayHello();
// console.log('Message', message); 

// function pow(num, degree){
//     let result = 1;
//     for(let i=1; i<=degree; i++){
//         result *= num;
//     }
//     return result;
// }
// let res = pow(5,3)
// console.log('2^3', res);

// function pow(num, degree){
//     let result = 1;
//     if(degree != 0){
//         for(let i=1; i<=degree; i++){
//             result *= num;
//         }
//     }
//     return result;
// }
// let res = pow(5,3)
// console.log('Res', res);

let n1 = +prompt('write number');
let d1 = +prompt('write degree');
function pow(num, degree){
    let result = 1;
    let check = false;
    if(degree != 0){
        if(degree < 0){
            degree = -degree;
            check = true;
        }
        for(let i=1; i<=degree; i++){
            result *= num;
        }
        if(check){
            result = 1/result;
        }
    }
    return result;
}
let res = pow(n1, d1);
console.log('Res', res);

// function maxNum(max){
//  let maxNum = max[0];
//  for(let i=1; i<max.length; i++){
//    if(max[i] > maxNum){
//      maxNum = max[i];
//    }
//   }
//   return maxNum;
// }

// alert(maxNum([5, -2, 30, 6]));
// alert (maxNum([5, -2]));