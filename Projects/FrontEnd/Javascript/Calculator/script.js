//All Buttons :-
const allButtons = document.querySelectorAll("button");
//Display Field ;-
const resultDisplay = document.querySelector("#result");

//Iterate over the buttons :-
for(let i = 0; i< allButtons.length; i++){
    //Adding Event Listenres to every buttons :-
    allButtons[i].addEventListener("click", makeCalculate);
}

function makeCalculate(e){
    //Taking the button value :-
    const buttonValue = e.target.textContent;
    
    //Validation for add Values in the display, clear and calculation :-
    if(buttonValue === "C"){ //For Clearing the display
        clearDisplay();
    }else if(buttonValue === "="){ //Foe Evaluation
        calculateResult();
    }else if(buttonValue === "Del"){ //Remove Last Value in the in the display
        removeLastValue();
    }
    else{
        appendValue(buttonValue); //Adding numbers and symbols in the display
    }
}


//Append the data to calculate :-
function appendValue (value){
    resultDisplay.value += value
}

//Clear the Display Values :-
function clearDisplay(){
    resultDisplay.value = "";
}

//Calculate the data :-
function calculateResult(){
    resultDisplay.value = eval(resultDisplay.value);
}

//Remove Last Value in the display :-
function removeLastValue(){
    resultDisplay.value =  resultDisplay.value.slice(0, -1);    
}