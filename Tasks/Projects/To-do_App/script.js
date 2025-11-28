// ========================================
// DOM ELEMENT SELECTIONS
// ========================================

// Task Form - The main form element for adding new tasks
const taskForm = document.querySelector("#task-form");

// Clear Button - Button to remove all tasks from the list
const clearTaskButton = document.querySelector(".clear-tasks");

// UL List Container - The unordered list that holds all task items
const listContainer = document.querySelector(".collection");

// Input Field - Text input where users type their tasks
const inputField = document.querySelector("#task");

// Filter Task Input - Search field to filter/search through tasks
const filterTask = document.querySelector("#search");

// ========================================
// EVENT LISTENERS INITIALIZATION
// ========================================

/**
 * Initializes all event listeners for the Todo App
 * This function sets up all the necessary event handlers when the page loads
 */
function loadAllEvent() {
    // DOM Content Loaded - Load tasks from local storage when page finishes loading
    document.addEventListener("DOMContentLoaded", loadTask);

    // Form Submit - Add new task when form is submitted
    taskForm.addEventListener("submit", addTask);

    // Clear Button Click - Remove all tasks from the list and local storage
    clearTaskButton.addEventListener("click", clearTask);

    // List Container Click - Remove individual task when delete icon is clicked (Event Delegation)
    listContainer.addEventListener("click", removeTask);

    // Filter Input Keyup - Filter/search tasks as user types in the search field
    filterTask.addEventListener("keyup", filterTasks);
}
// Initialize all event listeners
loadAllEvent();

// ========================================
// LOAD TASKS FROM LOCAL STORAGE
// ========================================

/**
 * Loads all tasks from local storage and displays them on the page
 * This function runs when the DOM content is fully loaded
 * @param {Event} e - The DOMContentLoaded event object
 */
function loadTask(e) {
    let taskContainer = [];

    // Check if tasks exist in local storage
    if (localStorage.getItem("tasks") === null) {
        // Initialize empty array if no tasks found
        taskContainer = [];
    }
    else {
        // Parse and retrieve existing tasks from local storage
        taskContainer = JSON.parse(localStorage.getItem("tasks"));
    }

    // Loop through each stored task and create DOM elements
    taskContainer.forEach((storedTask) => {
        // Create list item (li) element
        const li = document.createElement("li");
        li.className = "collection-item";
        li.innerText = storedTask;

        // Create delete link with Font Awesome icon
        const link = document.createElement("a");
        link.href = "#";
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append delete link to the list item
        li.appendChild(link);

        // Append the complete list item to the main list container
        listContainer.appendChild(li);
    })
}

// ========================================
// FILTER/SEARCH TASKS
// ========================================

/**
 * Filters the task list based on user's search input
 * Shows only tasks that match the search query and hides others
 * @param {Event} e - The keyup event from the search input field
 */
function filterTasks(e) {
    // Get the search query and convert to lowercase for case-insensitive search
    const filterTask = e.target.value.toLowerCase();

    // Loop through all task items in the list
    document.querySelectorAll(".collection-item").forEach((taskToFilter) => {
        console.log(taskToFilter);

        // Get the task text and convert to lowercase
        const item = taskToFilter.innerText.toLowerCase();

        // Check if the search query exists in the task text
        if (item.indexOf(filterTask) != -1) {
            // Show task if it matches the search query
            taskToFilter.style.display = "block";
        } else {
            // Hide task if it doesn't match the search query
            taskToFilter.style.display = "none";
        }
    })
}

// ========================================
// ADD NEW TASK
// ========================================

/**
 * Adds a new task to the list and stores it in local storage
 * Creates DOM elements for the task and appends to the list
 * @param {Event} e - The form submit event
 */
