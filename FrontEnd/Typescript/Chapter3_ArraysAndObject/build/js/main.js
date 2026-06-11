// Arrays :-
// TS will Automatically Infer the types (Implicit)
const arrayWithOnlySting = ["Dhoni", "Kholi", "Rhoit"];
// arrayWithOnlySting[0] = true //Throws an error.
arrayWithOnlySting[0] = "Hayden"; // So, now the TS will only allow the string data type in the arrayWithOnlyString
const animeWithRating = ["Naruto", 10, "onePice", 10]; //This array will only accepts the number and the string data type.Here it acts as a union
// animeWithRating[0] = true //Returns error
// Mixed Data :-
const mixedData = [true, "Hii", { id: 1 }, 2003];
mixedData[1] = "Byee";
// Empty Array Decalaration :-
const emptyArray = []; //The empty array denotes the type of "any", so it accepts all kinda data type
emptyArray.push("Hii");
emptyArray.push(1983);
emptyArray.push(false);
emptyArray.push({ id: 200 });
//Now We decalre what kinda data that the array can hold (Explicit) :-
const arrOnlyStr = [""];
arrOnlyStr.push("Hi Bruh");
// arrOnlyStr.push(true) //Returns False
// We can also specify which position that the data type that can hold
//Tuples are used to perform that job
// Tuple :- (Very Strict Teacher)
const arrWithTuple = ["Dhoni", 7, true];
// arrWithTuple[0] = true //Returns an error, it checks the position aswell as the datatype of that position
arrWithTuple[0] = "Kholi";
//Objects :- (!! Arrays are also an Object);
let myObj;
myObj = [];
myObj = animeWithRating;
const userData = {
    name: "Sudalaimani",
    id: 1,
    isValid: false
};
// userData.name = true //Return Error, because the TS will automatically infer it into the object and assigned only the string data type that should be assingnable in the name key
userData.name = "Varun";
// We cannot add the new property in the Type Alias
// personalDetails.year = [] //Returns Error
const personOne = {
    name: "Sudalaimani Kannan",
    age: "23",
    address: [""]
};
const personTwo = {
    name: "Sudalaimani Kannan",
    age: 23,
    address: ""
};
const greetPerson = {
    name: "Sudalaimani",
    age: 23
};
const greetUserFn = (user) => { var _a; return `Welcome ${(_a = user.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`; };
console.log(greetUserFn(greetPerson));
//Enum :- //In Typescript Enum is a special data type that allows you to define a set of named constants. It provides a way to organize and group related values together, making your code more readable and maintainable. Enums can be numeric or string-based, and they can be used to represent a collection of related values, such as days of the week, months of the year, or in this case, grades.
var grade;
(function (grade) {
    grade[grade["U"] = 1] = "U";
    grade[grade["D"] = 2] = "D";
    grade[grade["C"] = 3] = "C";
    grade[grade["B"] = 4] = "B";
    grade[grade["A"] = 5] = "A";
    grade[grade["O"] = 6] = "O";
})(grade || (grade = {}));
export {};
