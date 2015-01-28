// Date: 01/23
// Loop Practice #1

for(var i=0; i<600; i=i+100)
	 console.log(i);

// 1 2 4 8 16 32 64
for (var i=0; i<7; i++) {
	 var result=Math.pow(2,i);
	 	console.log(result);
}

// 1 1 1 2 2 2 3 3 3 
for (var i=1; i<4; i++) {
	console.log(i);
	console.log(i);
	console.log(i);
	/*
	for (var j=0; j<3; j++) {
		//console.log(i);
		//document.write(i);
	}
	*/
}

// 0 2 4 6 8 10
for (var i=0; i<6; i++) {
	var result = i * 2;
	console.log(result);
 }



// 3 6 9 12 15
for (var i=1; i<6; i++) {
	var result = i*3;
	console.log(result);
}

// 9 8 7 6 5 4 3 2 1 0 
for (var i=9; i>=0; i--) {
	console.log(i);
}


// 0 1 2 3 0 1 2 3 0 1 2 3
for (var i=0; i<3; i++) {
	for (var j=0; j<4; j++) {
		console.log(j);
	}
 }
 