function addTask(e) {
    // Prevent form from submitting and refreshing the page
    e.preventDefault();

    // Validate input - check if user entered a task
    if (inputField.value === "") {
        alert("Enter a valid task");
    }
    else {
        // Create list item (li) element for the new task
        const li = document.createElement("li");
        li.className = "collection-item";
        li.innerText = inputField.value;

        // Create delete link with Font Awesome icon
        const link = document.createElement("a");
        link.href = "#";
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';

        // Append delete link to the list item
        li.appendChild(link);

        // Append the complete list item to the main list container
        listContainer.appendChild(li);

        // Store the task in local storage for persistence
        storeTask(inputField.value);

        // Clear the input field after adding the task
        inputField.value = "";
    }
};

// ========================================
// CLEAR ALL TASKS
// ========================================

/**
 * Removes all tasks from the list and clears local storage
 * Uses Array.from() and forEach() for better performance than innerHTML
 */
function clearTask() {
    // Alternative method: listContainer.innerHTML = "";

    // Convert HTMLCollection to Array for easier manipulation
    const listItem = Array.from(listContainer.children);
    console.log(listItem);

    // Remove each task item from the DOM
    listItem.forEach((element) => element.remove());

    // Clear all tasks from local storage
    clearAllTaskFromLocalStorage();
};

// ========================================
// REMOVE INDIVIDUAL TASK
// ========================================

/**
 * Removes a specific task when the delete icon is clicked
 * Uses event delegation to handle clicks on dynamically created elements
 * @param {Event} e - The click event from the list container
 */
function removeTask(e) {
    console.log(e.target.parentElement.classList.contains("delete-item"));

    // Check if the clicked element is the delete icon (event delegation)
    // e.target = <i>, parentElement = <a class="delete-item">
    if (e.target.parentElement.classList.contains("delete-item")) {
        // Confirm before deleting the task
        if (confirm("Are you sure to remove the task ?")) {
            // Remove the task from DOM: <i> -> <a> -> <li>
            e.target.parentElement.parentElement.remove();
        }

        // Remove the task from local storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
};

// ========================================
// REMOVE TASK FROM LOCAL STORAGE
// ========================================

/**
 * Removes a specific task from local storage
 * Finds the task by matching text content and removes it from the array
 * @param {HTMLElement} taskToRemove - The task list item element to remove
 */
function removeTaskFromLocalStorage(taskToRemove) {
    let taskContainer;

    // Check if tasks exist in local storage
    if (localStorage.getItem("tasks") === null) {
        taskContainer = [];
    }
    else {
        // Retrieve existing tasks from local storage
        taskContainer = JSON.parse(localStorage.getItem("tasks"));
    }

    // Loop through tasks to find and remove the matching one
    taskContainer.forEach((task, taskIndex) => {
        console.log("Task", task);
        console.log("Task index", taskIndex);

        // Compare task text with the text of the element to remove
        if (taskToRemove.innerText === task) {
            // Remove the task from the array using splice
            taskContainer.splice(taskIndex, 1);
        }

        // Update local storage with the modified task array
        // Note: This is inside forEach which may cause issues - should be outside
        localStorage.setItem("tasks", JSON.stringify(taskContainer));
    })
}

// ========================================
// CLEAR ALL TASKS FROM LOCAL STORAGE
// ========================================

/**
 * Removes all tasks from local storage
 * Called when the clear all button is clicked
 */
function clearAllTaskFromLocalStorage() {
    // Remove the "tasks" key from local storage
    localStorage.removeItem("tasks");
}

// ========================================
// STORE TASK IN LOCAL STORAGE
// ========================================

/**
 * Stores a new task in local storage
 * Retrieves existing tasks, adds the new one, and saves back to local storage
 * @param {string} providedTask - The task text to store
 */
function storeTask(providedTask) {
    let taskContainer = [];

    // Check if tasks already exist in local storage
    if (localStorage.getItem("tasks") === null) {
        // Initialize empty array if no tasks found
        taskContainer = [];
    } else {
        // Retrieve existing tasks from local storage
        taskContainer = JSON.parse(localStorage.getItem("tasks"));
    }

    // Add the new task to the array
    taskContainer.push(providedTask);

    // Save the updated task array back to local storage
    localStorage.setItem("tasks", JSON.stringify(taskContainer));
}
