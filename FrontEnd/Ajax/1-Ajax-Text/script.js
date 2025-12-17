const getMessageBtn = document.querySelector("button");

function loadAllEvent(){
    getMessageBtn.addEventListener("click", getMessage);
}
loadAllEvent();

function getMessage(){
    const message = document.querySelector("h3");

    const xhr = new XMLHttpRequest();
    console.log(xhr);

    //Get the data :- (1)
    xhr.open("GET", "data.txt", true);

    console.log(xhr)

    //Send the data (2)
    xhr.send();

    //Onload :-
    xhr.onload = function(){
        console.log("This -> ", this)
        const response = this.status === 200 ? message.textContent = this.responseText : message.textContent = `${this.status} - Data not found`;
        return response
    }
}