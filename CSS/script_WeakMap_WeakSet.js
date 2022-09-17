"use strict";

let john = { name: "John" };

let array = [ john ];

john = null; // перезаписываем ссылку на объект

console.log(array);

//-----------------------------------------
john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // перезаписываем ссылку на объект

// объект john сохранён внутри объекта `Map`,
// он доступен через map.keys()

console.log(map);

//-----------------------------------------

john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // перезаписываем ссылку на объект

// объект john удалён из памяти!

console.log(weakMap);

//-----------------------------------------

let cache = new WeakMap();

// вычисляем и запоминаем результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* вычисляем результат для объекта */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* какой-то объект */};

let result1 = process(obj);
let result2 = process(obj);

// ...позже, когда объект больше не нужен:
obj = null;

// Нет возможности получить cache.size, так как это WeakMap,
// но он равен 0 или скоро будет равен 0
// Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются

//-----------------------------------------

let visitedSet = new WeakSet();

 john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
console.log(visitedSet.has(john)); // true

// проверим, заходила ли Mary?
console.log(visitedSet.has(mary)); // false

john = null;

// структура данных visitedSet будет очищена автоматически

//-----------------------------------------

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
console.log("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)

//-----------------------------------------

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
// Объект Date мы рассмотрим позднее

