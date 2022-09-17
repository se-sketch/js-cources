'use strict';

// Access-Control-Allow-Origin 


//ukrposhta.ua/address-classifier/get_city_by_region_id_and_district_id_and_city_ua?district_id=&region_id=&city_ua=первомайс
//ukrposhta.ua/address-classifier/get_city_by_region_id_and_district_id_and_city_ua


/*
let url = 'https://habr.com/ru/post/245145/';


//let url = 'ukrposhta.ua/address-classifier/get_city_by_region_id_and_district_id_and_city_ua';

var req = new XMLHttpRequest();
//req.open("GET", "example/data.txt", false);
req.open("GET", url, false);
req.send(null);
console.log(req.responseText);
// → This is the content of data.txt
*/

//-----

/*
function backgroundReadFile(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.addEventListener("load", function() {
    if (req.status < 400)
      callback(req.responseText);
  });
  req.send(null);
}
*/
//----
function getURL(url, callback) {
  var req = new XMLHttpRequest();
  
  req.open("GET", url, true);

  //req.setRequestHeader('Accept', 'text/plain');  
  //req.setRequestHeader('Accept', 'text/html');
  req.setRequestHeader('Accept', 'application/json');
  //req.setRequestHeader('Accept', 'application/rainbows+unicorns');


  req.addEventListener("load", function() {
    if (req.status < 400)
      callback(req.responseText);
    else
      callback(null, new Error("Request failed: " + req.statusText));
  });
  req.addEventListener("error", function() {
      callback(null, new Error("Network error"));
  });
  req.send(null);
}

//--------

let url = 'https://eloquentjavascript.net/author';

getURL(url, function(responseText, err){
  if (err) {
    throw err;
  }

  console.log(responseText);
});



//--------
/*
function all(promises) {
  return new Promise(function(success, fail) {
    // Ваш код.
  });
}

// Проверочный код.
all([]).then(function(array) {
  console.log("Это должен быть []:", array);
});
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("Это должен быть [1, 2, 3]:", array);
});
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("бабах"));
  });
}
all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("Сюда мы попасть не должны ");
}, function(error) {
  if (error.message != "бабах")
    console.log("Неожиданный облом:", error);
});
*/
//--------

//--------

//--------


