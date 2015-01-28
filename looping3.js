var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// 1. print out
// 25, 27, 32, 24, 18

var ageString="";
for (var i=0; i<students.length; i++) {
	ageString += students[i].age + ", "
	if (i === students.length-1) {
		ageString = ageString.slice(0, ageString.length-2);
	}
}
console.log(ageString);

// 2. print out
// Liz, Boulder
// Meghan, Denver
// Trent, Boulder
// Chelsea, Boulder
// Amir, Denver

for (var i=0; i<students.length; i++) {
	var nameCityArray = "";
	
	// search the values of name and city in each student
	for (var key in students[i]) {
		if ((key === "name") || (key === "city")) {
			nameCityArray += students[i][key];
			if (key === "name")
				nameCityArray += ", ";	
		}
	}
	console.log(nameCityArray);
}

// 3. print out
// Liz is from Boulder
// Trent is from Boulder
// Chelsea is from Boulder
for (var i=0; i<students.length; i++) {
	var nameCityArray = "";
	
	// search the values of name and city in each student
	for (var key in students[i]) {
		if (students[i]["city"] === "Boulder") {
			console.log(students[i]["name"] + " is from " + students[i]["city"] + "\n");
			break;
		} 
	}
}


// 4. print out
// Meghan is older than 25
// Trent is older than 25
for (var i=0; i<students.length; i++) {
	for (var key in students[i]) {
		if (students[i]["age"] > 25) {
			console.log(students[i]["name"] + " is older than 25" + "\n");
			break;
		} 
	}
}
