"use strict";

function makeCounter(){
	let count = 0;
	
	function counter(){
		return count++;
	}
	
	counter.set = value => count = value;
	
	counter.decrease = () => count--;
	
	return counter;
}

let kounter = new makeCounter();

kounter();
kounter();
kounter();
kounter();


kounter.set(13);

kounter.decrease();
kounter.decrease();


console.log(kounter());


//------------------------------------
console.log('--------------------');

function sum(a){
	let currSum = a;
	
	function f(b){
		currSum += b;
		return f;
	}
	
	f.toString = function() {
		return currSum;
	};
	
	return f;
}


let result = sum(1)(2);

console.log( result.toString() ); // 3

result = sum(5)(-1)(2);

console.log( result.toString() ); // 6

result = sum(6)(-1)(-2)(-3);

console.log( result.toString() ); // 0

result = sum(0)(1)(2)(3)(4)(5);

console.log( result.toString() );  // 15


//------------------------------------


