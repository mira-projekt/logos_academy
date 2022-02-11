// let arr1 = new Array();
// let arr2 = [];

// let arr3 = new Array(10,20,30);
// console.log(arr3);

// let arr4 = [10,20,30];
// console.log(arr4);

// let arr5 = new Array(5);
// console.log(arr5);
// console.log(arr5[0]);
// console.log(arr5.length);

// let arr6 = [5];
// console.log(arr6);

// let arr7 = ['ivan','petro','pavlo'];
// console.log(arr7);
// console.log(arr7.length);
// console.log(arr7[0], arr7[1], arr7[2]);

// arr7[2] = 'arsen';
// console.log(arr7);

// arr7[3] = 'roman';
// console.log(arr7);

// arr7[10] = 'oksana';
// console.log(arr7);

// for(let i=0; i<arr7.length; i++){
//     arr7[i] = arr7[i].toUpperCase();
// }

// arr7.length = 4;
// console.log(arr7);

// arr7.length = 11;
// console.log(arr7);

// for (const index in arr7) {
//     console.log(index, arr7[index]);
// }

// for (const iterator of arr7) {
//     console.log(iterator);
// }

// let arrNum = [10, 2, -4, 15, 5];
// for(let i=0; i<arrNum.length; i++){
//     // arrNum[i] = arrNum[i] + 5;
//     arrNum[i] += 5;
// }

// for (const index in arrNum) {
//     arrNum[index] += 5;
// }
// console.log(arrNum);

let fruits = ["orange", "apple"];
let veggies = ["potato", "tomato"];

// Method - concat

let salad = fruits.concat(veggies);
console.log("salad", salad);
console.log("fruits", fruits);

// Method - join
// let saladStr = salad.join(' ');
// let saladStr = salad.join();
// console.log('salad', salad);
// console.log('saladStr', saladStr);

// let sort = salad.sort();
// console.log('salad', salad);
// console.log('sort', sort);
// sort[0] = 'qqq';
// console.log('salad', salad);
// console.log('sort', sort);

// console.log([1,25,10,5,3].sort());
// console.log([1, 25, 10, 5, 3].sort((a, b) => a - b));
// console.log([1, 25, 10, 5, 3].sort((a, b) => b - a));

// let reverse = salad.reverse();
// console.log('salad', salad);
// console.log('reverse', reverse);
// reverse[0] = 'qqq';
// console.log('salad', salad);
// console.log('reverse', reverse);

// let shiftMethod = salad.shift();
// console.log('salad', salad);
// console.log('shiftMethod', shiftMethod);

// let unshiftMethod = salad.unshift('onion', 'garlic');
// console.log('salad', salad);
// console.log('unshiftMethod', unshiftMethod);

// let popMethod = salad.pop();
// console.log('salad', salad);
// console.log('popMethod', popMethod);

let pushMethod = salad.push("cucumber", "milk");
console.log("salad", salad);
console.log("pushMethod", pushMethod);

// let spliceMethod = salad.splice(3,1);
// let spliceMethod = salad.splice(3,2);
// let spliceMethod = salad.splice(3,1, 'ice cream');
// let spliceMethod = salad.splice(3,1, 'ice cream', 'tea');
// let spliceMethod = salad.splice(3, 0, 'ice cream', 'tea');
// let spliceMethod = salad.splice(-2, 0, 'ice cream', 'tea');
// console.log('salad', salad);
// console.log('spliceMethod', spliceMethod);

// let sliceMethod = salad.slice(4);
// let sliceMethod = salad.slice(4,7);
// let sliceMethod = salad.slice(4,-2);
// let sliceMethod = salad.slice(-1);
// console.log('salad', salad);
// console.log('sliceMethod', sliceMethod);

// let arr8 = [10,20,30,40,50,20];
// console.log(arr8);
// arr8.forEach(function(value, index, array){
//     console.log(value, index, array)
// })

// arr8.forEach((value, index, array) => {
//     console.log(value, index, array);
// })

// console.log(arr8.indexOf(20));
// console.log(arr8.lastIndexOf(20));
// console.log(arr8.includes(20));
// console.log(arr8.includes(1110));

// console.log(Array.isArray(arr8));

// let arr9 = [10,[10,20]];
// let qqq;

// arr9.forEach(value => {
//     if(Array.isArray(value)){
//         qqq = value
//     }
// })
// console.log(qqq);
