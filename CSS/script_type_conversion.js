"use strict";

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    //alert(`hint: ${hint}`);
	console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

//console.log(user);


/*
console.log(+user); // hint: number -> 1000

console.log(user + 500); // hint: default -> 1500

console.log(user.valueOf());


let obj = {
  toString() {
    return "2";
  }
};

console.log(obj + 2); // 22 ("2" + 2), преобразование к примитиву вернуло строку => конкатенация
console.log(+obj + 2); // 22 ("2" + 2), преобразование к примитиву вернуло строку => конкатенация

*/
