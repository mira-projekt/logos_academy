"use strict";
// Завдання 1:

// Необхідно реалізувати наступний функціонал як на відео input (архів долучено до завдання), а саме:

// — при кліку кнопку Move текст з лівого інпута переноситься в правий, причому якщо в лівому інпуті нічого немає, текст в правому не змінюється

// — при втраті фокусу в нижньому інпуті текст має переноситися в його ж placeholder, причому якщо в інпуті нічого немає, текст в placeholder не змінюється 


function firstTask() {
  const formsList = document.forms.move;

  formsList.move.addEventListener('click', () => {
      if (formsList.firstInput.value) {
          formsList.secondInput.value = formsList.firstInput.value;
          formsList.firstInput.value = '';
      }
  });

  formsList.inputPlaceholder.addEventListener('blur', () => {
      if (formsList.inputPlaceholder.value) {
          formsList.inputPlaceholder.placeholder = formsList.inputPlaceholder.value;
          formsList.inputPlaceholder.value = '';
      }
  });
}

firstTask();

