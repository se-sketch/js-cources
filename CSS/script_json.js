"use strict";

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // мы получили строку!

console.log(json);

//---------------------------------

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

//---------------------------------
let user = {
  sayHi() { // будет пропущено
    alert("Hello");
  },
  [Symbol("id")]: 123, // также будет пропущено
  something: undefined // как и это - пропущено
};

console.log( JSON.stringify(user) ); // {} (пустой объект)
//---------------------------------

user = {
  name: "Василий Иванович",
  age: 35
};

let str_json = JSON.stringify(user);

console.log(str_json);

let user2 = JSON.parse(str_json);

console.log(user2);
//---------------------------------

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

let result = ( JSON.stringify(meetup, function replacer(key, value) {
	
	return (key != "" && value == meetup) ? undefined : value;
}));

console.log(result);
//---------------------------------

//---------------------------------

//---------------------------------