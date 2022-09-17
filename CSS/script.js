"use strict";

function Calculator(){
	
	this.read = function(){
		this.x = +prompt('please enter x', '');
		this.y = +prompt('please enter y', '');
	};
	
	
	this.sum = function(){
		return this.x + this.y;
	};
	
	this.mul = function(){
		return this.x * this.y;
	};
	
}

/*
let calculator = new Calculator();
calculator.read();

console.log(calculator);

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Accumulator(startingValue){
	this.value = startingValue;
	
	this.read = function(){
		
		let add = + prompt('please enter number', '');
		
		if (!isNaN(add)){
			this.value += add;
		}
	}
}

let accumulator = new Accumulator(1); // начальное значение 1

/*
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/

//let user = {}; // пользователь без адреса

//alert( user?.address?.street ); // undefined (без ошибки)


/*
let user = {
  name: "Вася"
};

let id = Symbol("id");
user[id] = 1;

id = Symbol("id");
user[id] = 2;

id = Symbol("id");
user[id] = 3;


console.log( user ); // мы можем получить доступ к данным по ключу-символу
*/


/*
function A() { 
	console.log(test);
	return obj; 
}

function B() { return obj; }

let test = 'testName';

let obj = {};


alert( new A() == new B() ); // true

*/

/*
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Вася");

console.log(user);
*/
/*
alert(user.name); // Вася
alert(user.isAdmin); // false
*/

/*
let calculator = {
	//x : 0,
	//y : 0,
	read(){
		this.x = +prompt('please enter x', '');
		this.y = +prompt('please enter y', '');
    },
	sum(){
		return this.x + this.y;
	},
	mul(){
		return this.x * this.y;
	}
};

calculator.read();

console.log(calculator);

console.log( calculator.sum() );

console.log( calculator.mul() );
*/

/*
function makeUser() {
  return {
    name: "Джон",
    ref() { return this; }
  };
};

let user = makeUser();

console.log(user);

console.log(user.ref);

console.log(user.ref().name);
*/
//alert( user.ref.name ); // Каким будет результат?




/*
let user = {
  name: "Джон",
  go: function() { alert(this.name) }
};

(user.go)()

*/



/*
function multiplyNumeric(menu, test){
	
	test = 359;
	
	for(let key in menu){
		
		if (typeof(menu[key]) == 'number'){
			menu[key] = menu[key] * 2;
		}
		
	}
	
}

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let test = 100;

console.log([menu, test]);

multiplyNumeric(menu, test);

console.log([menu, test]);
*/
/*
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

console.log(menu);
*/

/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries){
	sum += salaries[key];
}

console.log('sum = '+sum);
*/
/*
function isEmpty(schedule){
	
	for (let key in schedule){
		return true;
	}
	
	return false;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

/*
let user = {};

user.name = 'John';
user.surname = 'Smith';

console.log(user);

user.name = 'Pete';

console.log(user);

delete user.name;

console.log(user);
*/

/*
let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};

for (let code in codes) {
  console.log( +code ); // 49, 41, 44, 1
}
*/

/*
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};

console.log(user);
*/

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);
*/

/*
function pow(x, n){
	
	return Number(x) ** Number(n);
	
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

let x = prompt('enter x', 0);
let n = prompt('enter n', 0);

let result = pow(x, n);

console.log('result = '+result);
*/

/*
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

/*
function min(a, b){
	
	return (a < b) ? a : b;
	
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
*/

/*
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/


/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/

/*
function checkAge(age) {
	
	let result = (age > 18) || confirm('Родители разрешили?');
	
	return result;
}


let age = 15;
let result = checkAge(age);

console.log('age = ' + age + ' ; result = ' + result);

age = 20;
result = checkAge(age);

console.log('age = ' + age + ' ; result = ' + result);
*/

/*
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
*/

/*
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/
/*
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/
/*
const number = +prompt('Введите число между 0 и 3', '');

switch(number){
	case 0:
		alert('Вы ввели число 0');
		break;
	case 1:
		alert('Вы ввели число 1');
		break;
	case 2:	
	case 3:	
		alert('Вы ввели число 2, а может и 3');
		break;
}
*/



