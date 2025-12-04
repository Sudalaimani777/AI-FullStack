//It is a action that occured in the web change :-
const taskTitle = document.querySelector("#task-title");
let count = 0

//Changing the text content in the task title to count state :-
taskTitle.textContent = count;

const clearTask = document.querySelector(".clear-tasks");
clearTask.addEventListener("click", (e) => {
    taskTitle.textContent = 0;
    console.log("The event is ", e);
    console.log("The clear task button was clicked successfully")
});

//We can also create the function "e" outside the events :-
const toggleButton = document.querySelector(".toggle");

toggleButton.addEventListener("click", afterToggle); //Calling the function

function afterToggle(e) {
    console.log("Calling the function afterToggle successfully completed");
    count += 1;
    taskTitle.textContent = count;
    console.log(count);
}