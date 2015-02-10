var nums = [5, 20, 50];

//================================================
// _.map(list, iteratee, [context])
// iteratee => each element in an array
// function(iteratee) 
// function(value, key, list) => if list is an object
//================================================
var doubler = function(nums) {
 	return nums * 2;
}

// underscore get each element in nums array and pass to dubler
console.log('_.map: ', _.map(nums, doubler));

//================================================
// _.reduce(list, iteratee, [memo], [context]) 
// memo => store the result of completed elements
//================================================

// Given a string, like 'Node Package Manager',
// using reduce, create an acronym builder that will
// return 'N.P.M.'

var strTest = "Node Package Manager";
// conver string to array
var strArray = strTest.split(" ");

var getFirstLetter = function(memo, str) {
	//console.log(memo);
	return memo + str[0].toUpperCase() + '.';
};

console.log("_.reduce: ", _.reduce(strArray, getFirstLetter, '')); 

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);

//================================================
// _.find(list, predicate, [contect])
//================================================

var people = [
	{
		name: 'Raphael',
		id: 123
	},
	{
		name: 'Chris',
		id:456
	},
	{
		name: 'Sean',
		id: 789
	}
];

var findPerson = function(person) {
	//console.log(person);
	return person.id === 456;
}

var findPerson = _.find(people, findPerson);
console.log("_.find: ", findPerson.name);

//================================================
// _.find(list, predicate, [contect])
// closure: function return function
//================================================

var makePersonFinder = function(personId) {
	return function(person) {
		return person.id === personId;
	}
}

var foundPerson = _.find(people, makePersonFinder(456));
console.log("_.find: ", foundPerson.name);

//================================================
// _.pluck(list, propertyName)
//================================================

console.log("_.pluck: ", _.pluck(people, 'name'));

//================================================
// _.shuffle(list)
//================================================

var cards = ['Ace', 'Queen', 'King', 'Jack', '10','9'];
console.log("_.shuffle:", _.shuffle(cards));

//================================================
// start with _.chain(array) and end with .value()
//================================================
var shuffledCards = _.chain(cards)
	.shuffle()
	.shuffle()
	.shuffle()
	.map(function(card){return card.toUpperCase();})
	.value();
console.log('_.chain:', shuffledCards);


//================================================
// _.uniq(array, [isSorted], [iteratee])
// remove duplicate
//================================================
var items = [1,2,3,1,3,5];
console.log("_.uniq: ", _.uniq(items));

//================================================
// _.uniqId
//================================================
// var names = ['Chris', 'Raphael', 'Raine'];

// console.log(_.map(names,function(name){
// 	return {
// 		name: name,
// 		id: _.uniqueId('person_')
// 	};
// }));


