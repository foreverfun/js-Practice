// Date: 01/26
// Loop Practice #2

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

/*
rat
cat
butterfly
marmot
*/
var selectAnimals = function(str){
	for(var i=0; i<animals.length;i++) {
  		if (animals[i] !== str) {
  			console.log(animals[i]);
  			//document.write(animals[i]+ "<br/>");
  		}
 	} 
}

selectAnimals("ocelot");

//document.write("<br/><br/>");

/*
rat
butterfly
ocelot
*/

var selectOddAnimals = function(){
	for(var i=0; i<animals.length;i++) {
		if (i%2 === 0) {
  				console.log(animals[i]);
  				//document.write(animals[i]+ "<br/>");
  			}
  	}
}

selectOddAnimals();

//document.write("<br/><br/>");

/*
ocelot
marmot
butterfly
cat
rat
*/

//console.log(animals);

reverseAnimals = animals.reverse();
for (var i=0; i< reverseAnimals.length; i++) {
	console.log(reverseAnimals[i]);
	//document.write(reverseAnimals[i] + "<br/>");
}
//document.write("<br/><br/>");
/*
rat
cat
cat
butterfly
butterfly
marmot
marmot
ocelot
*/

animals.reverse();

var duplicateAnimals = function() {
	for (var i=0; i<animals.length; i++) {
		console.log(animals[i]);
		//document.write(animals[i]+"<br/>");
		if (i === 0) {
		} else if (i===animals.length-1) {
		} else {
			//document.write(animals[i] + " <br/>");
			console.log(animals[i]);
		}
	}
}

duplicateAnimals();