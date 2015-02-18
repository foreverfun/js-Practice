// search for all the numbers in the string
// add them together
// return the sum
// 
// ex: 88Hello3World => 91
// ex: 7Test34Fun8 => 49
var addNumbers = function(argStr) {
  var numArray = argStr.split("");
  
  // replace alphabet to empty string
  numArray.map(function(cV, index, array){
    if (isNaN(array[index])) 
      array[index] =" ";
  });
  numArray = numArray.join("").split(" ");
  //console.log(numArray);
  var total = numArray.reduce(function(pV,cV,index, array){
    //console.log(pV);
    //console.log(cV);
    if (isNaN(parseInt(pV))) pV = 0;
    if (isNaN(parseInt(cV))) cV = 0;
    return parseInt(pV) + parseInt(cV);
  });

  return total;
}

console.log(addNumbers('88Hello3World'));
console.log(addNumbers('7Test34Fun8'));