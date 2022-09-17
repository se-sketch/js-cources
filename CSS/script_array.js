"use strict";

// разные типы значений
//let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// получить элемент с индексом 1 (объект) и затем показать его свойство
//alert( arr[1].name ); // Джон

// получить элемент с индексом 3 (функция) и выполнить её
//arr[3](); // привет

//arr[arr.length] = 'new element';
//console.log(arr);


let fruits = ["Apple", "Orange", "Plum"];
// то же самое, что и fruits[fruits.length-1]
//console.log( fruits.at(-1) ); // Plum

fruits.push('new element');

console.log(fruits);

fruits.shift();

console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.unshift('Maraquya');

console.log(fruits);

//let fruits = []; // создаём массив

fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива

fruits.age = 25; // создаём свойство с произвольным именем

console.log(fruits);

//---------------

let styles = ['Jazz', 'Blues'];

styles.push('rock-n-roll');

let kvo = styles.length;

let ind = Math.floor(kvo / 2);

styles[ind] = 'Classics';

let first = styles[0];

styles.shift();

styles.unshift('rap', 'raggy');

console.log([styles, first]);

/////////////////////
/*
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
*/


function sumInput(){
	
	let arr = [];
	let x = 0;

	do{
		
		x = prompt('please enter number', '');
		
		if (x === null || x.trim() == '' || !isFinite(x)) break;
		
		arr.push( +x );
		
	}while( true );
	
	console.log(arr);
	
	let sum = 0;
	
	for(let el of arr){
		sum += el;
	}
	
	return sum;
}

/*
let sum = sumInput();

console.log(sum);
*/

//-----------------------

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

/*
let result = 0;

result = getMaxSubSum([-1, 2, 3, -9]); // == 5 (сумма выделенных элементов)
console.log(result);

result = getMaxSubSum([2, -1, 2, 3, -9]); // == 6
console.log(result);

result = getMaxSubSum([-1, 2, 3, -9, 11]); // == 11
console.log(result);

result = getMaxSubSum([-2, -1, 1, 2]); // == 3
console.log(result);

result = getMaxSubSum([100, -9, 2, -3, 5]); // == 100
console.log(result);

result = getMaxSubSum([1, 2, 3]); // == 6 (берём все)
console.log(result);
*/


//["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
	console.log(`${item} имеет позицию ${index} в ${array}`);
});

//------------

let names = 'Вася, Петя, Маша';

let arr = names.split(',');

/*
for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}
*/

//arr.map(function(currentValue, index, arr), thisValue);

let newArr = arr.map(function(currentValue){
	console.log(currentValue);
	return currentValue.trim();
});

console.log(newArr);


//--------------------

function camelize(str){
	
	let arr = str.split('-');
	
	arr = arr.map(function(currentValue, index, array){
		return (index == 0) ? currentValue : currentValue[0].toUpperCase() + currentValue.slice(1);
	});
	
	return arr.join('');
}

console.log(camelize("background-color")); // == 'backgroundColor';
console.log(camelize("list-style-image")); // == 'listStyleImage';
console.log(camelize("-webkit-transition")); // == 'WebkitTransition';

//--------------

console.info('------------');

function filterRange(arr, a, b){
	 
	let result = arr.filter((item) => { 
		return a <= item && b >= item;
	} );

	return result;
}

arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)

//------------------------------------
console.info('------------');

function filterRangeInPlace(arr, a, b){
	
	arr.forEach(function(item, index, array) {
		if (item < a || item > b){
			array.splice(index, 1);
		}
	});
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]

//------------------------------------
console.info('------------');


arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => b - a );

console.log( arr ); // 8, 5, 2, 1, -10

//------------------------------------
console.info('------------');

function copySorted(arr){
	
	let newArr = arr.slice();
	
	return newArr.sort();
	
}

arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)


//------------------------------------
console.info('------------');

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
		
		if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
		
		return this.methods[op](a, b);
	};
	
	this.addMethod = function(name, func){
		this.methods[name] = func;
	};
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

//------------------------------------
console.info('------------------------------------');

/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

names = users.map(item => item.name);

console.log( names ); // Вася, Петя, Маша
*/

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

//let usersMapped = users.map(item => ({ fullName: item.name + ' ' +item.surname, id: item.id }));

let usersMapped = users.map(item => ({
		fullName: `${item.name} ${item.surname}`,
		id: item.id,
	})
);

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(users);

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
console.log(arr); // Вася

//------------------------------------

function getAverageAge(arr){
	if (arr.length == 0) return 0;
	
	return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
	/*
	let sum = 0;
	
	arr.forEach(function(item){
		sum += item.age;
	});
	
	return sum / arr.length;
	*/
}

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//----------------------------

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

console.log( strings );
