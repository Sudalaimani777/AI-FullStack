// Literal Types :- (Used to specify the value that the variable can exaactly holds)
let userName;
// userName = "Varun" //Returns Error, because the variable can only accepts the name Sudalaimani
let userId;
userId = "1";
console.log(userId);
let directions;
directions = "East";
const moveDirection = (dir) => `Move ${dir}`;
console.log(moveDirection("West"));
// Functions :- with Return
const add = (a, b) => a + b;
console.log(add(2, 3));
// Function without return (void) :-
const greetUser = (user) => {
    console.log(user.name);
};
greetUser({ name: "Sudalaimani" });
//Anonymous Function :-
const subtract = function (c, d) {
    return c + d;
};
console.log(subtract(16, 5));
const multiplication = (a, b) => a * b;
console.log(multiplication(2, 4));
const division = (a, b) => a / b;
console.log(division(6, 2));
// In Anonymous Function
let mul = function (a, b) {
    return a * b;
};
console.log(mul(6, 2));
const addition = (a, b) => a + b;
console.log(addition(4, 5));
// Anonymous Func :-
const additionFunc = function (a, b) {
    return a + b;
};
console.log(additionFunc(30, 24));
// Optional Parmeter :- We use ? in the func params to define the params as optional and it is defined as undefined
const addAll = (a, b, c) => {
    if (typeof c === "undefined") {
        return a + b;
    }
    return a + b + c;
};
// Default Params :-
const sumAll = (a, b, c = 4) => a + b + c;
console.log(sumAll(3, 4)); //If the default params is in the first or the other places except the last, we must pass undefined when we invoke the function
const minusAll = (a = 3, b = 4, c) => a + b + c;
console.log(minusAll(undefined, undefined, 10)); //Because without we use undefined the number 10 is assigned to the first or the respective params.
// Rest Params (Operator):-
const restParams = (...nums) => nums.reduce((prev, current) => prev + current, 0);
console.log(restParams(1, 2, 3, 4, 5));
export {};
