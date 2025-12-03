const form = document.querySelector("#form");
const checkBtn = document.querySelector("#btn");
const para = document.querySelector("#para");

function loadAllEvent (){
    //Form Event :-
    form.addEventListener("keyup", inputData);
    //Submit Btn :-
    checkBtn.addEventListener("submit", checkValidData);
}
loadAllEvent();

function inputData (e){
    let value = e.target.value.toLowerCase().trim();
    if(value.length < 6){
        checkBtn.disabled = true;
        para.textContent = "Text must be at least 6 characters long.";
    }
    else{
        checkBtn.disabled = false;
        para.textContent = "Correct Input.";
        value = "";
    }
}

function checkValidData(e){
    e.preventDefault();
}