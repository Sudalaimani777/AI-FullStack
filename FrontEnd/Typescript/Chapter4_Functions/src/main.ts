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
const add = (a:onlyNumber, b:onlyNumber): onlyNumber => a + b;
console.log(add(2,3))

// Function without return (void) :-
const greetUser = (user:userData): void => {
    console.log(user.name);
}
greetUser({name:"Sudalaimani"})