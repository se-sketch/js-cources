"use strict";

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?

//---------------------------------
function makeWorker() {
  let name = "Pete";
  //name = "Pete";

  return function() {
    console.log(name);
  };
}

name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" 

//---------------------------------
let value = "Сюрприз!";

function f() {
  let value = "ближайшее значение";

  function g() {
    //debugger; // в консоли: напишите alert(value); Сюрприз!
	//console.log(value);
  }

  return g;
}

let g = f();
g();

//---------------------------------
/*
function f2(){
	for(var i = 0; i < 3; i++){   // error var -> let
		setTimeout(function(){
			console.log(i);
		}, 1000*i);
	}
}

console.log('-----');
console.log(f2());
*/
//---------------------------------
function sum(a){
	
	return function(b){
		return a + b;
	}
	
}

console.log(sum(1)(2)); // = 3
console.log(sum(5)(-1)); //  = 4

//---------------------------------

function inBetween(a, b){
	return function(x){
		return x >= a && x <= b;
	}
}

function inArray(arr){
	return function(x){
		return arr.includes(x);
	}
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

//---------------------------------

function byField(fieldName){
	
	return function(a, b){
		return (a[fieldName] > b[fieldName]) ? 1 : -1;
	}
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));

console.log(users);

//users.forEach(user => alert(user.name));

users.sort(byField('age'));

console.log(users);

//users.forEach(user => alert(user.name));

//---------------------------------
/*
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}
*/
function makeArmy() {

	let shooters = [];

	for(let i = 0; i < 10; i++) {
		let shooter = function() { // функция shooter
			console.log( i ); // должна выводить порядковый номер
		};
		shooters.push(shooter);
	}

  return shooters;
}

let army = makeArmy();

console.log(army);


army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


//---------------------------------


//---------------------------------




