import UserTaskLibrary from "./library.js";

//Input Field & Form :-
const userInputField = document.querySelector("#userTaskField");
//Task Container :-
const taskForm = document.querySelector("#taskForm");
//Remove Task :-
const userTaskContainer = document.querySelector("#userTasks");

function loadAllEvent() {
    document.addEventListener("DOMContentLoaded", fetchTaskFromAPI);
    taskForm.addEventListener("submit", addTask);
    userTaskContainer.addEventListener("click", removeTaskFromAPI);
}
loadAllEvent();

function fetchTaskFromAPI() {
    UserTaskLibrary.get("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user").then(userTask => {
        userTask.forEach(userTaskItem => {
            showTaskUI(userTaskItem);
        })
    })
}

function addTask(e) {
    const userEnteredTask = {
        userTask: userInputField.value
    }
    e.preventDefault();
    if (userInputField.value.trim() === "") {
        alert("Enter the valid task");
    }
    else {
        const userTaskFromAPI = UserTaskLibrary.post("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user", userEnteredTask)
        userTaskFromAPI.then(userTaskData => showTaskUI(userTaskData)).catch(err => console.log(err))
        userInputField.value = "";
    }
}

function showTaskUI(task) {
    const p = document.createElement("p");
    p.className = "flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-100 transition duration-200";
    p.textContent = task.userTask;
    p.setAttribute("data-id", task.id);
    const span = document.createElement("span");
    span.className = "deleteBtnWrapper ml-3"
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.className = "px-4 py-1 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition duration-200";
    deleteTaskBtn.innerText = "Delete";
    span.appendChild(deleteTaskBtn);
    p.appendChild(span);
    userTasks.appendChild(p);
}

function removeTaskFromAPI(e) {
    if (e.target.parentElement.classList.contains("deleteBtnWrapper")) {
        if (confirm("Are you sure to delete this task?")) {
            const taskElement = e.target.parentElement.parentElement;
            const taskID = taskElement.getAttribute("data-id");

            //Remove Task From API :-
            UserTaskLibrary.delete(`https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user/${taskID}`).then(() => {
                taskElement.remove();
            })
        }
    }
}