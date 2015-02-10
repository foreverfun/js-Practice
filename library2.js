// Date: 01/30

// create a function firstReverse that takes 
// a single string parameter 
// and returns the string in reverse order

var strInput = "this is a test";

var firstReverse = function(strArg) {
    var strReverse="";
    
    // method 1: via for	
    // for (var i=strArg.length-1; i>=0; i--) {
	// 	strReverse += strArg[i];
	// 	//console.log(i, strReverse);
	// }

    // method 2: reverse()
    // strReverse = strArg.split('').reverse().join('');

    // method 3: via map()
    // var strArray = strArg.split('');
    // strArray.map(function(item,i,arr){
    //     //console.log("return: ", arr[arr.length-1-i]);
    //     strReverse += arr[arr.length-1-i];
    //     //console.log(strReverse);
    //     return strReverse;
    // });

    // method 4: via _.map()
    var strArray = strArg.split('');
    _.map(strArray, function(list, iteratee, context) {
        // console.log(list);
        // console.log(iteratee);
        // console.log(context);
        strReverse += context[context.length-1-iteratee];
        return strReverse;
    }); 

    return strReverse;
}

var resultFirstReverse = firstReverse(strInput);
console.log("firstReverse: ", resultFirstReverse)


// method 2: via map

// create a function swapCase that takes 
// a single string parameter and swaps the 
// case of each character. 

var swapCase = function(strArg) {
    var strArray = strArg.split("");
    var strResult = "";

    // method 1: via for
    // for (var i=0; i<strArray.length; i++) {
    //     //console.log(strArray[i]);
    //     if (strArray[i] === strArray[i].toUpperCase()) {
    //         strArray[i] = strArray[i].toLowerCase();
    //         //console.log("===: ", strArray[i]);
    //     }    
    //     else {
    //         strArray[i] = strArray[i].toUpperCase();    
    //         //console.log("!=", strArray[i]);
    //     }
    //     strResult+=strArray[i];
    //     //console.log(strResult);
    // };

    // method 2: via map
    // arr.map(callback[currentValue, index, array], thisArg)
    // callback(currentValue, index, array)
    // thisArg - value to use as this when executing callback

    strArray.map(function(currentValue, i, array){
        // console.log(currentValue);
        // console.log(i);
        // console.log(array);
        if (strArray[i] === strArray[i].toUpperCase()) {
            strArray[i] = strArray[i].toLowerCase();
            //console.log("===: ", strArray[i]);
        }    
        else {
            strArray[i] = strArray[i].toUpperCase();    
            //console.log("!=", strArray[i]);
        }
        strResult+=strArray[i];
        //console.log(strResult);
    })

    // method 3: via _.map
    // _.map(strArray, function(list, i, context){
    //     if (strArray[i] === strArray[i].toUpperCase()) {
    //         strArray[i] = strArray[i].toLowerCase();
    //         //console.log("===: ", strArray[i]);
    //     }    
    //     else {
    //         strArray[i] = strArray[i].toUpperCase();    
    //         //console.log("!=", strArray[i]);
    //     }
    //     strResult+=strArray[i];
    // });

    return strResult;
}

var resultSwapCase = swapCase("Hello World");
console.log("swapCase: ", resultSwapCase);

resultSwapCase = swapCase("test**yyy");
console.log("swapCase: ", resultSwapCase);
