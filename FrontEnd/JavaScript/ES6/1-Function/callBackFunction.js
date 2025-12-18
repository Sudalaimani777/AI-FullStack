//A callback function is a simple function, you can pass the function to the another function and that function call it later.

//A callback is a function that is passes as an arguement to another function.

/**
 * It is used to handle async operation such as,
 *  1)Reading the file.
 *  2)Network Request.
 *  3)Interacting with the database
 * 
 * It's like -> Hey, when your'e done, call this next...!
 */

//Example to display the message "Hello" :-
function sayHello(callback){
    console.log("Hello Sudalaimani");
    //Calling the callBack function :-
    callback();
}

function goodBye(){
    console.log("Good Bye");
}

function wait(){
    console.log("Wait");
}

function leave(){
    console.log("Leave")
}

//Passing the function as an arguement in  the sayHello function :-
sayHello(leave);

//Caluctate Sum :-

function addNumbers(a, b, callback){
    let result = a+b;
    callback(result);
}

function displaySum(result){
    const body = document.querySelector("body");
    body.textContent = result;
}

addNumbers(10, 20, displaySum);
addNumbers(10, 200, displaySum);

//3) :-
function greetUser(userName, callback){
    const name = userName.toUpperCase();
    console.log("Hii " + name);
    callback(name);
}
// greetUser("Sudalaimani", goodByeUser);

function goodByeUser(name){
    setTimeout(() => {
        console.log("Goodbye " + name);
    }, 3000)
}


//Assignment :-
function patient(patientName, callback, anotherCallBack){
    console.log(`Patient : Hello doctor,I'm ${patientName},I had a fever over last night..`);
    callback(patientName);
    anotherCallBack(patientName);
}
// patient("Sudalaimani", doctor, response2);

function doctor(patientName){
    setTimeout(() => {
        console.log(`Doctor : I see ${patientName}, here is the tablet take it twice in a day, it will cure your fever`)
    }, 3000);   
}

function response2(){
    setTimeout(() => {
        console.log(`Patient : Thanks doctor`)
    },5000);
};