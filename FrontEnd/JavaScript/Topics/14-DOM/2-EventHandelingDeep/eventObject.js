const btn = document.createElement("button");
const container = document.querySelector("div");
const clickBtn = document.querySelector("#btn");


btn.textContent = "Click";
document.body.appendChild(btn);

const loadAllEvent = () => {
    btn.addEventListener("click", checkEvent);
    clickBtn.addEventListener("click", showEventObject);
}
loadAllEvent();

function checkEvent(e){
    console.log(e.preventDefault); //Function to prevent default behaviour of the event
    e.stopPropagation(); //Function to stop the event from bubbling up the DOM tree
    console.log("Event Type ->",e.type); //Checking the Event type whether its click, mouseover etc.
    console.log("DOM Element -> ", e.target); //DOM Element that triggered the event
    console.log("Event Timestamp -> ", e.timeStamp); //Time at which the event was created
    console.log("Current Target -> ", e.currentTarget); //DOM Element that is currently handling the event
    console.log("Bubbles -> ", e.bubbles); //Whether the event bubbles up through the DOM or not
    console.log("Client X (Mouse Position X)-> ", e.clientX); //X coordinate of the mouse pointer when the event was triggered
    console.log("Client Y (Mouse Position Y)-> ", e.clientY); //Y coordinate of the mouse pointer when the event was triggered
}

function showEventObject(e){
    container.textContent = `Event type: ${e.type}`;
    container.textContent += `Clicked element: ${e.target.tagName}`;
    container.textContent += `Handler attached to: ${e.currentTarget.tagName}`;
    container.textContent += `Mouse position: (${e.clientX}, ${e.clientY})`;
                            
}