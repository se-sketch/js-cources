"use strict";

function camelize(str){

	let arr = str.split('-');

	arr = arr.map((item, index) => (index == 0) ? item : item.charAt(0).toUpperCase() + item.slice(1));
	
	return arr.join('');
}

console.log(camelize("background-color")); // == 'backgroundColor';
console.log(camelize("list-style-image")); // == 'listStyleImage';
console.log(camelize("-webkit-transition")); //  == 'WebkitTransition';

//---------------------------

function filterRange(arr, a, b){

	return arr.filter((item, index) => a <= item && item <= b );
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)


//---------------------------------

function filterRangeInPlace(arr, a, b){
	
	for(let i = arr.length - 1; i >= 0; i--){
		let item = arr[i];
		
		if (item < a || item > b) arr.splice(i, 1);
	}
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]

//---------------------------------

arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => b - a );

console.log( arr ); // 8, 5, 2, 1, -10

//---------------------------------

function copySorted(arr){
	
	return arr.slice().sort();
	
}

arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)

//---------------------------------

function Calculator(){
	
	this.methods = {
		'+' : (a, b) => a + b,
		'-' : (a, b) => a - b,
	};
	
	this.calculate = function(str){
		
		let arr = str.split(' ');
		
		let a = +arr[0];
		let op = arr[1];
		let b = +arr[2];
		
		if ( !this.methods[op] || isNaN(a) || isNaN(b) ) return NaN;
		
		return this.methods[op](a, b);
	};
	
	this.addMethod = function(name, func){
		this.methods[name] = func;
	};
}

let calc = new Calculator;


console.log( calc.calculate("3 + 7") ); // 10
console.log( calc.calculate("3 - 7") );

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8


//---------------------------------


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log( names ); // Вася, Петя, Маша

//---------------------------------

vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
	fullName : `${item.name} ${item.surname}`,
	id : item.id,
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log( usersMapped ); 

//---------------------------------

function sortByAge(arr){
	arr.sort( (a, b) => a.age - b.age );
}

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr); 

//---------------------------------
/*
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
*/

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}
//---------------------------------

function getAverageAge(arr){
	
	if (arr.length == 0) return 0;
	
	let value = arr.reduce(function(previousValue, item) {
		
		previousValue +=  +item.age;
		
		return Number(previousValue);
	}, [0]);	
	
	return value / arr.length;
}

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//---------------------------------

function unique(arr) {

	let newArr = [];
	
	arr.forEach(function(item){
		if (!newArr.includes(item)) newArr.push(item); 
	});
	
	return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O

//---------------------------------

//---------------------------------

//---------------------------------

//---------------------------------
