// Task 1: Create examples of string, number, and boolean data types
//String :-
const string = "One";
const strTwo = 'Two';
const strThree = `Three`;

//Number :-
const numOne = 1;
const numTwo = 10.3;

//Boolean :-
const trueVal = true;
const falseVal = false;

// Task 2: Demonstrate null and undefined values :-
const defineNull = `Null is an intentional assign of the variable laterly we assign the value`;
const exNull = null;
console.log(exNull);

const defineUndefined = `Undefined is the thing where we just declare the variablre but not assign any value.It only works on the let and var keywords`;;
let exUndefined;
console.log(exUndefined);

// Task 4: Use array methods: push(), pop(), unshift(), shift()
const array = [1, 2, 3, 4, 5, 6];
array.push(7);
array.pop();
array.unshift(10);
array.shift();

// Task 5: Show the difference between primitive and reference types :-
//The primitive types are string, number, boolean. It holds only one data in the variable
const str = "String";
const num = 2;
const trFl = true;

//The reference are the another type of data types which holds  one or many type of multiple data type in a single variable;
const a = [1, "a", true];
const o = {
    name: "S",
    age: 2
}