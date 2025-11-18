//Remove Element :-
let val;
//Accessing the first list "li" element in the html document
const list = document.querySelector("li");
// console.log(list)

//Using Remove method to clear the list from the DOM
// list.remove();

//Access all the list elements in the html document :-
const allList = document.querySelectorAll("li");
// console.log(allList); //Returns the node list 

//Removes all the list elements form the html document

// allList.forEach((element) => {
//     element.remove();
// });

//First li :-
const firstListItem = document.querySelector("li:first-child");
console.log(firstListItem);

//Traversing the li to get the like tag "a":-
const link = firstListItem.children[0];
console.log(link);

//Class Name
val = link.className; //Returns string.
console.log("Returns the strings of class name ->", val);

//Class List :-
val = link.classList;
console.log("Returns the DOM Token List of Classes ", val); //Returns the DOM Token List

//Add the class using method "add". Can be only used in the DOM Token List (classList) :-
val.add("sudalai");

//Consoling all the classes in the link :-
val.forEach((classNames) => {
    console.log(classNames)
})

//Remove the class in the link :-
val.remove("sudalai");
val.remove("test");

//Consoling the remaining classes in the lnk :-
console.log("Remaining classes in the link ", val);

//Replace the class name :-
val.replace("delete-item", "mani");
console.log("Modified the class name 'delete-item to -> ", val);

//Toggle method in classList :-
//Used to change the state of the element.

//Toggle button :-
const toggleButton = document.querySelector(".toggle");
console.log(toggleButton);

// toggleButton.addEventListener("click", e => {
//     firstListItem.classList.toggle("add-color");
// })

//Add the color :-
toggleButton.addEventListener("click", e => {
    firstListItem.classList.add("add-color");
    console.log("clicked")
});

//Clear the color :-
const clearTask = document.querySelector(".clear-tasks");
clearTask.addEventListener("click", e => {
    firstListItem.classList.remove("add-color");
    console.log("clicked")
})