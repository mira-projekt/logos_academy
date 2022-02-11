
// let obj = new Object();
// let obj = {};
// let obj = new Object({name: 'Ivan', age: 25});
// console.log(obj);
// let obj = {
//     name: 'Ivan',
//     age: 25
// };
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.ages);
// console.log(obj['name']);
// console.log(obj['age']);
// obj.name = 'Petro';
// obj['name'] = 'Petro';
// console.log(obj);
// obj.city = 'Lviv';
// console.log(obj);
// key in object
// if('city' in obj){
//     console.log('yes');
// }
// if('age' in obj){
//     delete obj.age;
// }
// console.log(obj);
// let person = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     city: 'Lviv',
//     'date of birth': '01/03/1990'
// };
// console.log(person);
// console.log(person["date of birth"]);
// let person = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     city: 'Lviv',
//     'date of birth': {
//         date: 1,
//         month: 3,
//         year: 1990
//     }
// };
// console.log(person);
// console.log(person["date of birth"].year);
// let person = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     city: 'Lviv',
//     'date of birth': {
//         date: 1,
//         month: 3,
//         year: 1990
//     },
//     email: [
//         'personal@gmail.com',
//         'work@gmail.com'
//     ],
//     statusOnline: false,
//     description: null
// };
// console.log(person);
// console.log(person["date of birth"].year);
// console.log(person.email[1]);
// console.log(person.statusOnline);
// console.log(person.description);
// let product = {
//     id: 'xxxx',
//     category: {
//         id: 'xxx',
//         name: 'pizza'
//     },
//     name: 'Cesario',
//     description: 'bla bla bla',
//     price: 180,
//     image: 'url...'
// }
// let user = {
//     name: 'Pavlo',
//     age: 33,
//     showInfo: function(){
//         console.log('Hello JS')
//     }
// };
// console.log(user);
// user.showInfo();
// let user = {
//     name: 'Pavlo',
//     age: 33,
//     showInfo: function(){
//         console.log(`Name: ${this.name}, age: ${this.age}`)
//     }
// };
// console.log(user);
// user.showInfo();
// es6
// let user = {
//     name: 'Pavlo',
//     age: 33,
//     showInfo(){
//         console.log(`Name: ${this.name}, age: ${this.age}`)
//     }
// };
// console.log(user);
// user.showInfo();
// let user = {
//     name: 'Pavlo',
//     age: 33,
//     showInfo(){
//         console.log(`Name: ${this.name}, age: ${this.age}`);
//     },
//     showAge(){
//         return this.age;
//     },
//     sayHello(word){
//         return `${word} ${this.name}`;
//     }
// };
// console.log(user);
// user.showInfo();
// console.log('Age:',user.showAge());
// console.log(user.sayHello('Hello'));
// console.log(user.sayHello('Hi'));
// let woman = {
//     name: 'Oksana',
//     age: 18
// };
// let newWoman = woman;
// console.log('woman', woman);
// console.log('newWoman', newWoman);
// newWoman.name = 'Iryna';
// console.log('woman', woman);
// console.log('newWoman', newWoman);
// let woman = {
//     name: 'Oksana',
//     age: 18
// };
// let newWoman = {};
// for (const key in woman) {
//     // console.log(typeof key, key, woman[key]);
//     newWoman[key] = woman[key];
// }
// console.log('woman', woman);
// console.log('newWoman', newWoman);
// newWoman.name = 'Iryna';
// console.log('woman', woman);
// console.log('newWoman', newWoman);
// es6
// let woman = {
//     name: 'Oksana',
//     age: 18
// };
// let newWoman = Object.assign({}, woman, {city: 'Lviv'});
// console.log('woman', woman);
// console.log('newWoman', newWoman);
// newWoman.name = 'Iryna';
// console.log('woman', woman);
// console.log('newWoman', newWoman);
// fucntion Construction
// 1. Назва починається з великої букви
// 2. Функція-констуктор повинна викликатися через оператор new
// function Student(){
//     this.name = 'Kateryna';
//     this.age = 20;
// }
// let st = new Student();
// console.log(st);
// 1. Створення пустого обєкту і присвоєння його в this
// 2. Виконується код функції(добавляється нові властивості та методи)
// 3. Повертається значення this(return)
// function Student(){
//     // this = {};
//     this.name = 'Kateryna';
//     this.age = 20;
//     // return this
// }
// function Student(stName, stAge){
//     this.name = stName;
//     this.age = stAge;
// }
// let st = new Student('Kateryna', 20);
// console.log(st);
// let st1= new Student('Oksana', 18);
// console.log(st1);

// function Student(stName, stAge){
//     this.name = stName;
//     this.age = stAge;
//     this.showData = function(){
//         console.log(`Name: ${this.name}, age: ${this.age}`)
//     }
//     this.showAge = function(){
//         return this.age;
//     }
// }
// let st = new Student('Kateryna', 20);
// console.log(st);
// st.showData();
// let st1= new Student('Oksana', 18);
// console.log(st1);
// st1.showData();
// console.log('age', st1.showAge())


function myName(){
    console.log(`Name: ${this.name}`)
}

function Student(stName='Guest', stAge){
    this.name = stName;
    this.age = stAge || 18;
    this.showData = function(){
        console.log(`Name: ${this.name}, age: ${this.age}`)
    }
    this.showAge = function(){
        return this.age;
    }
    this.showName = myName;
}
let st = new Student();
console.log(st);
st.showData();
let st1= new Student('Oksana');
console.log(st1);
st1.showData();
console.log('age', st1.showAge())
st1.showName()