'use strict';

String.prototype.show = function() {
  console.log(this);
};

"BOOM!".show(); // BOOM!


if (!String.prototype.repeat) { // Если такого метода нет
  // добавляем его в прототип

  String.prototype.repeat = function(n) {
    // повторить строку n раз

    // на самом деле код должен быть немного более сложным
    // (полный алгоритм можно найти в спецификации)
    // но даже неполный полифил зачастую достаточно хорош для использования
    return new Array(n + 1).join(this);
  };
}

console.log( "La".repeat(3) ); // LaLaLa


let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

console.log( obj.join(',') ); // Hello,world!

//-----------

function f() {
  console.log("Hello!");
}

Function.prototype.defer = function(ms){
	setTimeout(this, ms);
	//console.log('Function.prototype.defer : '+ms);
}

console.log(Function.prototype);

f.defer(1000); // выведет "Hello!" через 1 секунду

//-------------

function sum(a, b) {
  console.log( a + b );
}

Function.prototype.defer2 = function(ms){
	let func = this;
	//console.log(this);
	return function(...args){
		setTimeout(() => func.apply(this, args), ms);
	}
}

sum.defer2(1000)(1, 2); // выведет 3 через 1 секунду.


