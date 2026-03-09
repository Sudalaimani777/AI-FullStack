//Rest Operator :-
//The rest operator is used to collect multiple elements and condense them into a single element, typically an array and is represented by three dots (...) also for objects as well.

//Rest Operator With Arrays :-
console.log("-------- Rest With Arrays ----------");

const number = [1,2,3,4,5,6];
console.log("This is the array which contains all the numbers in the array -> ", number);
const [numOne, numTwo, ...remainingNumbers] = number;

console.log("Now we seperated some numbers in the array and remaining numbers are stored in the new array whuch is named as remainigNumbers");
console.log("Number One -> ",numOne);
console.log("Number Two -> ",numTwo);
console.log("Remaining Numbers are stored in the remainingNumbers array -> ", remainingNumbers);

// Function Parameters (Variable Arguments):
console.log("---------- Function Parameters (Variable Arguments): ----------");

function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
};
console.log(sum(1,2,3,4,5,6));

//Function :-
function greet(greet, ...user){
    return `${greet}, ${user}`;
}
console.log(greet("Hello!", "Gruu", "Kavi", "Arun", "Mari"));

//Rest With Objects :-

console.log("---------- Rest With Objects ----------");

const person = {
    name : "Gruu",
    age : 25,
    city : "Chennai",
    profession : "Software Engineer"
};
const {name, ...otherDetails} = person;
console.log("Name of the person -> ", name);
console.log("Other details of the person are stored in the otherDetails object -> ", otherDetails);