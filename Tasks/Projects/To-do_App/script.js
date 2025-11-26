//Form :-
const taskForm = document.querySelector("#task-form");
//Clear Button :-
const clearTaskButton = document.querySelector(".clear-tasks");
//UL :-
const listContainer = document.querySelector(".collection");
//Input Field :-
const inputField = document.querySelector("#task");
//Filter the task :-
const filterTask = document.querySelector("#search");

//Load All Events :-
function loadAllEvent() {
    //Load if the task is present in the local storage :-
    document.addEventListener("DOMContentLoaded", loadTask);
    //Add Task Event :-
    taskForm.addEventListener("submit", addTask);
    //Clear All Task Event :-
    clearTaskButton.addEventListener("click", clearTask);
    //Clear Particular Task :-
    listContainer.addEventListener("click", removeTask);
    //Filter the task :-
    filterTask.addEventListener("keyup", filterTasks);
}
loadAllEvent();

//Load Task :-
function loadTask(e) {
    let taskContainer = [];
    if (localStorage.getItem("tasks") === null) {
        taskContainer = [];
    }
    else {
        taskContainer = JSON.parse(localStorage.getItem("tasks"));
    }
    taskContainer.forEach((storedTask) => {
        //Creating the LI :-
        const li = document.createElement("li");
        li.className = "collection-item";
        li.innerText = storedTask;
        //Creating the Link :-
        const link = document.createElement("a");
        link.href = "#";
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //Appending the Link to the LI :-
        li.appendChild(link);
        //Append the Li to the list container  :-
        listContainer.appendChild(li);
    })
}

//Filler Tasks Function :-
function filterTasks(e) {
    //Getting the input field:-
    const filterTask = e.target.value.toLowerCase();

    //Getting the list collection :-
    document.querySelectorAll(".collection-item").forEach((taskToFilter) => {
        console.log(taskToFilter);
        const item = taskToFilter.innerText.toLowerCase();
        if (item.indexOf(filterTask) != -1) {
            taskToFilter.style.display = "block";
        } else {
            taskToFilter.style.display = "none";
        }
    })
}

//Add Task Function :-
function addTask(e) {
    e.preventDefault();
    //Condition if the user clicks the task with an empty data (task).
    if (inputField.value === "") {
        alert("Enter a valid task");
    }
    else {
        //Creating the LI :-
        const li = document.createElement("li");
        li.className = "collection-item";
        li.innerText = inputField.value;
        //Creating the Link :-
        const link = document.createElement("a");
        link.href = "#";
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //Appending the Link to the LI :-
        li.appendChild(link);
        //Append the Li to the list container  :-
        listContainer.appendChild(li);
        //Store the Task :-
        storeTask(inputField.value);
        inputField.value = "";
    }
};

//Clear Task Function :-
function clearTask() {
    // listContainer.innerHTML = "";
    const listItem = Array.from(listContainer.children);
    console.log(listItem);
    listItem.forEach((element) => element.remove());
    clearAllTaskFromLocalStorage();
};

//Remove Task Function :-
function removeTask(e) {
    console.log(e.target.parentElement.classList.contains("delete-item"));
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure to remove the task ?")) {
            e.target.parentElement.parentElement.remove();
        }
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
};

//Remove Task from the local storage :-
function removeTaskFromLocalStorage(taskToRemove) {
    let taskContainer;
    if (localStorage.getItem("tasks") === null) {
        taskContainer = [];
    }
    else {
        taskContainer = JSON.parse(localStorage.getItem("tasks"));
    }
    taskContainer.forEach((task, taskIndex) => {
        console.log("Task", task);
        console.log("Task index", taskIndex);
        if (taskToRemove.innerText === task) {
            taskContainer.splice(taskIndex, 1);
        }
        //Updating the local storage :-
        localStorage.setItem("tasks", JSON.stringify(taskContainer));
    })
}

//Clear All task from the local storage:-
function clearAllTaskFromLocalStorage() {
    localStorage.removeItem("tasks");
}

//Local Storage :-
function storeTask(providedTask) {
    let taskContainer = [];
    if (localStorage.getItem("tasks") === null) {
        taskContainer = [];
    } else {
        taskContainer = JSON.parse(localStorage.getItem("tasks"));
    }
    taskContainer.push(providedTask);
    localStorage.setItem("tasks", JSON.stringify(taskContainer));
}
