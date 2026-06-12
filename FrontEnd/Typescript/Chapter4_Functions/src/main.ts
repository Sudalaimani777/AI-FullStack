// Type Aliases :-
type stringOrNumber = (number | string)[];
type numOrString = number | string;
type onlyNumber = number;

interface userData {
    name: string,
    age?: numOrString
    address?: string,
    hobbies?: stringOrNumber
}

type userId = stringOrNumber;

// Literal Types :- (Used to specify the value that the variable can exaactly holds)
let userName: "Sudalaimani";
// userName = "Varun" //Returns Error, because the variable can only accepts the name Sudalaimani

let userId: "1" | 1;
userId = "1";
console.log(userId)

let directions: "East" | "West" | "North" | "South";
directions = "East";

const moveDirection = (dir: "East" | "West" | "North" | "South") => `Move ${dir}`;
console.log(moveDirection("West"));

// Functions :- with Return
const add = (a: onlyNumber, b: onlyNumber): onlyNumber => a + b;
console.log(add(2, 3))

// Function without return (void) :-
const greetUser = (user: userData): void => {
    console.log(user.name);
}
greetUser({ name: "Sudalaimani" })

//Anonymous Function :-
const subtract = function (c: onlyNumber, d: onlyNumber): onlyNumber {
    return c + d
}
console.log(subtract(16, 5));

// We can also make the type for the similar parameter process function
type calcualtion = (a: onlyNumber, b: onlyNumber) => onlyNumber

const multiplication: calcualtion = (a, b) => a * b
console.log(multiplication(2, 4))

const division: calcualtion = (a, b) => a / b;
console.log(division(6, 2));

// In Anonymous Function
let mul: calcualtion = function (a, b): number {
    return a * b
}
console.log(mul(6, 2));

//We can also do this in Interface :-
interface cal {
    (a: onlyNumber, b: onlyNumber): onlyNumber
}

const addition: cal = (a, b): number => a + b;
console.log(addition(4, 5));

// Anonymous Func :-
const additionFunc: cal = function (a, b): number {
    return a + b;
}
console.log(additionFunc(30, 24));


// Optional Parmeter :- We use ? in the func params to define the params as optional and it is defined as undefined
const addAll = (a: number, b: number, c?: number): number => { //We must use the optional params as the last params in the function
    if (typeof c === "undefined") {
        return a + b
    }
    return a + b + c
}

// Default Params :-
const sumAll = (a: number, b: number, c: number = 4): number => a + b + c;
console.log(sumAll(3, 4)); //If the default params is in the first or the other places except the last, we must pass undefined when we invoke the function

const minusAll = (a: number = 3, b: number = 4, c: number): number => a + b + c
console.log(minusAll(undefined, undefined, 10)); //Because without we use undefined the number 10 is assigned to the first or the respective params.

// Rest Params (Operator):-
const restParams = (...nums: number[]): number => nums.reduce((prev, current) => prev + current, 0);
console.log(restParams(1, 2, 3, 4, 5));