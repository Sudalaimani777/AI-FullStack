// Topic 13: Functions - placeholder script

// Add your practice code here.
//Task 1: Declare and invoke function declarations

//Function Declaration :- (Creating a Function)
function add(a, b) {
    console.log(a + b);
}

//Function Invocation :- (Calling a function) 
add(10, 20);

//Task 2: Use function expressions and arrow functions :-

//Function Expression :-
// Anonymous Function Expression
const addition = function (a, b) {
    console.log(`This is the anonymous function of addition ${a + b}`);
}
addition(100, 200);

// Named Function Expression (less common for direct invocation)
const minus = function sub(a, b) {
    console.log(`This is the Named Function Expression ${a - b}`);
}
minus(10, 20); //Gives the output 
//sub(20, 10); //Throws an error

//Task 3: Practice passing arguments and returning values:-
const fullName = (fName, lName) => console.log(`The user's full name is ${fName + lName}`);
fullName("Arul", "Thangam");

//Task 4: Demonstrate default parameters and rest parameters:-

//Default Parameter :-
const userName = (name = "Sudalali") => console.log(`The user name is ${name}`);
//We can also modify the default parameter while in the invocation section
userName("Deva");

//Rest Parameter :-
const userData = (name, age, ...details) => console.log(name, age, details);
userData("Sudalai", 21, 1, 3, 4, 4645645);

//Task 5: Create higher-order functions (functions that return/functions) :-
//A function which takes the anothe function as an Arguement and also returns the another function is called as Higher Order Function

//Normal Method :-
const radius = [1, 2, 3, 4];
const calculateArea = (radius) => {
    const store = [];
    for (let i = 0; i <= radius.length; i++) {
        store.push(Math.PI * radius[i] * radius[i]);
    }
    return store;
}
console.log(calculateArea(radius));

//Calculate Circumfernce :-
const calculateCicrumference = (circumference) => {
    const circStore = [];
    for (let i = 0; i <= circumference.length; i++) {
        circStore.push(2 * Math.PI * circumference[i]);
    }
    return circStore;
}
console.log(calculateCicrumference(radius));

//Calculate Diameter :-
const calculateDiameter = (diameter) => {
    const diaStore = [];
    for (let i = 0; i <= diameter.length; i++) {
        diaStore.push(2 * diameter[i]);
    }
    return diaStore;
}
console.log(calculateDiameter(radius));

//Using Higher Order Function to do the same task :-
//For area :-
function area(radius) {
    console.log(Math.PI * radius * radius);
}

//For Circumference :-
function circumference(radius) {
    console.log(Math.PI * radius * radius)
}

//For Diameter :-
function diameter(radius) {
    console.log(2 * radius);
}

//Whole Calculation logic :-
const calculate = (arr, logic) => {
    let store = [];
    for (let i = 0 ; i <= arr.length ; i++){
        store.push(logic(arr[i]));
    }
    return store;
}
calculate(radius, area);
calculate(radius, diameter);