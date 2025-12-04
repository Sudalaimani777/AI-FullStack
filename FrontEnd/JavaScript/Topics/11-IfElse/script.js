let rupees = 100;

// let  condition = 10
// if (condition) {
//     //Do something
// }
// else{
//     //Do something else
// }


//Equal to value
if (rupees >= 100) {
    console.log(`Wow you have 100 or even more!`);
}
else {
    console.log(`Sorry, you don't have mucch amount to enter a canteen`);
}

let value = "100"
//Not equal to value :-
if (rupees !== value) {
    console.log(`You don't have the 1000 rupees`)
}
else {
    console.log(`You have 1000 rupees`);
};

//Strictly not equal to :-
let id = 100;
if (id === "100") {
    console.log(`It has 100`)
}
else {
    console.log(`Not having 100 rupees`);
}

//Test if undefined :-
let greet = "Vanakkam";
greet = "undefined";
if (greet !== "undefined") {
    console.log(`The message - ${greet}`)
}
else {
    console.log(`The variable greet is undefined`);
}

//Greater than or Lesser than :-
if (id >= 1000) {
    console.log(`High`)
}
else {
    console.log(`Low`)
}

if (id <= 1000) {
    console.log(`High`)
}
else {
    console.log(`Low`)
}

//Multiple if-else statement :-
const color = "red";
if (color === "blue") {
    console.log(`The color is blue`)
}
else if (color === "green") {
    console.log(`The color is green`)
}
else if (color === "red") {
    console.log(`The color is red`)
}
else {
    console.log(`The color is white`)
}

//Logical Operator (&& , ||) :-
//AND &&
const a = 10;
const b = 10;

if (a && b === 10) {
    console.log(`Both 'a' and 'b'b are equal`);
}
else console.log(`Both 'a' and 'b' are not equal`);

// OR || :-
const c = 20;
const d = 30;
if (c || d === 20) {
    console.log(`Either one 'c' and 'd' are equal to 20`);
}
else {
    console.log(`Both 'c' and 'd' are not equal`);
}