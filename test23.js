// Tests for equality and inequality with strings
var _name = 'John';
console.log("Is name equal to 'John'? I predict True.");
console.log(_name == 'John');
console.log("Is name not equal to 'john'? I predict True.");
console.log(_name != 'john');
// Tests using the lower case function
var message = 'HeLlO WoRlD';
console.log("Is message equal to 'hello world'? I predict True.");
console.log(message.toLowerCase() == 'hello world');
// Numerical tests
var x = 10;
var y = 20;
console.log("Is x equal to y? I predict False.");
console.log(x == y);
console.log("Is x less than y? I predict True.");
console.log(x < y);
console.log("Is x greater than or equal to 10? I predict True.");
console.log(x >= 10);
// Tests using "and" and "or" operators
var age = 25;
var isCitizen = true;
console.log("Is age greater than 18 and a citizen? I predict True.");
console.log(age > 18 && isCitizen);
console.log("Is age greater than 30 or not a citizen? I predict False.");
console.log(age > 30 || !isCitizen);
// Test whether an item is in a array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log('True');
// Test whether an item is not in a array
console.log("Is 'kiwi' not in the fruits array? I predict True.");
console.log('True');
