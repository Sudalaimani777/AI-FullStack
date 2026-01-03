//Importing the getUser function from the getUserData.js module :-
import { getUser } from "./getUserData.js";


// import { add, minus, multiple, divide } from "./calculation.js";

//Alisased Import :-
import {add as sum} from "./calculation.js";
import {minus as subtract} from "./calculation.js";
import {multiple as multiply} from "./calculation.js";
import {divide as div} from "./calculation.js";

//Named Import :-

//getUserData module :-
// const userOne = getUser("Sudalaimani");

// //calculation.js module :-
// const addition = add(10,10);
// console.log("Addition -> ", addition);

// const subtraction = minus(20, 10);
// console.log("Subtraction ->", subtraction);

// const multiplication = multiple(2, 4);
// console.log("Multiplication ->", multiplication);

// const division = divide(30, 28);
// console.log("Division ->", division);

//Using Aliased Imports :-
const add = sum(15, 25);
console.log("Addition -> ", add);

const subtract = subtract(50, 20);
console.log("Subtraction ->", subtract);

const multiply = multiply(3, 7);
console.log("Multiplication ->", multiply);

const division = div(100, 4);;
console.log("Division ->", division); 