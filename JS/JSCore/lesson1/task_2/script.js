'use strict';
//  Завдання 2:

// Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:

// — Створіть порожній об'єкт MyMath.
// — Cтворіть властивість a зі значенням 5.
// — Cтворіть властивість b зі значенням 2.
// — Створіть 4 методи які будуть робити наступне:
// sum – обчислює суму a+b та повертає значення console.log().
// multiplication – обчислює множення a*b та повертає значення console.log().
// division – обчислює ділення a/b та повертає значення console.log().
// subtraction – обчислює віднімання a-b та повертає значення console.log().
// — Запустіть кожен з цих методів, результат має бути наступним:

// MyMath.sum() – має повернути 5 + 2 = 7
// MyMath.multiplication() – має повернути 5 * 2 = 10
// MyMath.division() – має повернути 5 / 2 = 2.5
// MyMath.subtraction() – має повернути 5 - 2 = 3

let MyMath = {
  sum() {
    console.log(this.a +
      this.b);
  },
  multiplication() {
    console.log(this.a *
      this.b);
  },
  division(){
    console.log(this.a/
      this.b);
  },
  subtraction() {
    console.log(this.a -
      this.b);
  }
};
MyMath.a = 5;
MyMath.b = 2;
MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();