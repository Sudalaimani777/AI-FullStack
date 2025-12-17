//Ajax is a developer dream beacuse,  AJAX -> Asynchronous Javascript And XML
/**
 * 1) It read data from the web server - after the page loads
 * 2) Update the web page without reloading the page
 * 3) Send data to the web server - in the background
 */

//Server -> Service Provide, 

const button = document.querySelector("button");

//Load All Event :-
function loadAllEvent (){
    button.addEventListener("click", getText);
}
loadAllEvent();

//Get Text Function :-
function getText(){
    const text = document.querySelector("h3");
    
    //Creating the xhr object :-
    const xhr = new XMLHttpRequest();

    console.log(xhr);

    //Open :-
    xhr.open("GET", "data.txt", true);

    //Load the Data :-
    xhr.onload = function (){
        console.log(this);
        const response = this.status === 200 ? text.textContent = this.responseText : text.textContent = `${this.status} - Not Found`
        return response;
    }
    //Send :-
    xhr.send(); //We need to send the data to the server, without send the data will never be called by the client
}