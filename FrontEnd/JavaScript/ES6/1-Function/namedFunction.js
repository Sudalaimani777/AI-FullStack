//Function Declaration Syntax :-
function funcName(parameters) {
    //function body
    return parameters;
}
//Function Call :-
funcName("Arguments Here");

//Example of Named Function :-
function greetUser(user) {
    console.log(`Welcome ${user}`);
}
greetUser('Alice');

//Hoisting Behaviour :-
hoistedFunction(); // This works because of hoisting
function hoistedFunction() {
    console.log("Named Function was call in any places, because it was hoisted in top of its scope");
}

//Named Function Expression :-

// addUserName; // This will throw an error if called before assignment
const addUserName = function (fName, lName) {
    console.log(`User Full Name is: ${fName} ${lName}`);
}
addUserName('John', 'Doe');
//Note: Named Function Expressions are not hoisted like Function Declarations

/**
 * 🎯 Remember:
        Function name = The special word you use to call it
        Parentheses () = Where you put information
        What it gives back = The answer or result you get!
        
        It's like having a robot friend that does a job for you every time you call its name! 🤖
 */