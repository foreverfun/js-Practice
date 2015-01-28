//Date:01/20
//Function Practice 1

//alert("main.js");

// =====================================================
// tripleFive
var tripleFive = function() {
	for (var i=0; i<3; i++) {
		console.log("Five!");
		return 1; 
		// if don't return anything, 
		// the return becomes undefined
	}
};

console.log(tripleFive());

// =====================================================
// lastLetter
var lastLetter = function(aString) {
	return aString.charAt(aString.length-1);
};

console.log(lastLetter('hello'));
console.log(lastLetter('island'));

// =====================================================
// square
var square = function(aNum) {
	return aNum * aNum;
};

console.log(square(3));
console.log(square(5));

// =====================================================
// negate
var negate = function(aNum) {
	return -aNum;
};

console.log(negate(5));
console.log(negate(-8));
console.log(negate(0));
console.log(negate(-0));


// =====================================================
// toArray
var toArray = function(num1, num2, num3) {
	return [num1, num2, num3]; 
};

console.log(toArray(1,4,5));
console.log(toArray(8,9,10));

// =====================================================
// startsWithA
var startsWithA = function (aString) {
	return (aString.toLowerCase().charAt(0) === "a") ? true : false;
};

console.log(startsWithA('aardvark'));
console.log(startsWithA('bear'));

// =====================================================
// excite
var excite = function (aString) {
	return aString + "!!!";
};

console.log(excite('yes'));
console.log(excite('no'));

// =====================================================
// sun
var sun = function(aString) {
	var anchorString = "sun";
	return (aString.indexOf(anchorString) >= 0) ? true : false;
};

console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));


// =====================================================
// tiny
var tiny = function(aNum) {
	if ((aNum < 1) && (aNum > 0)) {
		return true;
	} else {
		return false; 
	}
};

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));

// =====================================================
// getSeconds
var getSeconds = function(aString) {
	var secondsArray = aString.split(":");
	return parseInt(secondsArray[0] * 60) + parseInt(secondsArray[1]);
};

console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));
