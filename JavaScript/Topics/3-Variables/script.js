//var :-
var name = "Sudalaimani";
console.log(`Initial var keyword contains the name of ${name}`);
//Re-decalre :-
var name = "Hello";
console.log(`After the var keyword re-declared it contains the name of ${name}`);
//Re-assignable :-
name = "Kumar";
console.log(`After the var keyword re-assigned contains the name of ${name}`);

//Initializing the variable :-
var initialization;
console.log(initialization); //Print undefined

initialization = "Sudalaimani";
console.log(`After the variable "initialization" was declared it holds the data of ${initialization}`);

//Not preferred wasy to create a variable at the beginning :-

// var 1user = "Sudalaimani"; - Throws an error
// var !name = "Sudalaimani" - Throws an error
//Throws as error if the variable name starts with special characters expect $ and _

//Preferred methods :-
let userName; //Most Preferrable.
let $userName;
let _username;
let username;
let user_name;
let USERNAME;
let UserName;

//Let :-
//Initialization:-
let newName;
console.log(newName);
console.log(`Just initializing the let keyword with the name of ${newName}`) //undefined
//Declarization :-
newName = "Sudalaimani";
console.log(`After the declaration of let keyword, it contains ${newName}`);

//Const :-
//Initialization:-
// const fitstName; //Throws and error - Uncaught SyntaxError: Missing initializer in const declaration 
const firstName = "Sudalaimani";
//Declarization :-
// firstName = "Kumar"; // Throws an error - Uncaught TypeError: Assignment to constant variable.
console.log(`Const keyword consist with the value of ${firstName}`);