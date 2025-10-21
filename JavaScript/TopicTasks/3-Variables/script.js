// Task 1: Declare variables using var, let, and const
var varKey = "It has a global scope";
console.log(varKey);

let letKey = "This is the block scope";
console.log(letKey);

const constKey = "It is also a block scope where we can't re-assign and decalre";
console.log(constKey);

// Task 2: Show the difference between var and let (re-declaration)
var name;
var name = "Sudalalimani";

let user;
// let user = "Kumar"  //Cannot redeclare block-scoped variable 'user'

// Task 3: Demonstrate re-assignment with var, let, and const
//Var :-
var value = "One";
value = "Two";

//Let :-
let data = 20;
data = 30;

//Const :-
const date = "05/11/2003";
// date = "06/11/2003"; //Throws an error.
// console.log(date); Uncaught TypeError: Assignment to constant variable.

// Task 4: Create examples of undefined variables
let un;
console.log(un);

// Task 5: Practice proper variable naming conventions
const userName = "Sudalaiamani";
const user_age = 22;
const _userHobby = "Playing";