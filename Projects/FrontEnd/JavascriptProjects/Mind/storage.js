const THOUGHTS_KEY = 'mindvault_thoughts';

function saveThoughts(thought){
    localStorage.setItem(THOUGHTS_KEY, JSON.stringify(thought));
}

saveThoughts("This is a thought saved in localStorage");
saveThoughts("This is a thought 2 saved in localStorage");

function loadThoughts () {
    const thoughts = JSON.parse(localStorage.getItem(THOUGHTS_KEY));
    return thoughts || [];
    
}

console.log(loadThoughts());