'use strict';

class User {
  static staticMethod() {
    //console.log(this === User);
    console.log(this);
  }
}

User.staticMethod(); // true

//---

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// использование
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

console.log( articles );

//----
/*
class Animal {}
class Rabbit extends Animal {}

// для статики
//console.log(Rabbit.__proto__ === Animal); // true
console.log(Rabbit.__proto__);

// для обычных методов
//console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true
console.log(Rabbit.prototype);
console.log(Rabbit.prototype.__proto__);
*/
//-----------

class Rabbit extends Object {
  constructor(name) {
  	super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') ); // Ошибка

console.log( rabbit.name );
