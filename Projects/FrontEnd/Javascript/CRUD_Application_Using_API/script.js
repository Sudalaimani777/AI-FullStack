import Task from "./library.js";

const API_URL = "https://6955ebb8b9b81bad7af1c22f.mockapi.io/api/v1/task"

const taskContainer = document.querySelector("#taskContainer");
const taskForm = document.querySelector("form");
const taskInput = document.querySelector("#inputField");


function loadAllEvents() {
    document.addEventListener("DOMContentLoaded", handleFetchTask);
    taskForm.addEventListener("submit", handleAddTask);
    taskContainer.addEventListener("click", handleTaskActions);
}
loadAllEvents();

//Fetch the Task when the window is Loaded :-
function handleFetchTask() {
    Task.get(API_URL).then(tasks => {
        tasks.forEach(task => showTaskUI(task));
    }).catch(err => console.log(err));
}

function handleAddTask(e) {
    const userTask = {
        userTask: taskInput.value
    }
    e.preventDefault();
    if (taskInput.value.trim() === "") {
        alert("Please Enter the Task")
    }
    else {
        const addTaskToAPI = Task.post(API_URL, userTask)
        addTaskToAPI.then(task => showTaskUI(task)).catch(err => console.log(err));
        taskInput.value = "";
    }
}


function showTaskUI(task) {
    // Check if header and task list wrapper already exist
    let divOne = taskContainer.querySelector(".header-section");
    let divTwo = taskContainer.querySelector(".task-list");

    // Create header only if it doesn't exist
    if (!divOne) {
        //DIV 1 which contains the H2:-
        divOne = document.createElement("div");
        divOne.className = "flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200 header-section";

        //H2 :-
        const h2 = document.createElement("h2");
        h2.className = "text-xl sm:text-2xl font-bold text-gray-800";
        h2.innerText = "Your Tasks";

        divOne.appendChild(h2);
        taskContainer.appendChild(divOne);
    }

    // Create task list wrapper only if it doesn't exist
    if (!divTwo) {
        //DIV 2 (main wrapper) which contains the Tasks :-
        divTwo = document.createElement("div");
        divTwo.className = "space-y-3 task-list";
        taskContainer.appendChild(divTwo);
    }

    //DIV 3 :-
    const divThree = document.createElement("div");
    divThree.className = "group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-l-4 border-indigo-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-200";

    //P :-
    const p = document.createElement("p");
    p.className = "text-gray-800 text-base flex-1 mb-3 sm:mb-0 break-words font-medium";
    p.innerText = task.userTask;
    p.setAttribute("data-id", task.id);

    //DIV 4 which contains the Edit and Delete Buttons :-
    const divFour = document.createElement("div");
    divFour.className = "flex gap-2 w-full sm:w-auto sm:ml-4";

    //Edit Button :-
    const editBtn = document.createElement("button");
    editBtn.className = "flex-1 sm:flex-none px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200";
    editBtn.innerText = "Edit";

    //Delete  Button :-
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "flex-1 sm:flex-none px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200";
    deleteBtn.innerText = "Delete";

    //Append the p in the DIV 3 :-
    divThree.appendChild(p);

    //Append the Edit and Delete Buttons in DIV 4 :-
    divFour.appendChild(editBtn);
    divFour.appendChild(deleteBtn);

    //Append the DIV 4 in DIV 3 :-
    divThree.appendChild(divFour);

    //Append the DIV 3 in DIV 2 :-
    divTwo.appendChild(divThree);
}



/**
 * Handles all task-related actions (Edit, Save, Delete) using event delegation
 * @param {Event} e - The event object from the click event
 */
function handleTaskActions(e) {
    // Handle Edit Action - Convert task text to editable input field
    if (e.target.innerText === "Edit") {
        // Get references to the task container and its elements
        const taskElement = e.target.parentElement.parentElement;
        const taskP = taskElement.querySelector("p");
        const taskId = taskP.getAttribute("data-id");
        const currentTask = taskP.innerText;

        // Create an input element to allow task editing
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentTask;
        input.setAttribute("data-id", taskId);
        input.className = "text-gray-800 text-base flex-1 mb-3 sm:mb-0 break-words font-medium px-3 py-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500";

        // Replace the paragraph element with the input field
        taskElement.replaceChild(input, taskP);

        // Change the Edit button to Save button
        e.target.innerText = "Save";
        e.target.className = "flex-1 sm:flex-none px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
    }
    // Handle Save Action - Update the task in the API and UI
    else if (e.target.innerText === "Save") {
        // Get references to the input field and task ID
        const taskElement = e.target.parentElement.parentElement;
        const input = taskElement.querySelector("input");
        const taskId = input.getAttribute("data-id");
        const newTask = input.value.trim();

        // Validate that the task is not empty
        if (newTask === "") {
            alert("Task cannot be empty")
            return;
        }

        // Prepare the updated task object
        const userTask = {
            userTask: newTask
        }

        // Send PUT request to update the task in the API
        Task.put(`${API_URL}/${taskId}`, userTask).then(() => {
            // Create a paragraph element with the updated task text
            const p = document.createElement("p");
            p.innerText = newTask;
            p.calssName = "text-gray-800 text-base flex-1 mb-3 sm:mb-0 break-words font-medium";
            p.setAttribute("data-id", taskId);

            // Replace the input field back to paragraph element
            taskElement.replaceChild(p, input);

            // Change the Save button back to Edit button
            e.target.innerText = "Edit";
            e.target.calssName = "flex-1 sm:flex-none px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        }).catch(err => {
            // Handle any errors during the update operation
            alert("Unable to update the task");
            console.log(err);
        })
    }

    // Handle Delete Action - Remove the task from API and UI
    else if (e.target.innerText === "Delete") {
        // Confirm deletion with the user
        if (confirm("Are you sure to remove the task ?")) {
            // Get references to the task element and its ID
            const taskElement = e.target.parentElement.parentElement;
            const taskId = taskElement.firstChild.getAttribute("data-id");

            // Send DELETE request to remove the task from the API
            Task.delete(`${API_URL}/${taskId}`).then(() => {
                // Remove the task element from the DOM
                taskElement.remove();
            }).catch(err => {
                // Handle any errors during the delete operation
                alert("Unable to delete the task");
                console.log(err)
            });
        }
    }
}