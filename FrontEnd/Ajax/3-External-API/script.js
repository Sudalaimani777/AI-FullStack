// https://jsonplaceholder.typicode.com/users

const btn = document.querySelector("button");


//Load All Event :-
function loadAllEvent() {
    btn.addEventListener("click", getUsers);
}
loadAllEvent();

//Get Users Function :-
function getUsers() {
    //Creating the xhr :-
    const xhr = new XMLHttpRequest();

    //Open :-
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    //Send the datas :-
    xhr.send();

    //Load the data :-
    xhr.onload = function () {
        const displayUsers = document.querySelector("div");
        const users = JSON.parse(this.responseText);
        console.log(users);
        let output = "";
        users.forEach((users) => {
            output += `
                
                <ul class="bg-white rounded-xl shadow-lg p-6 space-y-3 border-l-4 border-emerald-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <li class="text-gray-700 text-sm sm:text-base"><span class="font-semibold text-emerald-600">ID:</span> ${users.id}</li>
                    <li class="text-gray-700 text-sm sm:text-base"><span class="font-semibold text-emerald-600">Name:</span> ${users.name}</li>
                    <li class="text-gray-700 text-sm sm:text-base"><span class="font-semibold text-emerald-600">Username:</span> ${users.username}</li>
                    <li class="text-gray-700 text-sm sm:text-base break-all"><span class="font-semibold text-emerald-600">Email:</span> ${users.email}</li>
                    <li class="text-gray-700 text-sm sm:text-base"><span class="font-semibold text-emerald-600">Phone:</span> ${users.phone}</li>
                    <li class="text-gray-700 text-sm sm:text-base break-all"><span class="font-semibold text-emerald-600">Website:</span> ${users.website}</li>
                </ul>
            `
        });
        displayUsers.innerHTML = output
    }
}