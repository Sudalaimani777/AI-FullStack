const div = document.querySelector("div");

const loadAllEvent = () => {
    div.addEventListener("click", eventDelegation);
}
loadAllEvent()

function eventDelegation(e){
    console.log(e.target); // to know which element triggered the event
    console.log(e.target.parentElement); // to know the parent of the element which triggered the event
    console.log(e.target.classList); // to know the class list of the element which triggered the event
    console.log(e.target.tagName); //to know the targetted element tag name.
    console.log(e.target.children); // to know the children of the element which triggered the event
    console.log(e.target.textContent);
    if(e.target.textContent === "Check") alert("You clicked on Check button");
}   