var userWord = prompt("Enter a word?", "Enter here");
//alert("You entered: " + userWord);

//var userWord = "verbatim";
document.write("You entered: " + userWord + "<br/>");
document.write("There are " + userWord.length + " characters in the word.<br/>");
document.write("The third character is '" + userWord.charAt(2) + "'<br/>");
document.write("Lowercase: " + userWord.toLowerCase() + "<br/>");
document.write("Uppercase: " + userWord.toUpperCase() + "<br/>");
document.write("I have wanted a " + userWord + " since I was a little boy.<br/>");
document.write("Subword: " + userWord.substring(1, 4));


