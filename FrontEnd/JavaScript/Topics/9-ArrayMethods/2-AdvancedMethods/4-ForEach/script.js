// forEach() is an array method that executes a provided function ONCE for each array element. It is used for SIDE EFFECTS, not for returning values.

//Syntax :-

// const forEachArr = array.forEach(callback(element, index, orgArray)) 

//Not returns the new array
//Not chainable
//Used for sideeffects like updating the DOM 

const num = [1,2,3,4,5,6].forEach(num => console.log(num));

//Using Index Parameter :-
const fruits= ["Apple", "Orange", "Banana", "Grapes","Cherry", "Gauva"].forEach((fruits, index) => console.log(`The fruits in the array are ${fruits} in the index of ${index}`));

//With Objects :-
const users = [
    {userName:"Sudalaimani", age:20},
    {userName:"Arun", age:20}
].forEach(user => console.log(user.userName));

//For each method performs actions but return nothing
//Map method performs actions and return the new Array