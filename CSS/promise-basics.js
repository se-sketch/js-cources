'use strict';

/*
let promise = new Promise(function(resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve("done"), 1000);
});

console.log('qqqqqq');
*/


//----------------
/*
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => console.log(result), // выведет "done!" через одну секунду
  error => console.log(error) // не будет запущена
);

//----------------

promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject запустит вторую функцию, переданную в .then
promise.then(
  result => console.log(result), // не будет запущена
  error => console.log(error) // выведет "Error: Whoops!" спустя одну секунду
);

console.log('test');

//----------------

promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// .catch(f) это то же самое, что promise.then(null, f)
//promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду
promise.catch(console.log);
*/
//----------------


function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => console.log(`${script.src} загружен!`),
  error => console.log(`Ошибка: ${error.message}`)
);

promise.then(script => console.log('Ещё один обработчик...'));

//----------------

function delay(ms){
  return new Promise(function(resolve, reject){
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));

//----------------
