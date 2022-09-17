"use strict";

/*
function slow(x) {
  // здесь могут быть ресурсоёмкие вычисления
  x *= x;
  return x;
}

function cachingDecorator(func) {

	let cashe = new Map();
	
	return function(x){
		
		if (cashe.has(x)){
			return cashe.get(x);
		}
		
		let result = func(x);
		cashe.set(x, result);
	
		return result;
	}
}

slow = cachingDecorator(slow);

console.log( slow(3) ); // slow(1) кешируем

console.log( "Again: " + slow(3) ); // возвращаем из кеша


console.log( slow(2) ); // slow(2) кешируем
console.log( "Again: " + slow(2) ); // возвращаем из кеша

*/

//-------------------------------------------
/*
let worker = {
	somemethod(){
		return 2;
	},
	
	slow(x){
		alert('slow'+x);
		return x * this.somemethod();
	},
}

function cachingDecorator(func){
	
	let cashe = new Map();
	
	return function(x){
		if (cashe.has(x)){
			return cashe.get(x);
		}
		
		let result = func.call(this, x);
		cashe.set(x, result);
		return result;
	}
}

worker.slow = cachingDecorator(worker.slow);

console.log( worker.slow(7) );

console.log( worker.slow(7) );

console.log( worker.slow(9) );

console.log( worker.slow(7) );

console.log( worker.slow(9) );
*/
//-------------------------------------------

//-------------------------------------------
/*
let worker = {
	slow(min, max){
		alert('slow: '+min+' '+max);
		return min + max;
	}
}

function cachingDecorator(func, hash){
	
	let cashe = new Map();
	
	return function(){
		
		let key = hash(arguments);
		
		if (cashe.has(key)){
			return cashe.get(key);
		}
		
		let result = func.call(this, ...arguments);
		cashe.set(key, result);
		return result;
	}
}

function hash(){
	return [].join.call(arguments);
	//return '' + args[0] + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(7, 8) );

console.log( worker.slow(7, 8) );
*/
//-------------------------------------------

function work(a, b) {
	alert( a + b ); // произвольная функция или метод
	//console.log('work ' + a + b ); // произвольная функция или метод
}

function spy(func){

	function wrapper(...args){
		wrapper.calls.push(args);
		return func.apply(this, args);
	}
	
	wrapper.calls = [];
	
	return wrapper;
}

work = spy(work);

//work(1, 2); // 3
//work(4, 5); // 9

//console.log(work);
console.log(work.calls);

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}


//-------------------------------------------
/*
function f(x) {
	let date = new Date();
	console.log('f'+ date + ' : ' + x);
}

function delay(f, ms){
	return function(){
		setTimeout( ()=> f.apply(this, arguments), ms);
	}
}


// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
*/
//-------------------------------------------
/*
function debounce(f, ms) {
		
	let flag = false;
	
	return function(){
		if (flag) return;
		
		f.apply(this, arguments);
		
		flag = true;
		
		setTimeout(()=> flag = false, ms);
	}
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
*/
//-------------------------------------------
function f(a) {
  console.log(a)
}

function throttle(func, ms){

	let flag = false;
	let savedThis;
	let savedArgs;

	function wrapper(){
		if (flag){
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		func.apply(this, arguments);
		flag = true;

		setTimeout(function(){
			flag = false;
			if (savedArgs){
				wrapper.apply(savedThis, savedArgs);
				savedThis = savedArgs = null;
			}
		}, ms);

	}

	return wrapper;
}


// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

//-------------------------------------------

