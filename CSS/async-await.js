'use strict';

/*
async function f() {
  return 1;
}

f().then(function(result){
	console.log(result);
}); // 1

*/

//---
/*
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"
}

f();

console.log('111');
*/
//---
/*
async function showAvatar() {


  //// запрашиваем JSON с данными пользователя
  //let response = await fetch('/article/promise-chaining/user.json');
  //let user = await response.json();
  

  let user = {
  	name : 'iliakan',
  	//name : 'remy',
  	//name : 'jeresig',
  }

  // запрашиваем информацию об этом пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 3 секунды и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

let promise_githubUser = showAvatar();

promise_githubUser.then(
	function (result){
		console.log(result);
	}
);
*/


//---
/*
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(console.log); // 1

console.log('111');  
*/
//---

/*
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}
*/

/*
async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}


loadJson('no-such-user.json') // (3)
  .catch(console.log); // Error: 404

console.log('111');
*/
//---
/*
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      console.log(`Полное имя: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
*/
//---

class HttpError extends Error{
  constructor(response){
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadUser(url){

  let response = await fetch(url);

  if (response.status == 200){
    return response.json();
  }else{
    throw new HttpError(response);
  }
}

async function demoGithubUser(){

  let user;

  while(true){

    let name = prompt('please enter login', 'iliakan');  

    try{
      user = await loadUser(`https://api.github.com/users/${name}`);
      break;
    }catch(err){

      if (err instanceof HttpError && err.response.status == 404){
        console.log('no such user');
      }else{
        throw err;
      }
    }
  }
  console.log(user);
  return user;
}

let promise = demoGithubUser();

//console.log(promise);

promise.then(function(result){
	console.log(result); // result - user;
});


//---
/*
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"

  wait().then(function(result){
    console.log(result);
  });

}

f();
*/
//---


