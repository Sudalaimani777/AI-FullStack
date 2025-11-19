//Keyboard Events :-
const inputField = document.querySelector("#task");

//Key Up :-
// inputField.addEventListener("keyup", validateChar); //Triggers whent the user enters the keyboard button and leaves the another key board button , the first key board character value will be obtained. The key up is very very important (Mostly Used)

//Key Down :-
// inputField.addEventListener("keydown", validateChar); //It takes the Enterd the current value whrere the user currently pressed the keyboard value.

//Key Press :-
// inputField.addEventListener("keypress", validateChar);

//Input :-
// inputField.addEventListener("input", validateChar); //The "input" event is similsr to the "keyup" event.

//Focus :-
// inputField.addEventListener("focus", validateChar); //Triggers when the user enters in the field

//Blur :-
// inputField.addEventListener("blur", validateChar); //Triggers when the user leaves the field, it is the opposite of focus.

//Cut :-
// inputField.addEventListener("cut", validateChar); //Triggers when the user cuts any text or content in the page where the event was occuring.

//Copy :-
// inputField.addEventListener("copy", validateChar); //Triggers when the user copy any text or content in the page where the event was occuring.

//Paste :-
// inputField.addEventListener("paste", validateChar); //Triggers when the user paste any text or content in the page where the event was occuring.

function validateChar(e)  {
    console.log(e.type);
    console.log(inputField.value);
}