// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Global counter to assign a unique ID to each task for demonstration purposes
let taskCounter = 0;

// Function to create and append a new task
function createTask(taskString) {
    if (!taskString.trim()) return; // Prevent adding empty tasks

    // Increment the counter for this specific task
    const currentTaskId = ++taskCounter;

    // State variable for this specific task
    let isCompleted = false;

    // Create DOM elements for the list item
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskString;

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Mark as Complete';

    /* CLOSURE DEMONSTRATION:
       This arrow function "remembers" the environment in which it was created.
       Even after `createTask` finishes executing, this event listener still has 
       access to `currentTaskId`, `isCompleted`, `taskSpan`, and `completeBtn`.
       This ensures it only modifies its own specific task.
    */
    completeBtn.addEventListener('click', () => {
        // Check the enclosed state variable
        if (!isCompleted) {
            isCompleted = true; // Update state

            // Apply visual changes
            taskSpan.classList.add('completed');
            completeBtn.textContent = 'Completed';
            completeBtn.disabled = true; // Prevent multiple clicks

            // Log to prove the closure remembers the specific ID
            console.log(`Task #${currentTaskId} ("${taskString}") marked as complete.`);
        }
    });

    // Assemble and append the elements
    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    taskList.appendChild(li);

    // Clear the input field after adding
    taskInput.value = '';
    taskInput.focus();
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', () => {
    createTask(taskInput.value);
});

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createTask(taskInput.value);
    }
});
