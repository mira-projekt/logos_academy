// let num1 = 1000;
// let num2 = 1000.1;
// let num3 = new Number(123);
// console.log(num3);
// console.log(+num3.toString());
// console.log(num3.valueOf());
// let num4 = Number(345);
// let num4 = Number('345');
// let num4 = Number('');
// let num4 = Number('0x11');
// let num4 = Number('foo');
// let num4 = Number('101.1');
// console.log(num4);

// let biggest = Number.MAX_VALUE;
// let smalllest = Number.MIN_VALUE;
// let infinite = Number.POSITIVE_INFINITY;
// let negInfinite = Number.NEGATIVE_INFINITY;
// let notANum = Number.NaN;

// console.log(biggest);
// console.log(smalllest);
// console.log(infinite);
// console.log(negInfinite);
// console.log(notANum);


// console.log(parseInt('10.2'))
// console.log(Number.parseInt('10.2'))

// console.log(parseFloat('10.2'))
// console.log(Number.parseFloat('10.2'))


// console.log(isFinite(10));
// console.log(Number.isFinite(10));
// console.log(isFinite('10'));
// console.log(Number.isFinite('10'));
// console.log(isFinite('10.2'));
// console.log(Number.isFinite('10.2'));

// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.2));
// console.log(Number.isInteger(NaN));
// console.log(Number.isInteger('10'));
// console.log(Number.isInteger(10.00));

// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));
// console.log(isNaN('NaN'));
// console.log(isNaN(undefined));
// console.log(isNaN({}));
// console.log(isNaN('bla'));
// console.log(Number.isNaN('NaN'));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN('bla'));
// console.log(Number.isSafeInteger());

// let num = 7.5567;
// console.log(num.toString(), typeof num.toString());
// console.log(num.toFixed());
// console.log(num.toFixed(2));
// console.log(num.toFixed(6));
// console.log(num.toPrecision());
// console.log(num.toPrecision(4));
// console.log(num.toPrecision(2));
// console.log(num.toPrecision(1));
// let num2 = 123.456;
// console.log(num2.toPrecision(3));
// console.log(num2.toPrecision(2));

// let num = 7.5567;
// console.log(num.toExponential())
// console.log(num.toExponential(2))

// let num1 = 55;
// console.log(num1.toExponential())
// console.log(num1.toExponential(2))

// let num = 17999.99;
// console.log(num.toLocaleString());
// console.log(num.toLocaleString('de-De'));
// console.log(num.toLocaleString('de-De', {style: 'currency', currency: 'EUR'}));
// console.log(num.toLocaleString('de-De', {style: 'currency', currency: 'GBP'}));
// console.log(num.toLocaleString('ua-UA', {style: 'currency', currency: 'UAH'}));

// let q = 1000000;
// console.log(q);
// let q1 = 1e6;
// console.log(q1);
// let q2 = 1e-6;
// console.log(q2);

// console.log(Math);
// console.log(Math.PI);
// Math.sin();
// Math.cos();
// Math.tan();
// Math.asin();
// Math.acos();
// Math.atan();

// console.log(Math.sqrt(16));
// console.log(Math.pow(2,4));
// console.log(Math.abs(-10));
// console.log(Math.abs(10));
// console.log(Math.max(10,3,15,2));
// console.log(Math.min(10,3,15,2));
// console.log('Math.floor(7.9)',Math.floor(7.9));
// console.log('Math.ceil(7.01)',Math.ceil(7.01));
// console.log('Math.round(7.4)',Math.round(7.4));
// console.log('Math.round(7.5)',Math.round(7.5));
// console.log('Math.random()',Math.random());

// Рандомне число від 0 до 10
// let rand = Math.round(Math.random()*10);
// console.log('Rand', rand);

// Рандомне число між введеними числами

// function randomizer(min, max){
//     let rand = min + Math.random()*(max - min);
//     rand = Math.round(rand);
//     return rand;
// }
// console.log(randomizer(10,30));


// function randomizer(min, max){
//     let rand = Math.round(min + Math.random()*(max - min));
//     return rand;
// }
// console.log(randomizer(10,30));

// function randomizer(min, max){
//     return Math.round(min + Math.random()*(max - min));
// }
// console.log(randomizer(10,30));

// const randomizer = (min, max) => Math.round(min + Math.random()*(max - min));
// console.log(randomizer(10,30));

// 10 => 30
// 10 + 20 * 0.0001 => 10
// 10 + 20 * 0.9999 => 30

// Рандомний колір в системі rgb 
// rgb(0,0,0) => rgb(255,255,255)

// function randomColor(){
//     const r = randomizer(0,255);
//     const g = randomizer(0,255);
//     const b = randomizer(0,255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// function randomColor(){
//     return `rgb(${randomizer(0,255)}, ${randomizer(0,255)}, ${randomizer(0,255)})`;
// }

// const randomizer = (min, max) => Math.round(min + Math.random()*(max - min));
// const randomColor = () => `rgb(${randomizer(0,255)}, ${randomizer(0,255)}, ${randomizer(0,255)})`;
// console.log(randomColor());

// console.log(0.2+0.2);
// console.log(0.2+0.1);
// console.log(+(0.2+0.1).toFixed(1));
// console.log(Number((0.23+0.14).toFixed(1)));

function decimal(num){

}
num(1.12345678)