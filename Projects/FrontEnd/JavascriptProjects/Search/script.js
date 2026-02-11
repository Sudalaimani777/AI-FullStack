const userInput = document.querySelector("input");
const userSection = document.querySelector(".users");
const detailsSection = document.querySelector(".details");
const statsSection = document.querySelector(".stats");

let allUsers = [];

function loadAllEvents() {
    loadAllUsers();
    // Search User Event :-
    userInput.addEventListener("input", searchUser);
}
loadAllEvents();


// Load all users
async function loadAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json();
        // Assign the result to the allUsers array
        allUsers = result;
        // Call the renderUser function to display the users
        renderUser(allUsers);
    }
    catch (err) {
        console.log(err);

    }
}

// Render User Function :-
function renderUser(users) {
    userSection.innerHTML = "";
    users.forEach(user => {
        const div = document.createElement("div");
        div.textContent = user.name;

        // Add a click event listener to each user div :-
        div.addEventListener("click", () => {
            showUserData(user);
        })
        userSection.appendChild(div);
    })
}

// Show User Data Function :-
function showUserData(user) {
    detailsSection.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Company:</strong> ${user.company.name}</p>
    `
}

// Search User Function :-
function searchUser(e){
    const userToSearch = e.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => user.name.toLowerCase().includes(userToSearch));
    renderUser(filteredUsers);
    renderStats(filteredUsers);
}

// Render Stats Function :-
function renderStats(user){
    const userInfo = user.reduce((acc, user) => {
        acc[user.address.city] = (acc[user.address.city] || 0) + 1;
        return acc;
    },{});

    statsSection.innerHTML = `
        <p>Total Users : ${user.length}</p>    
        <p>Cities : ${Object.keys(userInfo).length}</p>
    `
}