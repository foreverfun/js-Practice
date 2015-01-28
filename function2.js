// Date: 01/26
// Version 2.00

//======================================================================= 
// Write a function called 'getName' which takes a single object argument and 
// returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

var getName = function(argObj) {
    for (var key in argObj) {
        if (key === "name")
            return argObj[key];
    }
}

console.log(getName({ name: 'Luisa', age: 25 }));

//======================================================================= 
// Write a function called 'printObject' which takes a single object argument 
// and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 }) should print:
// a is 10
// b is 20
// c is 30
// printObject({ firstName: 'pork', lastName: 'chops' }) should print:
// firstName is pork
// lastName is chops

var printObject = function(objArg) {
    for (var key in objArg) {
        console.log( key + " is " + objArg[key]);
    }
}
console.log(printObject({ firstName: 'pork', lastName: 'chops' }));


//======================================================================= 
// functions for arrays: map, filter, reduce, foreach, sort
//======================================================================= 
// Play with Map function
var cap = function(s) {
   var firstLetter = s[0];
   var rest = s.slice(1);
   return firstLetter.toUpperCase() + rest;
};

var names = ['tj', 'dominic', 'sindre', 'addy', 'isaac'];
console.log(names.map(cap).join(', ')); 

//======================================================================= 
// Write a function called 'totalLetters' which takes an array of strings and 
// returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

// 1. via for loop
var totalLetters = function(strArray) {
    var resultLength = 0;
    for (var i=0; i<strArray.length; i++) {
        resultLength += strArray[i].length;
    }
    return resultLength;
}

console.log("for: totalLetters: ", totalLetters(['javascript', 'is', 'awesome']));
console.log("for: totalLetters: ", totalLetters(['what', 'happened', 'to', 'my', 'function']));

// 2. via map()
var countLength = function(s) {
    return s.length;
}

var strTemp1 = ['javascript', 'is', 'awesome'];
console.log("eval, map, join: ", eval(strTemp1.map(countLength).join("+")));
var strTemp2 = ['what', 'happened', 'to', 'my', 'function'];
console.log("eval, map, join: ", eval(strTemp2.map(countLength).join("+")));

// 3. via map() & reduce()
var add = function(a,b) {
    return a + b;
}

console.log("map, reduce: ", strTemp1.map(countLength).reduce(add));
console.log("map, reduce: ", strTemp2.map(countLength).reduce(add));

//======================================================================= 
// Write a function called 'keyValue' which takes two arguments and returns an object 
// with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}

var keyValue = function(arg1, arg2) {
    console.log("arg1: ",arg1);
    console.log("arg2: ",arg2);
    var obj = {};
    obj[arg1] = arg2;
    return obj;
}

console.log("keyValue: ", keyValue('city','Denver'));

//======================================================================= 
// Write a function called 'removeM' which takes a single string argument 
// and removes all 'm' characters from the string. The function should 
// return the new string.
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

// 1. via for loop
var removeM = function(strArg) {
    var tempStr ="";
    for (var i=0; i<strArg.length; i++) {
    	if (strArg[i] !== 'm') {
    		tempStr += strArg[i]
    	}
    }
    return tempStr;
}

console.log("for: family => faily: ", removeM('family'));
console.log("for: memory => eory: ", removeM('memory'));

// 2. via map join
var strArg1 = "family";
var arrayArg1 = strArg1.split("");

var strArg2 = "memory";
var arrayArg2 = strArg2.split("");

var checkALetter = function(aLetter) {
	if (aLetter !== 'm')
	return aLetter;
}

console.log("map, join: ", arrayArg1.map(checkALetter).join(""));
console.log("map, join: ", arrayArg2.map(checkALetter).join(""));

//======================================================================= 
// Write a function called 'vowels' which takes a string and returns an array of 
// all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What lets in youth?') should return ['a', 'e', 'i', 'o', 'u']

// via loop
var vowel = function(strArg) {
    var tempStr = [];
    var j=0;
    for (var i=0; i<strArg.length; i++) {
        if ((strArg[i] === "a") || (strArg[i] === "e") || (strArg[i] === "i") || (strArg[i] === "o") || (strArg[i] === "u")) {
            tempStr[j] = strArg[i];
            j++;
        }
    }
    //console.log(tempStr.toString());
    return tempStr;
}
console.log(vowel('alabama'));
console.log(vowel('What lets in youth?'));

// via filter
var strArg1 = "alabama";
var arrayArg1 = strArg1.split("");

var strArg2 = "What lets in youth?"
var arrayArg2 = strArg2.split("");

var vowelFilter = function(element) {
    if ((element === 'a') || (element === 'e') || (element === "i") || (element === "o") || (element === "u")) {
        //console.log("element: ", element);
        return true;
    }
    return false;
}

console.log(arrayArg1.filter(vowelFilter));
console.log(arrayArg2.filter(vowelFilter));

//=======================================================================
// Write a function called 'twins' which takes an array and returns true if every 
// pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', 'b']) should return false
// twins(['a', 'a', 'b', undefined]) should return false

// via for loop
var groupArray = function(arrayArg) {
    var resultArray=[];
    for (var i=0, j=0; i<arrayArg.length; i=i+2, j++) {
        if (arrayArg[i] === arrayArg[i+1]) {
            resultArray[j] = true;
            //console.log(arrayArg[i] + arrayArg[i+1]);
        } else {
            //console.log(arrayArg[i] + arrayArg[i+1]);
            resultArray[j] = false;
        }
    } 
    return resultArray;
}

var twins = function(arrayArg) {
    for (var k=0; k<arrayArg.length; k++) {
        //console.log(arrayArg) 
        if (!arrayArg[k]) {
            return false;
        }
    }
    return true;
}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', 'b']));
console.log(twins(['a', 'a', 'b', undefined]));

// via reduce
// var testArray1 = ['a', 'a', 'b', 'b', 'c', 'c'];
// var testArray1 = ['a', 'a', 'b', 'z'];
// var testArray2 = groupArray(testArray1);
// console.log(testArray2);
// var result = testArray2.reduce(function(element){
//     return 
// });
// console.log(result);

// var result = testArray1.reduce(function(total, elem){
//         console.log('total:', total);
//         console.log('elem:', elem);

//         return total === elem;
//     }, 0);
// console.log(result);

//======================================================================= 
// Write a function called 'or' which takes an array of booleans and returns true if 
// any one of them is true. Given an empty array, return false. If you find an item 
// that is true, the function should return true immediately and not continue checking 
// further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false

//======================================================================= 
// Write a function called 'unique' which takes an array of strings, and returns a new array 
// consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']

//======================================================================= 
// Write a function called 'negativeIndex' which takes an array and a negative number, 
// and returns the value from the array at the given negative index, as if the array was 
// circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

