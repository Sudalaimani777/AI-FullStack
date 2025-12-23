import Library from "./library.js";

const inputForm = document.querySelector("#form");
const inputField = document.querySelector("#userTask");
const userTasks = document.querySelector("#userTasks")

function loadAllEvent() {
    document.addEventListener("DOMContentLoaded", fetchAndDisplayTasks);
    inputForm.addEventListener("submit", addUserTask);
    userTasks.addEventListener("click", removeTask);
}
loadAllEvent();

function fetchAndDisplayTasks() {
    Library.get("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user").then(task => {
        task.forEach(taskItems => {
            showOnUI(taskItems);
        })
    }).catch(err => console.log(err))
}

function addUserTask(e) {
    e.preventDefault();
    if (inputField.value.trim() === "") {
        alert("Please enter a task");
    } else {
        const userTask = Library.post("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user", { userTaskTitle: inputField.value })
        userTask.then(data => showOnUI(data)).catch(err => console.log(err));
        inputField.value = "";
    }
}

function showOnUI(task) {
    const p = document.createElement("p");
    p.className = "flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-100 transition duration-200";
    p.textContent = task.userTaskTitle;
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

function removeTask(e){
   if(e.target.parentElement.classList.contains("deleteBtnWrapper")){
    if(confirm("Are you sure to delete this task?")){
        const taskItem = e.target.parentElement.parentElement;
        const taskId= taskItem.getAttribute("data-id");

        Library.delete(`https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user/${taskId}`).then(() => {
            taskItem.remove();
        }).catch(err => console.log(err));
    }
   }
}