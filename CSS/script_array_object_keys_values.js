"use strict";

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices);

//---------------------------------

function sumSalaries(salaries){
	//Object.values , for..of.
	
	let sum = 0;
	
	let arr = Object.values(salaries);
	
	for(let item of arr){
		sum += item;
	}
	
	return sum;
	
	//return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

sumSalaries(salaries);

console.log( sumSalaries(salaries) ); // 650

//---------------------------------

function count(user){
	return Object.keys(user).length;
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2

//---------------------------------

//---------------------------------
