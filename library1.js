// Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.
// Date: 01/23

var userInput = prompt("Input String: ", "Enter a string");

var letterCapitalize = function(input) {
	var inputArray=input.split(" ");
	var finalResult="";
	
	for (var i=0; i<inputArray.length;i++) {		
		var strWord = inputArray[i];
		var strWordPart2 = strWord.substr(1,strWord.length-1);
		var strWordPart1 = strWord.charAt(0).toUpperCase();
		inputArray[i]=strWordPart1+strWordPart2+" ";
		finalResult += inputArray[i];
	}
	return finalResult;
}

console.log(letterCapitalize(userInput));
document.write("capitalize: " + letterCapitalize(userInput)+"<br/>");

// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.


var wordCount = function(Input) {
	var inputArray=Input.split(" ");
	return inputArray.length;
 }

 document.write("length: " + wordCount(userInput) + "<br/>");


// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.

