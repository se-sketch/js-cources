"use strict";

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// добавление нового элемента в список
list = { value: "new item", next: list };

console.log(list);

//---------------------------------

function sumTo_loop(n){
	
	let result = 0;
	
	for (let i = 1; i <= n; i++){
		result += i;	
	}
	return result;
}

function sumTo_recursion(n){
	return (n == 1) ? n : n + sumTo_recursion(n - 1);
}

function sumTo_arifm_progress(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo_loop(5));

console.log(sumTo_recursion(5));

console.log(sumTo_arifm_progress(5));

//---------------------------------

function factorial(n){
	return (n == 1) ? n : n * factorial(n-1);
}

console.log(factorial(5));

//---------------------------------

function fib_recursion(n) {
  return n <= 1 ? n : fib_recursion(n - 1) + fib_recursion(n - 2);
}

console.log('---------------');
console.log( fib_recursion(1) );
console.log( fib_recursion(2) );
console.log( fib_recursion(3) ); // 2
console.log( fib_recursion(4) );
console.log( fib_recursion(5) );
console.log( fib_recursion(6) );
console.log( fib_recursion(7) ); // 13
//console.log( fib_recursion(77) );
// fib(77); // вычисляется очень долго

//---------------------------------
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13
console.log( fib(77) ); // 5527939700884757

//---------------------------------

console.log('---------------');

function printList_loop(list){
	
	let tmp = list;
	
	while(tmp){
		console.log(tmp.value);
		tmp = tmp.next;
	}
}

function printList_recursion(list){

	console.log(list.value);
	
	if (list.next){
		printList_recursion(list.next);
	}
}

function printList_recursion_reverse(list){
	
	if (list.next) {
		printList_recursion_reverse(list.next);
	}
	
	console.log(list.value);
}

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log( arr[i] );
  }
}



list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList_loop(list);

printList_recursion(list);

console.log('---------------');

printList_recursion_reverse(list);

console.log('---------------');

printReverseList(list);
//---------------------------------


//---------------------------------


//---------------------------------


//---------------------------------

