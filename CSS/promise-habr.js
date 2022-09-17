'use strict';

const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();

  if(randomNumber < .7) {
    resolve('Все прошло отлично!');
  } else {
    reject(new Error('Что-то пошло не так'));
  }
});
promise.then((data) => {
  console.log(data);  // вывести 'Все прошло отлично!'
  }
  /*
  ,
  (error) => {
  console.log(error); // вывести ошибку
  }
  */
).catch((error) => {
	console.log(error);
});

console.log('111');


//-----------------

const promise1 = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('Promise1 выполнен');
 }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve('Promise2 выполнен');
 }, 1500);
});
Promise.all([promise1, promise2])
  .then((data) => console.log(data[0], data[1]))
  .catch((error) => console.log(error));

  //-----------------

  //-----------------