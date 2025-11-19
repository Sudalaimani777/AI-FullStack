const listContainer = document.querySelector(".collection");
const taskButton = document.querySelector("#submit-btn");
const inputField = document.querySelector("#task");
const clearTaskButton = document.querySelector("#btn-clear");


//Add Event :-
taskButton.addEventListener("click", addTask);

function addTask(e) {
    e.preventDefault();
    //Creating the LI :-
    const li = document.createElement("li");
    li.className = "collection-item";
    li.textContent = inputField.value;
    
    //Creating the Link tag :-
    const link = document.createElement("a");
    link.href = "#";
    link.classList = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link);
    console.log(li);
    listContainer.appendChild(li);
    inputField.value = "";
};

//Clear All the Task :-
clearTaskButton.addEventListener("click", clearTask);

function clearTask(e) {
    e.preventDefault();
    const allTask = document.querySelectorAll("li");
    allTask.forEach((element) => {
        element.remove();
    })
};
