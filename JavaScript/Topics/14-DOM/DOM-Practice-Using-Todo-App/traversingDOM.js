//Process of Navigating the DOM Tree to access and manipulate elements and their properties.
let traversing;

//Query Selection of class
const list = document.querySelector(".collection");

//We can also use the pseudo class in the query selector
const lastListItem = document.querySelector("li:last-child");

//First Child :-
const firstListItem = document.querySelector("li:first-child");


traversing = list;
//Accessing the list child 
traversing = list.childNodes;

//Accessing the list child index :-
traversing = list.childNodes[10];

//Node Name :-
traversing = list.childNodes[1].nodeName;
traversing = list.childNodes[2].nodeName;

//Node Type :-
traversing = list.childNodes[0].nodeType;

/**
 * 1- Element
 * 3- Text
 * 8- Comment
 */
console.log("UL class -", traversing);

//Get the childern node elements :-
traversing = list.children;
console.log("Node elements in the list -", traversing);

//Traversing the childern node :-
traversing = list.children[0].children[0].children[0];
console.log("Traversing the childern element -", traversing);

//First Child :-
traversing = list.firstChild;
console.log("The first child -", traversing);

//First Element Child :-
traversing =list.firstElementChild.innerHTML;
console.log("First element child -", traversing);

//Last Element Child :-
traversing = list.lastElementChild;
console.log("Last element child -", traversing);

//Child count :-
traversing =list.childElementCount;
console.log("The child elements present in the list is ", traversing);

//Parent Element :-
traversing = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement; //Return null is it exceeds the html document.
console.log("Traversing the parent elemnets in the list ", traversing);

//Last item using the css pseudo class in the query selector
traversing = lastListItem;
console.log("Accessing the last list item last list item ", lastListItem);


//Previous Element Sibbling :-
traversing = lastListItem.previousElementSibling.previousElementSibling;
console.log("Previous Element Sibiling ", traversing);

//Next Eelement Sibilng :-
traversing = firstListItem.nextElementSibling
console.log("Next element sibling ", traversing);