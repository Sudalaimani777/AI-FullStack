const fruits = ["🍎", "🍇", "🥭", "🍉", "🍍", "🍒", "🍌", "🍑", "🍐", "🍊"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let value;

//Get the Array Length :-
console.log(`-------------------- Getting the Array Length------------------`);
value = fruits.length;
console.log(`The total array length of the fruits is '${value}'`);

//Check if it is a Array :-
console.log(`-------------------- Check if it is Array ------------------`);
value = Array.isArray(fruits);
console.log(`The array fruits is really an array : ${value}`);

const str = "Summa";
value = Array.isArray(str);
console.log(`Is the "str" is really an  array : ${value}`);

//Check the index value :-
console.log(`-------------------- Accessing the index value of the Array ------------------`);
value = fruits[0];
console.log(`The fruits array contains the ${value} as it's first index`);
//If the coder exceeds the index limit :-
console.log(fruits[100]); //Returns "undefined"

//Getting the last index in the array :-
console.log(`-------------------- Getting the last index in the array------------------`);
console.log(fruits.length - 1);

//Find the index of the Array's Element :-
console.log(`-------------------- Finding the index using the respective element data ------------------`);
value = fruits.indexOf("🍊");
console.log(value);

value = fruits.indexOf("Orange"); //Returns -1
console.log(`Returns -1 if it the element is not present : ${value}`);

//Includes :-
console.log(`-------------------- Includes, returns true if the elemant is present and vise versa ------------------`);
value = numbers.includes(3); //True
console.log(`True ${numbers[2]} : ${value}`);

value = numbers.includes(100);
console.log(`False 100 : ${value}`);

//Mutating the Array :-
// Adding the Element last in the array :-
console.log(`-------------------- Adding the element last in the array (push) ------------------`);
value = numbers.push(100);
console.log(numbers);
//Removing the Element last in the array :-
console.log(`-------------------- Removing the element last in the array (pop)------------------`);
value = numbers.pop()
console.log(numbers);

//Adding the Element first in the Array :-
console.log(`-------------------- Adding the element first in the array (unShift) ------------------`);
value = numbers.unshift(200);
console.log(numbers);

//Removes the Element First in the Array :-
console.log(`-------------------- Removing the element first in the array (Shift)------------------`);
value = numbers.shift();
console.log(numbers);

//Slicing :-
console.log(`-------------------- Returns the copy of the array ------------------`);
value = fruits.slice(0, 5);
console.log(value);
console.log(`The method slicing doesn't modify the original Array Original Array - ${fruits}`);

//Splicing :-
console.log(`-------------------- Splicing removes the elment from the starting index where the user selects and the ending index.It also adds the element where we want to remove it  ------------------`);
value = fruits.splice(0, 1, "Apple");
console.log(value);
console.log(`The splice method modifies the original Array -  ${fruits}`);