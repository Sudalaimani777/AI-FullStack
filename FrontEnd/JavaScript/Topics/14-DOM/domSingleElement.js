console.log(typeof document);

//Getting the Element by the ID :-
console.log(document.getElementById("section"));

const section = document.getElementById("section");
console.log(section);

//Change :-
section.textContent = "Hello Section";
section.style.color = "red"
console.log(section.style);

section.style.padding = "20px";

//Change Content :-
section.innerText = "Super Bro";
   //Added the HTML element itself :-
section.innerHTML = "<span>Hello Guys</span>";

//New Method (Query Selector) :-
console.log(document.querySelector("#section"));