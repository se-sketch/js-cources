'use strict';

let animal = {
  eats: true
};

// создаём новый объект с прототипом animal
let rabbit = Object.create(animal);

console.log(rabbit);
console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) );
console.log(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit

Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}

//-----------

animal = {
  eats: true
};

rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});
console.log(Object.getPrototypeOf(rabbit) );
console.log(rabbit.jumps); // true

//--------------

// клон obj c тем же прототипом (с поверхностным копированием свойств)
let clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));

console.log(Object.getOwnPropertyDescriptors(rabbit));
console.log(clone);

//----------------
/*
let obj = {};

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

console.log(obj[key]); // [object Object], не "some value"!
*/
//-------------------------

let protot = {
	toString : {
		value() {
			 return Object.keys(this).join();
		}
	}
}

let dictionary = Object.create(null, protot);

// ваш код, который добавляет метод dictionary.toString

//Object.setPrototypeOf(dictionary, protot);


// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ


// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"
//alert(dictionary);

//--------------------

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

rabbit = new Rabbit("Rabbit");


rabbit.sayHi();

Rabbit.prototype.sayHi();

Object.getPrototypeOf(rabbit).sayHi();

rabbit.__proto__.sayHi();

