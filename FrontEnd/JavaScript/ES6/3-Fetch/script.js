const getTextBtn = document.querySelector("#getTextBtn");
const getJsonBtn = document.querySelector("#getJsonBtn");
const getApiBtn = document.querySelector("#getApiBtn");

function loadAllEvent() {
    getTextBtn.addEventListener("click", getTextRespose);
    getJsonBtn.addEventListener("click", getJsonResponse);
    getApiBtn.addEventListener("click", getApiResponse);
}
loadAllEvent();

function getTextRespose() {
    const textFetch = fetch("./Datas/text.txt");
    textFetch.then(respose => respose.text()).then(data => {
        const h3 = document.querySelector("#getTextResp");
        h3.textContent = data;
    }).catch(err => { console.log(err) });
}

function getJsonResponse() {
    const JsonFetch = fetch("./Datas/userData.json");
    JsonFetch.then(respose => respose.json()).then(data => {
        const section = document.querySelector("#getJsonResp");
        let output = ""
        data.forEach(userData => {
            output += `<div class="bg-white p-3 sm:p-4 md:p-6 mb-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                       <h3 class="font-semibold text-base sm:text-lg md:text-xl text-gray-800 mb-2">${userData.userName}</h3>
                       <h3 class="text-sm sm:text-base text-gray-600">Age: ${userData.userAge}</h3>
                       <h3 class="text-sm sm:text-base text-gray-600">${userData.address.streetNumber}</h3>
                       <h3 class="text-sm sm:text-base text-gray-600">${userData.address.Street}</h3>
                       <h3 class="text-sm sm:text-base text-gray-600">${userData.address.district}</h3>
                       </div>`
        });
        section.innerHTML = output;
    }).catch(err => console.log(err));
}

function getApiResponse() {
    const apiFetch = fetch("https://jsonplaceholder.typicode.com/users");
    apiFetch.then(response => response.json()).then(data => {
        const section = document.querySelector("#getApiResp");
        let output = "";
        data.forEach(users => {
            output += `<div class="bg-white p-3 sm:p-4 md:p-6 mb-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                       <h3 class="font-semibold text-base sm:text-lg md:text-xl text-gray-800 mb-2">${users.name}</h3>
                       <h3 class="text-sm sm:text-base text-gray-600 break-all">📧 ${users.email}</h3>
                       <h3 class="text-sm sm:text-base text-gray-600">📍 ${users.address.city}</h3>
                       <h3 class="text-sm sm:text-base text-gray-600">${users.address.zipcode}</h3>
                       </div>`
        });
        section.innerHTML = output;
    }).catch(err => console.log(err));
}

