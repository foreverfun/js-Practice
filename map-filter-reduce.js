//======================================================================= 
// functions for arrays: map, filter, reduce, foreach, sort
// common: map, filter, reduce
// foreach does not return any result
//======================================================================= 


$(document).on('ready',function(){
	
	//map function => 3 inputs = 3 outputs
	
	//var myArray = [1,2,3,4,5];
	var myArray = ['a', 'b', 'c', 'd', 'e'];
	// map(element, i, arr)
	newArray = myArray.map(function(elem, i, arr) {
		console.log("map: ", elem);
		console.log("map: ", i);
		console.log("map: ", arr);
		return elem+10;
	});
	console.log(newArray);

	// nested arrays
	var outerArray = [
		[1,2,3],
		['a','b','c']
	];

	outerArray.map(function(elem){
			elem.map(function(innerElem){
				console.log("innerElm:", innerElem);
			});
	});

	// filter function => 3 inputs = based on conditioning the result 
	// can be 1 output, 2 outputs
	// the callback function can only return true or false due to conditioning 
	// to convert to boolean, use ! => ex. !'h1' => gives u false
	var fullArray = [1, 0, true, false, 'hi', null];
	var filteredArray = fullArray.filter(function(elem){
		if (elem)
			return true;
		else
			return false;
	});
	console.log(filteredArray);
	
	// reduce function => 3 inputs = only 1 output
	// pass the result to the next iteration
	//var fullArray = [2,3,5,7];
	var fullArray= ['2', '3', '5', '7'];
	var result = fullArray.reduce(function(total, elem){
		console.log('total:', total);
		console.log('elem:', elem);
		return total+elem;
	}, 0);
	console.log(result);