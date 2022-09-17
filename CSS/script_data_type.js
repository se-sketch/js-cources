"use strict";

/*
let x = + prompt('please enter x', '');
let y = + prompt('please enter y', '');

let result = x + y;

console.log(result.toFixed(2));

*/


function readNumber(){
	
	let x = 0;
	
	do{
		
		x = prompt('please enter x', '');
		
		if (x === null || x === '') return null;
		
	}while(! isFinite(x) );
	
	return +x;
}

/*
let x = readNumber();


console.log(x);

console.log(typeof x);
*/

//------------------

function random(min, max){
	let rand = Math.random();
	
	let delta = max - min;
	
	let result = min + delta * rand;
	
	return result;
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


/*
console.log( random(1, 5) ); // 1.2345623452
console.log( random(1, 5) ); // 3.7894332423
console.log( random(1, 5) ); // 4.3435234525

console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );
*/

//------------------


function ucFirst(str){
	
	if (!str) return '';
	
	return str[0].toUpperCase() + str.slice(1);
}

//ucFirst("вася") == "Вася";

//console.log(ucFirst("вася"));


function checkSpam(str){
	
	let lowerStr = str.toLowerCase();
	
	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/*
let result = '';
let str = '';

str = 'buy ViAgRA now';

result = checkSpam(str); // == true

console.log([str, result]);

str = 'free xxxxx';

result = checkSpam(str); //  == true

console.log([str, result]);

str = "innocent rabbit";

result = checkSpam(str); //  == false

console.log([str, result]);
*/

function truncate(str, maxlength){
	
	let length = str.length;
	
	if (length > maxlength){
		return str.slice(0, maxlength - 1) + '...';
	}
	
	return str;
}

/*
let result;

result = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20); //  = "Вот, что мне хотело…"

console.log(result);

result = truncate("Всем привет!", 20); // = "Всем привет!"

console.log(result);
*/
//---------------------

function extractCurrencyValue(str){
	
	if (!str.startsWith('$')) return 0;
	
	return Number(str.slice(1));
}

//console.log( extractCurrencyValue('$120') === 120 ); // true

