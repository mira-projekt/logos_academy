// for, for...in, for...of, while, do...while

// for(старт лічильника; умова викокання циклу; крок зміни лічильника){
//     тіло циклу
// }

// for(let i=1; i<=3; i++) {
//     document.write(`<h2>Loop ${i}</h2>`);
// }

// Вивесті всі числа в послідовності -100 -90 ... до числа 100
// for(let count=-100; count<=100; count+=10){
//     document.write(`<h2>Loop ${count}</h2>`);
// }

// вивесті всі члени послідовності count=count/2 - 20, де count початкове = 1000 поки count більше 0
// for(let count=1000; count>0; count=count/2 - 20){
//     document.write(`<h2>Loop ${count}</h2>`);
// }

// Цикл з певної к-ть раз яку ми вказали
// let n = +prompt('write count loop');
// for(let i=1; i<=n; i++){
//     document.write(`<h2>Loop ${i}</h2>`);
// }

// Цикл який працює від n1 до n2 числа
// let n1 = +prompt('write first number');
// let n2 = +prompt('write second number');
// for(let i=n1; i<=n2; i++){
//     document.write(`<h2>Loop ${i}</h2>`);
// }

// document.write(`<h2>Старт циклу</h2>`);
// for(let i=1; i<=10; i++){
//     document.write(`<h3>Loop ${i}</h3>`);
// }
// document.write(`<h2>Кінець циклу</h2>`);

// document.write(`<h2>Старт циклу</h2>`);
// for(let i=1; i<=10; i++){
//     document.write(`<h3>Loop Outside ${i}</h3>`);
//     for(let j=1; j<=3; j++){
//         document.write(`<h4>Loop inside ${j}</h4>`);
//     }
// }
// document.write(`<h2>Кінець циклу</h2>`);

// Вивести три теги h4 з текстом яким ми введемо в prompt
// for (let j = 1; j <= 3; j++) {
//     const text = prompt('write some text')
//     document.write(`<h4>${text}</h4>`);
// }

// Вивесті всі значенння ітерації від 1 до 5 в стрічці => '1 2 3 4 5'
// let str = '';
// for(let i=1; i<=5; i++){
//     str = str + i + ' ';
//     // str += i + ' ';
// }
// console.log(str);

// '' = '' + 1 + ' ' => '1 '
// '1 ' = '1 ' + 2 + ' ' => '1 2 '
// '1 2 ' = '1 2 ' + 3 + ' ' => '1 2 3 '
// '1 2 3 ' = '1 2 3 ' + 4 + ' ' => '1 2 3 4 '
// '1 2 3 4 ' = '1 2 3 4 ' + 5 + ' ' => '1 2 3 4 5 '

// a = число, b = степіць = a^b = a*a*a... 
// a^0 = a * 0 => 1;
// a^1 = 1 * a => a;
// a^2 = 1 * a * a;
// let a = +prompt('Введіть число'); // 5
// let b = +prompt('Введіть степінь'); // 3
// let result = 1;
// for(let i=1; i<=b; i++){
//     // result = result * a;
//     result *= a;
// }
// console.log(result);

// result = 1 * 5 => 5
// result = 5 * 5 => 25
// result = 25 * 5 => 125

// Необхідно обчислити суму діапазону цілих чисел між введеми користувачем числами
// n1 = 1, n2 = 5 => 1...5 => 1+2+3+4+5 => 15
// let n1 = +prompt('write first number');
// let n2 = +prompt('write second number');
// let result = 0;
// for(let i=n1; i<=n2; i++){
//     // console.log(i);
//     // result = result + i;
//     result += i;
// }
// console.log(result);

// let n1 = +prompt('write first number');
// let n2 = +prompt('write second number');
// let result = 0;
// if(n1<n2){
//     for(let i=n1; i<=n2; i++){
//         result += i;
//     }
// }
// else if(n1>n2){
//     for(let i=n2; i<=n1; i++){
//         result += i;
//     }
// }
// console.log(result);

// let n1 = +prompt('write first number');
// let n2 = +prompt('write second number');
// let result = 0;
// let check;
// if(n1>n2){
//     check = n1;
//     n1 = n2;
//     n2 = check;
// }
// for(let i=n1; i<=n2; i++){
//     result += i;
// }
// console.log(result);

// Вивесті 5 чисел послідовності 10, 20, 30..
// let n = 0;
// for(let i=1; i<=5; i++){
//     n+=10;
//     console.log(n);
// }

// for(let i=1, n=10; i<=5; i++, n+=10){
//     console.log(n);
// }