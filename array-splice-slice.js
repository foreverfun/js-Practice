
// objective: array splice vs. array slice

// The splice(arg1, arg2, arg3) method adds/removes items to/from 
// an array
// arg1: index starting at 0
// arg2: how many items to be removed, 0 means no item
// arg3: optional, items to be added
// returns: the removed item(s)


var testFruits = ["Banana", "Orange", "Apple", "Mango"];

// Before Modified Array: Banana,Orange,Lemon,Kiwi,Apple,Mango 
// Modified Array: Banana,Orange,Lemon,Kiwi,Apple,Mango
// Removed Item: none
console.log("array => testFruits:", testFruits);
var removed1 = testFruits.splice(2, 0, "Lemon", "Kiwi"); 
console.log("array => testFruits:", testFruits);
console.log("array => removed: ", removed1);

// Before Modified Array: Banana, Orange, Lemon, Kiwi, Apple, Mango
// Modified Array: Banana, Orange, Watermenlon, Cherry, Kiwi, Apple, Mango
// Removed Item: Lemon
console.log("array => testFruits:", testFruits);
var removed2 = testFruits.splice(2, 1, "Watermenlon", "Cherry"); 
console.log("modified array => testFruits:", testFruits);
console.log("compare current vs modified array => removed: ", removed2);

// Before Modified Array: angel, clown, drum, mandarin, surgeon
// Modified Array: angel, gold, mandarin, surgeon
// Removed Item: clown, drum
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'surgeon'];
console.log("myFish:", myFish);
var removed3 = myFish.splice(1, 2, 'gold');
console.log("modified myFish:", myFish);
console.log("removed item:", removed3);


// slice
// The slice(arg1, arg2) method extracts elements from an array 
// and form a new array object
// arg1: starting index, 
//      + index: 0, 1, 2, 3, 4 & -index: -5, -4, -3, -2, -1
// arg2: optional, end position, 
//      from beginning 1st element is 1 & from end 1st element is -1
// returns: the selected elements in a new array

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Result => Orange,Lemon
var citrus = fruits.slice(1, 3); 
console.log("original array => fruits: ", fruits);
console.log("new array => citrus: ", citrus);

// Result => Lemon, Apple
var myFruits1 = fruits.slice(-3, -1);
console.log("myFruits1: ", myFruits1);

// Result => Orange, Lemon
var myFruits2 = fruits.slice(-4, -2);
console.log("myFruits2: ", myFruits2);