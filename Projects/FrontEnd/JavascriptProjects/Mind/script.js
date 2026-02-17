import { Vault } from "./vault.js";
import { Thought } from "./thought.js";
import { syncThought } from "./api.js";
import { saveThoughts, loadThoughts } from "./storage.js";
import { renderThought } from "./ui.js";

const vault = new Vault();

const saveThought = loadThoughts();

const newThought = new Thought("This is a new thought", "idea");

vault.addThought(newThought);
    
renderThought(vault.allThoughts());

saveThoughts(vault.allThoughts());

syncThought(newThought);