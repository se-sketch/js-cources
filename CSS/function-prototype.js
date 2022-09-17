'use strict';

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

/*
Rabbit.prototype = {};

console.log( rabbit.eats ); // ?
*/
Rabbit.prototype.eats = false;

console.log( rabbit.eats ); // ?

/*
delete rabbit.eats;

console.log( rabbit.eats ); // ?
*/
/*
delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ?
*/

//let obj2 = new obj.constructor();

function RabbitTest() {}
RabbitTest.prototype = {
  jumps: true
};

let rabbitTest = new RabbitTest();
console.log(rabbitTest);

function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user2.name ); // Pete (сработало!)

User.prototype = {}; // (*)

let user3 = new user.constructor('Pete');

console.log(user3);

let user4 = new User('Greg');
let user5 = new user4.constructor('Brad');

console.log(user4);
console.log(user5);