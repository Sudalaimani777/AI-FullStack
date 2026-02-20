const generateBtn = document.querySelector("#generatePasswordBtn");
const passwordInput = document.querySelector("#passwordInput");
const copyIcon = document.querySelector(".fa-copy");


// Load all event listeners :-
function loadAllEventListeners(){
    generateBtn.addEventListener("click", generatePassword);
    copyIcon.addEventListener("click", copyPassword);
}
loadAllEventListeners();

// Function to generate random password :-
function generatePassword(e){
    e.preventDefault();
    const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    //Password Length :-
    const passwordLength = 12;

    //Password Variable :-
    let password = "";

    //Loop to genetate the random password :-
    for(let i = 0 ; i <= passwordLength ; i++){
        //Random Number :-
        const randomNumber = Math.floor(Math.random() * characters.length);
        
        //Appending the generated password to the password variable :-
        password+= characters.substring(randomNumber, randomNumber+1);

        //Assigning the created passworf to the Input :-
        passwordInput.value = password;
    }
} 

//Function Copy Password :-
function copyPassword(){
   if(passwordInput.value.trim() === ""){
        alert("Click Generate Button to generate the password");
   }else{
        passwordInput.select(); //For Windows
        passwordInput.setSelectionRange(0, 999); //For Mobile Devices
        navigator.clipboard.writeText(passwordInput.value); //For MacOS
        alert("Password Copied Successfully...")
        passwordInput.value = "";
   }
}