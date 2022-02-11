'use strict';
// Завдання 1:

// — Напишіть функцію getArea(number), яка обчислює площу круга.
// Для визначення площі використовуйте Math.
// В залежності від того що передали в функцію має виводити наступні повідомлення:
// - Якщо передане число повертати - Площа дорівнює стільки то квадратних одиниць.
// - Якщо передали не число - Повинно бути числове значення.
// - Якщо в функцію нічого не передали - Будь ласка, введіть радіус!


let getArea = (number = prompt(" Введіть радіус у см. ")) => {
  let sum = 0;
  let result;
  if (number > 0) {
    sum += Math.PI * Math.pow(number, 2);
    result = alert ("Площа = " + sum + " см^2");    
    
  } else if (number != "" &&  number != null ) {
    result = alert("Повинно бути числове значення.");
  }
  else {
    result = alert("Будь ласка, введіть радіус!");  
  }
  return result;
};
getArea();



//var2
// let radius = prompt(" Введіть радіус у см. ");
// let circle = radius => {
//   this.radius = radius;
//   this.area = function () {
//     return Math.PI * this.radius * this.radius;
//   };
// };


// console.log('Площа ='+ circle.area().toFixed(2));