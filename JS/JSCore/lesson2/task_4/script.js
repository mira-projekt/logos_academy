'use strict';
// Завдання 4:

// — Користувач вводить URL адреса в prompt в форматі http або https. Виведіть тільки ім'я домена без префіксів
// http://, https:// в консолі.
// — Приклад роботи:
// Користувач вводить: “https://www.google.com” – в консоль виводиться www.google.com.
// Користувач вводить: “http://www.w3schools.com” – в консоль виводиться w3schools.com.

let domainName = prompt("Введіть URL адресу сайту");

function path(domainName) {
  let name = domainName.toLowerCase().split("//www.").pop();
  return name;
}

console.log(path(domainName)); 
