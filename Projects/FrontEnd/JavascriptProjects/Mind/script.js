import { Vault, AdminVault } from "./vault.js";
import { Thought } from "./thought.js";
import { syncThought } from "./api.js";
import { saveThoughts, loadThoughts } from "./storage.js";
import { renderThought } from "./ui.js";

// Getting the Elements form the HTML
const thoughtForm = document.querySelector("#thoughtForm");
const thoughtInput = document.querySelector("#thoughtInput");
const typeSelect = document.querySelector("#typeSelect");

// Load All Events :-
function loadAllEvents (){
    thoughtForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Validation :-
        if(thoughtInput.value.trim() === ""){
            alert("Please enter a thought");
            return;
        }else{
           handleAddThought(thoughtInput.value, typeSelect.value); 
        }
        
    })
}
loadAllEvents();

const vault = new AdminVault();
console.log(vault.thoughts);

//Setting the empty array to the local storage :-
vault.thoughts = loadThoughts();
console.log(vault.thoughts);


async function handleAddThought(content, type){
    const newThought = new Thought(content, type);
    console.log(newThought);

    vault.addThought(newThought);

    await syncThought(newThought);
    
}