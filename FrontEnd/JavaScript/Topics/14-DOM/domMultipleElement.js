//DOM Class :-
//The classSection returns the HTML collection not an element

const classSection = document.getElementsByClassName("section");
console.log(classSection);
// classSection.style.color = "red"; //Retutrns undefined.
classSection[0].style.color = "red";
classSection[1].style.color = "blue";

//Checking the classSection is Array or not :-
console.log(Array.isArray(classSection));

for(let i = 0 ; i < classSection.length ; i++){
    classSection[i].style.color = "green";
}

//Higher Order Function :-
let array = [1, 2, 3, 4, 5, 6, 7];

//Normal Array :-
for(let i = 0; i<= array.length; i++){
    console.log(i);
}

//ForEach :-
//Alternative for classic "for loop" :-
//The forEach takes three paramenter such the "value", "index" and the "original array"
array.forEach(function(value, index, array) {
    console.log(`The value is ${value}, the index is ${index} in the original array of  ${array}`);
});

//The HTML collection is not contains the Array methods

// classSection.forEach((value) => console.log(value)); //Throws an error classSection.forEach is not a function

//Change the HTML collection to Array
let HTMLCollectionToArray = Array.from(classSection);
console.log("Returns the elements in the array - ",HTMLCollectionToArray);

//Now we will use the forEach method in the HTML collection 
HTMLCollectionToArray.forEach((value) => {
    value.style.color = "blue";
});

//Outline :-
/**
 * HTML collection is look like array
 * Behave like an array
 * Act like an array
 * "But not an array"
 */