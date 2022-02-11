// завдання 1

// let city = 'Київ';
// city = 'Lviv';
// console.log(city);

// let address = city;
// alert(address);

// завдання 2

// let n = 10;
// let result = n ** 3;
// console.log(result);


// завдання 3
// let pen = 4;
// let pencil = 6;
// let pricePen = 5.25;
// let pricePencil = 3.50;
// let result = pen * pricePen + pencil * pricePencil;
// document.write('Загальна вартість:' + " " + result + " " + 'грн.');

// з використанням масивів

//масив товарів
let names = [];
names[0] = 'pen';
names[1] = 'pencil';

//масив з цінами продуктів
let prices = [];
prices[0] = 5.25;
prices[1] = 3.50;

//масив з кількістю придбаних товарів

let products = [];

//цикл для отримання кількості придбаних товарів
for (let index = 0; index < names.length; index++){
  const name = names[index];
  const price = prices[index];

  products[index] = +prompt(`Зазначте кількість продуктів '${ name }', ціна ${price}`, 0);
}

//цикл для розрахунку загальної ціни придбаних продуктів

let totalPrice = 0;
for (let index = 0; index < products.length; index++){
  totalPrice += prices[index] * products[index];
}
alert(`Сума Вашого замовлення -  ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) {
  alert('Доставка буде безкоштовною.');
}
