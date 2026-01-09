// filter() is an array method that creates a NEW ARRAY with all elements that PASS a test (return true from the callback function).

//Syntax :-

// const newArr = array.filter(callback(element, index, orgArray)); 

//Returns the new array instead of modifying the original array.
//Create the new which passes the case testes
//Basically it has some conditions to store the specific value in the new array 

const num = [1,2,3,5,6,6];
const evenNums = num.filter(num => num % 2 === 0);
console.log("Original Array -> ", num);
console.log("Only Even Nums Array -> ", evenNums);

//With Objects :-
const users = [
    {userName:"Jhon", age: 20},
    {userName:"Krish", age: 10},
    {userName:"Suganth", age: 16},
]

const onlyAdults = users.filter((minor, index) => minor.age >= 18 ? console.log(minor.userName) : console.log(`No minors in the index of ${index}`));
