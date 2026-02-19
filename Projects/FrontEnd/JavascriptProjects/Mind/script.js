import { Thought } from "./thought.js";
import { renderThought } from "./ui.js";
import { createThought, getThoughts, deleteThought } from "./api.js";

// Getting the Elements form the HTML
const thoughtForm = document.querySelector("#thoughtForm");
const thoughtInput = document.querySelector("#thoughtInput");
const typeSelect = document.querySelector("#typeSelect");
const loaderContainer = document.querySelector("#loader");

// Admin Vault to store the thoughts
let thoughts = [];

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
        renderThought(thoughts, handleDeleteThoughts);
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

// Handle Form Submission :-
thoughtForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const content = thoughtInput.value.trim();
    const type = typeSelect.value;

    if (!content) {
        alert("Please enter a thought!");
        return;
    }

    // Add the thought to the local state and API
    await handelAddThoughts(content, type);

    // Clear the input field
    thoughtInput.value = "";
})