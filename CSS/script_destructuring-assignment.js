"use strict";

// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"]

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // Ilya
console.log(surname);  // Kantor

//------------------------------------

let [a, b, c] = "abc";

console.log([a, b, c]);

let [one, two, three] = new Set([1, 2, 3]);

console.log([one, two, three]);

//------------------------------------
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

console.log(user);
//------------------------------------

user = {
  name: "John",
  age: 30
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, затем age:30
}

//------------------------------------

user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
for (let [key, value] of user) {
	console.log(`${key}:${value}`); // name:John, затем age:30
}

//------------------------------------

let guest = "Jane";
let admin = "Pete";

// Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`); // Pete Jane (успешно заменено!)

//------------------------------------

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest это массив элементов, начиная с 3-го
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

//------------------------------------

/*
// значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name);    // Julius (из массива)
console.log(surname); // Anonymous (значение по умолчанию)
*/
//------------------------------------

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

//let {width, height, title} = options;

let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

//------------------------------------
/*
options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

console.log(title);  // Menu
console.log(w);      // 100
console.log(h);      // 200
*/
//------------------------------------

/*
options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: { // положим size сюда
    width,
    height
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut
*/
//------------------------------------

// мы передаём объект в функцию
options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

/*
// ...и она немедленно извлекает свойства в переменные
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – взято из options,
  // width, height – используются значения по умолчанию
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

showMenu(options);
*/

//------------------------------------

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200

//------------------------------------

user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

let {name, years: age, isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false


//------------------------------------

function topSalary(salaries){
	
	let arr = Object.entries(salaries);
	
	let maxValue = 0;
	let name = null;
	
	for (let [key, value] of arr){
		if (value > maxValue) {
			maxValue = value;
			name = key;
		}
	}
	return name;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));

//------------------------------------

//------------------------------------
