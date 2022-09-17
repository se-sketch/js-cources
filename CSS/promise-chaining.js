'use strict';

/*
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  console.log(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  console.log(result); // 2
  return result * 2;

}).then(function(result) {

  console.log(result); // 4
  return result * 2;

});
*/

//------------
/*
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});
*/

//-------------------
/*
loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // скрипты загружены, мы можем использовать объявленные в них функции
    one();
    two();
    three();
  });
*/

//-------------

/*
let promise = fetch('https://learn.javascript.ru/promise-chaining')
  // .then в коде ниже выполняется, когда удалённый сервер отвечает
  .then(function(response) {
    // response.text() возвращает новый промис,
    // который выполняется и возвращает полный ответ сервера,
    // когда он загрузится
    return response.text();
  })
  .then(function(text) {
    // ...и здесь содержимое полученного файла
    //alert(text); // {"name": "iliakan", isAdmin: true}
    console.log(text);
  });
*/

//-------------
/*
// Запрашиваем user.json
fetch('/article/promise-chaining/user.json')
  // Загружаем данные в формате json
  .then(response => response.json())
  // Делаем запрос к GitHub
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  // Загружаем ответ в формате json
  .then(response => response.json())
  // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });
*/
//-------------

function loadJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json());
}

function showAvatar(githubUser) {
  return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

// Используем их:
loadJson('/article/promise-chaining/user.json')
  .then(user => loadGithubUser(user.name))
  .then(showAvatar)
  .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));
  // ...

//-------------
//-------------
//-------------