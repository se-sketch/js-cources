 "use strict";
 
function printNumbers(from, to){

	let curr = from;
	
	setTimeout(function go(){
		
		console.log(curr);
		
		if (curr < to){
			curr++;
			setTimeout(go, 1000);
		}
		
	}, 1000);
}

function printNumbers_interval(from, to){

	let curr = from;
	
	let timerId = setInterval(function (){
		
		console.log(curr);
		
		if (curr < to){
			curr++;
		}else{
			clearInterval(timerId);
		}
		
	}, 1000);
}

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
//setInterval
//setTimeout
 
//printNumbers(5, 13);

printNumbers_interval(5, 13);
