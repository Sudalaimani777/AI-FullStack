//Basic Data Types :-
//String :-
let userName = "Sudalaimani Kannan"; //Now the TS will no longer infering the variable because now it already knows the variable holds the string data type that's because we explicitely declared.
// userName = 23 //Throws an error, we need only re-assign with the mentioned data type
userName = "Arun";
//Number :-
let favouriteNumber = 7;
console.log(favouriteNumber);
// We can specify the data type that is present in the function paramenter :-
const greetUser = (user) => `Welcome ${user}`;
// console.log(greetUser(4)) //Return error
console.log(greetUser("Sudalaimani Kannan"));
const sum = (a, b) => a + b;
console.log(sum(5, 2));
//Boolean :-
let isLogin = true;
// Null -> (Intentionally empty value)
let userFavoiriteFood = null;
console.log(userFavoiriteFood);
// Undefined :- (Value Not Assigned)
let value = undefined;
//any -> (accepts all kinda data types) :-
let userFavoirite = "Cricket";
console.log(userFavoirite);
//unknown: Safer version of any.
let isActive = "Yes";
if (typeof isActive === "string")
    console.log(isActive);
// Union :- Allows multipe data type which is specified
let id = "1";
console.log(id);
export {};
