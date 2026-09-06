const inputField = document.querySelector("#inputField");
const form = document.querySelector("#form");
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");

function loadAllEvent () {
    //Click Event :-
    form.addEventListener("submit", validateBtn);
    //Input Value Event :-
    inputField.addEventListener("keyup", checkValue);
}
loadAllEvent();

function checkValue (e){
    let text = e.target.value.trim();
    if(text.length < 6){
        btn.disabled = true;
        para.textContent = "Must enter more than 6 chatacters";
        para.style.color = "red";
    }
    else{
        btn.disabled = false;
        para.textContent = "Correct validation";
        para.style.color = "green";
    }
}

function validateBtn (e){
    e.preventDefault();
    alert("Successfully Submitted");
    para.textContent = "";
    inputField.value = "";
}