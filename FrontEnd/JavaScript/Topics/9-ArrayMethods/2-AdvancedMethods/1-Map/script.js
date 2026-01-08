const API_URL = "https://jsonplaceholder.typicode.com/users";
const section = document.querySelector("section");

async function getUser() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        data.map((value, index) => showUi(value.name))
    }
    catch (err) {
        console.log(err)
    }
}

getUser();

function showUi(name){
    const h2 = document.createElement("h2");
    h2.innerText = name;
    section.appendChild(h2);
}