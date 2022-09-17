'use strict';
/*
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// Использование:
let user = new User("Иван");
user.sayHi();

// класс - это функция
console.log(typeof User); // function


// ...или, если точнее, это метод constructor
console.log(User === User.prototype.constructor); // true

// Методы находятся в User.prototype, например:
console.log(User.prototype.sayHi); // alert(this.name);

// в прототипе ровно 2 метода
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

for(let prop in user){
	console.log(prop);
}

//---

// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
let UserMyClass = class MyClass {
  sayHi() {
    console.log(MyClass); // имя MyClass видно только внутри класса
  }
};

new UserMyClass().sayHi(); // работает, выводит определение MyClass

//alert(MyClass); // ошибка, имя MyClass не видно за пределами класса

//---

function makeClass(phrase) {
  // объявляем класс и возвращаем его
  return class {
    sayHi() {
      console.log(phrase);
    };
  };
}

// Создаём новый класс
let UserMakeClass = makeClass("Привет");

new UserMakeClass().sayHi(); // Привет
*/

class User {

  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }

}

let user = new User("Иван");
console.log(user.name); // Иван

user = new User(""); // Имя слишком короткое.

//----------

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();
