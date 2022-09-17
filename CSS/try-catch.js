'use strict';

/*
try {

  console.log('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  console.log('End of try (never reached)');  // (2)

} catch (err) {

  console.error(`Error has occurred!`); // (3) <--
  console.error(err);

}

//--

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}
*/
//---
/*
let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O
*/
//--
/*
try {
  JSON.parse("{ bad json o_O }");
} catch (err) {
  alert(err.name); // SyntaxError
  alert(err.message); // Unexpected token b in JSON at position 2
}
*/

/*
let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}
*/
//------

/*
let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  alert( user.name );

} catch (err) {

	//console.log(err.name);
	if (err instanceof SyntaxError) {
	   alert( "JSON Error: " + err.message );
	} else {
	    throw err; // rethrow (*)
	}
}

console.log('sldjglsdjgl');
*/
//---

/*
function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (err) {
    // ...
    if (!(err instanceof SyntaxError)) {
      throw err; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (err) {
  alert( "External catch got: " + err ); // caught it!
}
*/

//-------------------------
/*
let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms` );

*/
//-------------------------

 window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
