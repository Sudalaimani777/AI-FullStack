//There are two main events in js such as "Keyboard and mouse events" to interact with the web application.
//Event -> It is a action or an occurance that happen in the browser 


const clearButton = document.querySelector(".clear-tasks");

// clearButton.addEventListener("click", e => {
//     console.log("Checking the targeted DOM element using 'target' ->", e.target);
//     console.log("Checking the type of the event using the 'type' is -> ", e.type )
// });

//Click Events :-

//Single Cilck :-
// clearButton.addEventListener("click", clearTask); //Mostly used

//Double Click :-
// clearButton.addEventListener("dblclick", clearTask);

//Mouse Events :-

//Mouse Down :-
// clearButton.addEventListener("mousedown", clearTask); //Similar to the click event.

//Mouse Up :-
// clearButton.addEventListener("mouseup", clearTask); //Triggers when the user hands comes to the normal position while clicking the button

//Mouse Enter :-
// clearButton.addEventListener("mouseenter", clearTask); //Trigges when the user enters the event using the mouse.

//Mouse Leave :-
clearButton.addEventListener("mouseleave", clearTask);

function clearTask(e){
    e.preventDefault();
    console.log(e.type);
}