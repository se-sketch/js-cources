"use strict";

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}

console.log(recipeMap);

recipeMap.forEach((value, key, map) => {
	console.log(`${key}: ${value}`); // огурец: 500 и так далее
});
//-----------------------------------------

let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

console.log( map.get('name') ); // John

console.log(Object.entries(obj));

console.log(map);

//-----------------------------------------

map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

//obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)
obj = Object.fromEntries(map); // создаём обычный объект (*)

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj);

//-----------------------------------------

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (потом Pete и Mary)
}

//-----------------------------------------

function unique(arr) {
  
	let set = new Set(arr);
	
	return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//unique(values);

//console.log( unique(values) ); // Hare,Krishna,:-O

//-----------------------------------------

/*
function aclean(arr){
	
	let set = new Set();
	
	let newArr = [];
	
	arr.forEach(function(item, index){
		
		let str = item.toLowerCase().split('').sort().join('');
		
		if (!set.has(str)) {
			newArr.push(item);
			set.add(str);
		}
	});
	return newArr;
}
*/

function aclean(arr){
	let map = new Map();
	
	for(let item of arr){
		
		let str = item.toLowerCase().split('').sort().join('');
		
		map.set(str, item);
	}
	
	//console.log(map.values());
	
	return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//aclean(arr);

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

//-----------------------------------------

map = new Map();

map.set("name", "John");

let keys = Array.from( map.keys() );

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);

//-----------------------------------------


//-----------------------------------------


//-----------------------------------------


