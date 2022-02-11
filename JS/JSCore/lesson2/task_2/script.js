'use strict';
// Завдання 2:

// — Користувач вводить email. Потрібно перевірити дані на правильність введення.
// Правильно введений email - це той, в якому міститься символ @.
// Крім того символ @не може бути на початку тексту або в кінці.
// — Приклад правильно введених даних:
// student@ukr.net
// — Приклад не правильно введених даних:
// @student.ukr.net
// student.ukr.net@
// student.ukr.net

let email = prompt('Введіть свій email');
function emailValid(email) {
  if (email.includes("@") && email.indexOf('@') !== 0) {
    if (email.split("@")[1].includes(".") ) {
      return (`Найближчим часом ми зв'яжемось з Вами`);
    }
    else if (email.indexOf('@') === (email.length - 1)) {
      return (`Введений Email не коректний`);
    }
  }
  else {
    return(`Введений Email не коректний`);
  }
}

console.log(emailValid(email));



//var2 якщо співпадає із шаблоном
// function isEmail(email){
//   let reg= /^[a-zA-Z][0-9a-zA-Z_]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/i;
//   if (reg.test(email) === true) {
//     return (`Найближчим часом ми зв'яжемось з Вами`);
//   }
//   else {
//     return (`Введений Email не коректний`);
//   }
    
// }
// alert(isEmail(email));




