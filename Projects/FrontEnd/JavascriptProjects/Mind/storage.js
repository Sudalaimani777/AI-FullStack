const THOUGHTS_KEY = 'mindvault_thoughts';

export function saveThoughts(thought){
    localStorage.setItem(THOUGHTS_KEY, JSON.stringify(thought));
}

// saveThoughts(["This is the thought 1", "This is the thought 2", "This is the thought 3"]);

export function loadThoughts () {
    const thoughts = JSON.parse(localStorage.getItem(THOUGHTS_KEY));
    return thoughts || [];
    
}
// console.log(loadThoughts());