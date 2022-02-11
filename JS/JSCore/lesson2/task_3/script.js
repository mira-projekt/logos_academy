'use strict';
// Завдання 3:

// — Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів).
// Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.
// — Приклад роботи:
// Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.



// Варіант1.Обрахувати  кількість всіх слів+повторюваних у реченні

// let words = "Text html javascript html css";

// function countRepeatedWords(sentence) {
//   let words = sentence.split(" ");
//   let wordMap = {};

//   for (let i = 0; i < words.length; i++) {
//     let currentWordCount = wordMap[words[i]];
//     let count = currentWordCount ? currentWordCount : 0;
//     wordMap[words[i]] = count + 1;
//   }
//   return wordMap;
// }
// console.log(countRepeatedWords(words));



// Варіант2. за допомогою while

// let textLink = prompt('Напишіть, з якими мовами програмування знайомі?');
// let target = 'html';
// let pos = -1;
// while ((pos = textLink.toLowerCase().indexOf(target, pos + 1)) != -1) {
//   console.log(target);
// }


// Варіант3.

let textLink = prompt('Напишіть, з якими мовами програмування знайомі?');
let space = 0;

function countRepeatedWords(textLink) {
  const arr = textLink.toLowerCase().split('html');
  return arr.length - 1;
}
console.log(`Кількість cлів html`,':', countRepeatedWords(textLink));


