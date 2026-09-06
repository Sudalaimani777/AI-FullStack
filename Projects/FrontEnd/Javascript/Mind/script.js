import { Thought } from "./thought.js";
import { renderThought } from "./ui.js";
import { createThought, getThoughts, deleteThought, updateThought } from "./api.js";

// Getting the Elements form the HTML
const thoughtForm = document.querySelector("#thoughtForm");
const thoughtInput = document.querySelector("#thoughtInput");
const typeSelect = document.querySelector("#typeSelect");
const loaderContainer = document.querySelector("#loader");
const submitBtn = document.querySelector("#submitBtn");
const cancelBtn = document.querySelector("#cancelBtn");

// Admin Vault to store the thoughts
let thoughts = [];
let editingId = null; // Track which thought is being edited

// Show Loader :-
function showLoader() {
    loaderContainer.classList.remove("hidden");
}

// Hide Loader :-
function hideLoader() {
    loaderContainer.classList.add("hidden");
}

//Load All the thoughts from the API and render them :-
async function loadThoughts() {
    try {
        // Show the loader while fetching data :-
        showLoader();

        //Added the data from the API to the local state  which is a empty array:-
        thoughts = await getThoughts();

        //Render the thoughts :-
        renderThought(thoughts, handleDeleteThoughts, handleUpdateThought);
    } catch (err) {
        console.log(`Failed to fetch  the thoughts from the API: ${err}`);
    } finally {
        hideLoader();
    }
}
loadThoughts();

//Add Thoughts :-
async function handelAddThoughts(content, type) {
    try {
        const thought = new Thought(content, type);

        // Add the thought to the local state
        await createThought(thought);

        //Load the THought :-
        await loadThoughts();
    } catch (err) {
        console.log(`Failed to add the thought: ${err}`);
    }
}

//Delete Thought :
async function handleDeleteThoughts(id) {
    try {
        await deleteThought(id);
        await loadThoughts();
    }catch(err){
        console.log(`Unable to delete ${err}`);
    }
}

//Update Thought :
function handleUpdateThought(id, currentContent, currentType) {
    // Populate the form with current data
    thoughtInput.value = currentContent;
    typeSelect.value = currentType;
    
    // Set edit mode
    editingId = id;
    submitBtn.textContent = "Update";
    submitBtn.classList.remove("bg-indigo-600");
    submitBtn.classList.add("bg-indigo-600");
    cancelBtn.classList.remove("hidden");
    
    // Focus on input
    thoughtInput.focus();
}

// Cancel edit mode
function cancelEdit() {
    editingId = null;
    thoughtInput.value = "";
    typeSelect.value = "idea";
    submitBtn.textContent = "Save";
    submitBtn.classList.remove("bg-indigo-600");
    submitBtn.classList.add("bg-indigo-600");
    cancelBtn.classList.add("hidden");
}

// Cancel button click handler
cancelBtn.addEventListener("click", cancelEdit);

// Handle Form Submission :-
thoughtForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const content = thoughtInput.value.trim();
    const type = typeSelect.value;

    if (!content) {
        alert("Please enter a thought!");
        return;
    }

    // Check if we're in edit mode
    if (editingId) {
        try {
            const updatedThought = {
                content: content,
                type: type,
                createdAt: new Date().toISOString()
            };
            
            await updateThought(editingId, updatedThought);
            await loadThoughts();
            cancelEdit();
        } catch(err) {
            console.log(`Unable to update: ${err}`);
        }
    } else {
        // Add the thought to the local state and API
        await handelAddThoughts(content, type);
        // Clear the input field
        thoughtInput.value = "";
    }
})