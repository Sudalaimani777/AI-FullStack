//Basic Data Types :-

//String :-
let userName: string = "Sudalaimani Kannan"; //Now the TS will no longer infering the variable because now it already knows the variable holds the string data type that's because we explicitely declared.

// userName = 23 //Throws an error, we need only re-assign with the mentioned data type
userName = "Arun";

//Number :-
let favouriteNumber: number = 7;
console.log(favouriteNumber);

// We can specify the data type that is present in the function paramenter :-
const greetUser = (user: string) => `Welcome ${user}`
// console.log(greetUser(4)) //Return error
console.log(greetUser("Sudalaimani Kannan"));

const sum = (a: number, b: number) => a + b;
console.log(sum(5, 2));

//Boolean :-
let isLogin: boolean = true;

// Null -> (Intentionally empty value)
let userFavoiriteFood: null = null;
console.log(userFavoiriteFood);

// Undefined :- (Value Not Assigned)
let value: undefined = undefined;

//any -> (accepts all kinda data types) :-
let userFavoirite: any = "Cricket";
console.log(userFavoirite);

//unknown: Safer version of any.
let isActive: unknown = "Yes";
if (typeof isActive === "string") console.log(isActive);

// Union :- Allows multipe data type which is specified
let id: string | number = "1";
console.log(id);