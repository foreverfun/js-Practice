//======================================================================= 
// context of function
// call vs. apply => passing different arguments
// call (context, arg1, arg2) 
// apply(context, [element1,element2,...,element N])
// as soon as you call and apply, they are immediately executed
// bind => not called immediately, return function reference
//=======================================================================
	// call
	var myFunction1 = function() {
		console.log('this: ', this);
	}
	myFunction1(); // contect is the window

	var myObj1 = {
		doSomething: myFunction1
	}
	myObj1.doSomething(); // context is an object: myObj

	// call forces the context to be something else
	var anotherObj1 = {
		doNothing:null
	}
	myObj1.doSomething.call(anotherObj1); // context is an object: anotherObj

	//=============================================================
	// call vs apply
	var myFunction = function(arg1, arg2) {
		console.log('this: ', this);
		console.log(arg1, arg2);
	}

	var myObj = {
		doSomething: myFunction
	}
	myObj.doSomething(); // context is an object: myObj

	// call forces the context to be something else
	var anotherObj = {
		doNothing:null
	}
	
	myObj.doSomething.call(anotherObj, 'hi', 'bye');
	myObj.doSomething.apply(anotherObj, ['hi','bye']);
	//=============================================================
	// bind
	newFunction = myObj.doSomething.bind(anotherObj);
	console.log("bind: ", newFunction); // return the reference of function
	newFunction(); // context is anotherObj

});