 "use strict";

 let user = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  },
  say(phrase){
  	console.log('' +phrase+ ` ${this.firstName}!`);
  }
};

//console.log(user);

//user.sayHi();
/*
setTimeout(() => user.sayHi(), 1000); // Привет, undefined!

user = {sayHi() { console.log(`Другой пользователь, в setTimeout!`)}};
*/

/*
function func(phrase){
	console.log('' +phrase+  'firstName: '+this.firstName);
}

let func_user = func.bind(user);

func_user('hello ');
*/

//console.log(func_user);

/*
let sayHi = user.sayHi.bind(user);

sayHi();

setTimeout(sayHi, 1000);
*/
/*
let say = user.say.bind(user);

say('hello friend ');
say('good buy ');
*/
//-------------

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    console.log(args);
    return func.call(this, ...argsBound, ...args);
  }
}

// использование:
user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// добавляем частично применённый метод с фиксированным временем
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

//user.sayNow("Hello");
// Что-то вроде этого:
// [10:00] John: Hello!

//-----------------

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?