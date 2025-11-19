//Form :-
const taskForm = document.querySelector("#task-form");
//Input Field :-
const taskInput = document.querySelector("#task");
//UL
const listContainer = document.querySelector(".collection");
//Clear Task Button :-
const clearTaskButton = document.querySelector(".clear-tasks");



//Load All Event :-
function loadAllEvent() {
    //Add Task :-
    taskForm.addEventListener("submit", addTask);
    //Clear All Task :-
    clearTaskButton.addEventListener("click", clearTask);
    //Remove Each Task (Event Delegation) :-
    listContainer.addEventListener("click", removeTask);
}
loadAllEvent();

//Add Task :-
function addTask(e) {
    e.preventDefault();
    if (taskInput.value === "") {
        alert("Please enter the task to submit...")
    }
    else {
        //Creating the LI :-
        const li = document.createElement("li");
        li.className = "collection-item";
        li.innerText = taskInput.value;

        //Creating the Link :-
        const link = document.createElement("a");
        link.href = "#";
        link.className = "delete-item secondary-content";

        //Adding I in the link :-
        link.innerHTML = '<i class="fa fa-remove"></i>'

        //Appending the link to the li :-
        li.appendChild(link);

        //Appending the li to the UL :-
        listContainer.appendChild(li);

        //Clear the typed input field :-
        taskInput.value = "";
    }
}

//Clear Task :-
function clearTask () {
    // listContainer.innerHTML = ""; //Simpler Method
    // const listItem = listContainer.children; //Return the HTML collection so, we need to convert this into the Array
    const listItem = Array.from(listContainer.children); //Now we converted it into the Array (Can use forEach).
    listItem.forEach((element) => {
        element.remove();
    })
}

function removeTask(e){
    // e.target fires when the user clicks the particular element (in this case) .parentElement checks the parent which is 'a'
    // console.log(e.target.parentElement); //Checking


    //The below code works fine but the first list doesn't remove because it has 'test' class in the parentElement "a".So we use the classList for this task.

    // if(e.target.parentElement.className === "delete-item secondary-content"){
    //     if(confirm("Are you sure to remove the task ?")){
    //         // console.log(e.target.parentElement.parentElement); //Checking 
    //         e.target.parentElement.parentElement.remove();
    //     }
    // }

    //Solving the above problem :-
    console.log(e.target.parentElement.classList); //Accessing the DOMTokenList of the class
    console.log(e.target.parentElement.classList.contains("delete-item")); //Returns True or False
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure to remove the task...?")){
            e.target.parentElement.parentElement.remove();
        }
    }

}
