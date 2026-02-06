// Without stopPropagation :-
const parentDiv = document.querySelector(".parent");
const childDiv = document.querySelector(".child");
// With stopPropagation :-
const withParent = document.querySelector(".wParent");
const withChild = document.querySelector(".wChild");

// Load All Events :-
function loadAllEvents() {
    // Without Stop Propagetion :-
    parentDiv.addEventListener("click", pDiv);
    childDiv.addEventListener("click", cDiv);

    // With Stop Propagation :-
    withParent.addEventListener("click", withStopParent);
    withChild.addEventListener("click", withStopChild);
}
loadAllEvents();

// Parent Div without stopPropagation :-
function pDiv() {
    console.log("1.Parent Div Without Stop Propagetion");
}
// Child Div without stop Propagation :-
function cDiv() {
    console.log("2.Child Div without stop propagetion");
}

function withStopParent() {
    console.log("Parent Using stop Propagation");
}

function withStopChild(e) {
    e.stopPropagation();
    console.log("Child Div with the use of stop propagation");
}