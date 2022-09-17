'use strict';

/*
fetch('https://no-such-server.blabla') // ошибка
  .then(response => response.json())
  .catch(err => console.log(err)); // TypeError: failed to fetch (текст может отличаться)
*/

//----

/*
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => console.log(error.message));
*/

//----

// the execution: catch -> catch -> then
new Promise((resolve, reject) => {

  throw new Error("Ошибка!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // обрабатываем ошибку
  } else {
    console.log("Не могу обработать ошибку");

    throw error; // пробрасывает эту или другую ошибку в следующий catch
  }

}).then(function() {
  /* не выполнится */
}).catch(error => { // (**)

  console.log(`Неизвестная ошибка: ${error}`);
  // ничего не возвращаем => выполнение продолжается в нормальном режиме

});


//----
/*
new Promise(function() {
  noSuchFunction(); // Ошибка (нет такой функции)
})
  .then(() => {
    // обработчики .then, один или более
  }); // без .catch в самом конце!
  */
//----

window.addEventListener('unhandledrejection', function(event) {
  // объект события имеет два специальных свойства:
  alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
  alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

new Promise(function() {
  throw new Error("Ошибка!");
}); // нет обработчика ошибок

//----
//----

//----
