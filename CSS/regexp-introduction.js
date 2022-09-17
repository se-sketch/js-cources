'use strict';

let str = "Любо, братцы, любо!";

console.log( str.match(/любо/gi) ); // Любо,любо (массив из 2х подстрок-совпадений)

//-----------

str = "Любо, братцы, любо!";

let result = str.match(/любо/i); // без флага g

console.log(result);

/*
console.log( result[0] );     // Любо (первое совпадение)
console.log( result.length ); // 1

// Дополнительная информация:
console.log( result.index );  // 0 (позиция совпадения)
console.log( result.input );  // Любо, братцы, любо! (исходная строка)
*/

//----

// без флага g
console.log( "We will, we will".replace(/we/i, "I") ); // I will, we will

// с флагом g
console.log( "We will, we will".replace(/we/ig, "I") ); // I will, I will

//---

console.log( "Люблю HTML".replace(/HTML/, "$& и JavaScript") ); // Люблю HTML и JavaScript

//---

str = "Я ЛюБлЮ JavaScript";
let regexp = /люблю/i;

console.log(typeof regexp);

console.log( regexp.test(str) ); // true

//---


//---


//---


//---


//---


//---


//---


//---

