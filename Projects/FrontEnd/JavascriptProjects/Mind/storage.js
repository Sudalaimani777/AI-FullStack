const THOUGHTS_KEY = 'mindvault_thoughts';

function saveThoughts(thought){
    localStorage.setItem(THOUGHTS_KEY, JSON.stringify(thought));
}

saveThoughts(["This is the thought 1", "This is the thought 2", "This is the thought 3"]);

function loadThoughts () {
    const thoughts = JSON.parse(localStorage.getItem(THOUGHTS_KEY));
    return thoughts || [];
    
}

console.log(loadThoughts());