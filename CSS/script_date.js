"use strict";

let now = new Date();
console.log( now ); // показывает текущие дату и время

//------------------------------------

let date = new Date("2017-01-26");

console.log( date );

//------------------------------------

// текущая дата
date = new Date();

// час в вашем текущем часовом поясе
console.log( date.getHours() );

// час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
console.log( date.getUTCHours() );

//------------------------------------
date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log( date ); // 1 Mar 2016
//------------------------------------

let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // заканчиваем отсчёт времени

console.log( `Цикл отработал за ${end - start} миллисекунд` );

//------------------------------------
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

console.log( 'Время diffSubtract: ' + bench(diffSubtract) + 'мс' );
console.log( 'Время diffGetTime: ' + bench(diffGetTime) + 'мс' );
//------------------------------------

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

date = new Date(2012, 1, 20, 3, 12);

console.log(date);

//------------------------------------

function getWeekDay(date){
	
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	
	return days[date.getDay()];
}

date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"

//------------------------------------

function getLocalDay(date){
	
	let day = date.getDay();
	
	if (day == 0) day = 7;
	
	return day;
}

date = new Date(2012, 0, 3);  // 3 января 2012 года

console.log(date);

console.log( getLocalDay(date) );       // вторник, нужно показать 2


//------------------------------------

function getDateAgo(date, days){
	
	//return new Date(date - days*24*3600*1000);
	
	let dateCopy = new Date(date);
	
	dateCopy.setDate(dateCopy.getDate() - days);
	
	return dateCopy.getDate();
}

date = new Date(2015, 0, 2);

//getDateAgo(date, 1);


console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

//------------------------------------

function getLastDayOfMonth(year, month){
	
	let date = new Date(year, month + 1, 0);
	
	return date.getDate();
}

console.log( getLastDayOfMonth(2012, 0) ); // 31
console.log( getLastDayOfMonth(2012, 1) ); // 29
console.log( getLastDayOfMonth(2013, 1) ); // 28

//------------------------------------

function getSecondsToday(){
	
	let date = new Date();
	
	let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	
	let sec = (date - date1) / 1000;
	
	return Math.round(sec);
}

function getSecondsToday2() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

//getSecondsToday();

console.log(getSecondsToday());

//------------------------------------

function getSecondsToTomorrow(){
	let date = new Date();
	
	let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
	
	let sec = (date2 - date) / 1000;
	
	return Math.round(sec);
	
}

function getSecondsToTomorrow2() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}

console.log(getSecondsToTomorrow());

//------------------------------------

function formatDate(date){
	let diff_sec = (new Date() - date) / 1000;
	
	if (diff_sec > 3600){
		// "DD.MM.YY HH:mm"
		
		let dayOfMonth = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let hour = date.getHours();
		let minutes = date.getMinutes();
		let diffMs = new Date() - date;
		let diffSec = Math.round(diffMs / 1000);
		let diffMin = diffSec / 60;
		let diffHour = diffMin / 60;

		// форматирование
		year = year.toString().slice(-2);
		month = month < 10 ? '0' + month : month;
		dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
		hour = hour < 10 ? '0' + hour : hour;
		minutes = minutes < 10 ? '0' + minutes : minutes;		
		
		return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
		//return date;
		
	}else if(diff_sec > 60){
		
		let minutes = Math.round(diff_sec / 60 - 0.5);
		
		return `${minutes} минут назад.`;
		
	}else if(diff_sec > 1){
		
		let sec = Math.round(diff_sec - 0.5);
		
		return `${sec} секунд назад.`;
		
	}else{
		return 'Прямо сейчас';
	}
	
	console.log(diff_sec);
	
}

//formatDate(new Date(new Date - 30 * 1000));

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );


console.log((new Date).toISOString());


