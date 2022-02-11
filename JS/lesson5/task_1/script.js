'use strict';

// Завдання 1:
// — Написати розв’язок нижче описаного завдання за допомогою конструкції switch:
// 1. Користувач вводить число в prompt
// 2. Після введення числа вистрибує алерт з оголошенням пори року
// до якої відноситься число(номер місяця) що ввів користувач
// 3. Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.

// let number = +prompt('Введіть число до 20');
// if (number >= 1 && number <= 12) {
//   let numSeason = +prompt('Введіть номер вашого улюбленого місяця');
//     if (numSeason ===1 || numSeason === 2 || numSeason === 12) {
//     alert('ЗИМА');
//   }
//     else if (numSeason === 3 || numSeason === 4 || numSeason === 5) {
//     alert('ВЕСНА.');
//   }
//     else if (numSeason === 6 || numSeason === 7 || numSeason === 8) {
//     alert('ЛІТО.');
//   }
//     else if (numSeason === 9 || numSeason === 10 || numSeason === 11) {
//     alert('ОСІНЬ.');
//   }

// } else {
//   alert('На жаль, визначити улюблену пору року неможливо');
// }


if (number >= 1 && number <= 12) {
  let numSeason = +prompt('Введіть номер вашого улюбленого місяця');
  switch (numSeason) {
    case 1: 
    case 2:
    case 12:
      alert('ЗИМА');
      break;
    case 3:
    case 4:
    case 5:
      alert('ВЕСНА.');
      break;
    case 6:
    case 7:
    case 8:
      alert('ЛІТО.');
      break;
    case 9:
    case 10:
    case 11:
      alert('ОСІНЬ.');
      break;
      
    default:
      alert('На жаль, визначити улюблену пору року неможливо');
      break;
  }
}
else if(number == '') {
    prompt(`Ви нічого не ввели. Введіть число до 20`);
}
