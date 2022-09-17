'use strict';


async function test(){

	let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
	let response = await fetch(url);

	let commits = await response.json(); // читаем ответ в формате JSON

	console.log(commits[0].author.login);
	//console.log(commits);
}

test();


//----------------

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => console.log(commits[0].author.login));

//----------------

async function test2(){
	let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

	let text = await response.text(); // прочитать тело ответа как текст

	console.log(text.slice(0, 80) + '...');	
}

test2();

//----------------

async function test3(){

	//let url = 'https://learn.javascript.ru/fetch';
	//let response = await fetch(url + '/article/fetch/logo-fetch.svg');

	let url = 'https://learn.javascript.ru/article/fetch/logo-fetch.svg';

	let response = await fetch(url);

	let blob = await response.blob(); // скачиваем как Blob-объект

	// создаём <img>
	let img = document.createElement('img');
	img.style = 'position:fixed;top:10px;left:10px;width:100px';
	document.body.append(img);

	// выводим на экран
	img.src = URL.createObjectURL(blob);

	setTimeout(() => { // прячем через три секунды
	  img.remove();
	  URL.revokeObjectURL(img.src);
	}, 3000);	
}

test3();

//----------------  

async function test4(){
	let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

	// получить один заголовок
	console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8

	// перебрать все заголовки
	for (let [key, value] of response.headers) {
	  console.log(`${key} = ${value}`);
	}	
}

test4();
//----------------  
/*
async function test5(){
	let protectedUrl = 'https://api.github.com';
	let response = fetch(protectedUrl, {
	  headers: {
	    Authentication: 'secret'
	  }
	});	

	console.log(response);
}

test5();
*/
//----------------  

async function test6(){
	let user = {
	  name: 'John',
	  surname: 'Smith'
	};

	let url = 'https://learn.javascript.ru/article/fetch/post/user';

	//let response = await fetch('/article/fetch/post/user', {
	let response = await fetch(url, {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json;charset=utf-8'
	  },
	  body: JSON.stringify(user)
	});

	let result = await response.json();
	console.log(result.message);	
}

test6();
//----------------  


//----------------  


//----------------  


//----------------  

