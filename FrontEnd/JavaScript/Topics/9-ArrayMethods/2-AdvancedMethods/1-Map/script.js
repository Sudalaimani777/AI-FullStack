// const API_URL = "https://jsonplaceholder.typicode.com/users";

//map() is an array method that creates a NEW ARRAY by calling a provided function on every element in the original array.

//Syntax :-

// const newArray = array.map(callback(element, index, array)); 

//Example :-
const number = [1,2,3,4,5,6];
const squaredNums = number.map(num => num * num); //Retuerns a new array with squared values
console.log(squaredNums); // [1,4,9,16,25,36]

//With Objects :-
const user = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Smith"},
    {firstName: "Emily", lastName: "Johnson"}
]

user.map(user => console.log(user.firstName)); // Logs each first name to the console


//The Second Parameter of the map callback function is the index of the current element being processed in the array 
user.map((user, index) => console.log(`The user name is ${user.firstName} in the index of ${index}`));