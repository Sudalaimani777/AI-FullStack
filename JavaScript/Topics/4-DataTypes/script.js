//1) Primitive Data Types:-

//String :-
const name = "Sudalaimani";
console.log(`The String is the collection of characters which is grouped in the quotes and in the keyword called "name" consist with the value of ${name} with the type of ${typeof name}`);

//Number :-
const luckyNumber = 7;
console.log(`The String is the collection of characters which is grouped in the without quotes.Instead of number if it was an string without quotes it throws an error. In the keyword called "luckyNumber" consist with the value of ${luckyNumber} with the type of ${typeof luckyNumber}`);

//Boolean :-
// const true = true; - Throws an error because the keyword named as "true" is a reserved word
// const false = fasle; - Throws an error because the keyword named as "false is a reserved word
const truthy = true;
console.log(`The truthy value is ${truthy} with the type of ${typeof truthy}`);
const falsy = false;
console.log(`The falsy value is ${falsy} with the type of ${typeof falsy}`);

//Null :-
const nullValue = null;
console.log(`The value of null is ${nullValue}`);
console.log(`The type of nullValue is ${typeof nullValue}`);

//Undefined :-
// let isApproved = undefined;
let isApproved;
//We cannot define the undefined explicitely.Instead of that just declare the variable without declare it into undefined.Also don't use the const keyword to define the variable it into undefined.
console.log(`The value of isApproved is ${isApproved}`);
console.log(`The type of isApproved is ${typeof isApproved}`);

//2) Non-Primitive DataType or (Reference Type) :-

//Array :-
const fruits = ["Apple", "Orange", "Grapes", "Mango"];
console.log(`For Accessing the particular value in the array use its index value`);
console.log(fruits);
console.log(`Accessing the first value in the fruits variable ${fruits[0]}.`);
console.log(`To checking the total length of the array use .length method to check the length.The fruits has ${fruits.length} items.`);

//Add Element to the last of the Array (Push) :-
console.log(`Before pushing ${fruits}`);
fruits.push("Watermelon");
console.log(`After pushing ${fruits}`);

//Add Element to the first of the Array (unShift) :-
console.log(`Before Adding the element to the first in the array ${fruits}`);
fruits.unshift("Cherry");
console.log(`After Adding the element to the first in the array ${fruits}`);

//Remove the last element in the array (Pop) :-
console.log(`Before removing the last element in the array ${fruits}`);
fruits.pop();
console.log(`After removing the last element in the array ${fruits}`);

//Removing the first element in the array (shift) :-
console.log(`Before Removing the first element to the first in the array ${fruits}`);
fruits.shift();
console.log(`After Removing the first element to the first in the array ${fruits}`);

//Objects :-
const userData = {
    firstName: "K.Sudalai",
    lastName: "mani",
    age: 22,
    address: {
        doorNo: "19/4",
        street: "East Street",
        city: "Ettaiyapuram",
    },
    hobbies: [
        "Studying",
        "Drawing",
        {
            games: {
                inDoorGames: "FreeFire",
                outDoorGames: "Cricket"
            }
        }
    ]
}
console.log(userData);
console.log(userData.hobbies[2].games.inDoorGames);