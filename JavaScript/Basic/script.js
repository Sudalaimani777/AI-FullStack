//1)  Print 'Hello World' in console and alert box :-
const message = "Hello World";
console.log(message);
// const alertMeaasge = alert("Hello World");

//2) Create 3 variables using var, let, const and explain difference:-
//var :-
var varKeyword = "It is a type of keyword in js, it is re-assignable and also re-declarable";
console.log(varKeyword);
//let :-
let letKeyword = "It is a replacement of var keyword, it was introduced in ECMA Script 2015, 'ES6'. It cannot be re-declarale";
console.log(letKeyword);
//const :-
const constKeyword = "It is a type of keyword, it cannot be re-assignable and re-declarable."
console.log(constKeyword);

//3) Perform addition, subtraction, multiplication, division using numbers:-
//Addition:-
const add = (a, b) => a + b;
console.log(add(3, 10));
//Subtraction :-
const sub = (a, b) => a - b;
console.log(sub(10, 5));
//Multiplication :-
const mul = (a, b) => a * b;
console.log(mul(2, 10));
//Division :-
const div = (a, b = 20) => a / b;
console.log(div(2));

//4) Convert string to number and number to string:-
//String to number :-
const stringToNumber = () => {
    const userInput = prompt(`Enter the character to change the number`);
    const typeConversion = Number(userInput);
    const resut = alert(`The provided string ${userInput} is changed to the type of ${typeof (typeConversion)}`);
}
// stringToNumber();
//Numnber to String :-
const numberToString = () => {
    const userInput = prompt(`Enter the number that you want to change the type to string`);
    const typeConversion = String(userInput);
    const result = alert(`The provided number ${userInput} is change to the type of ${typeof (typeConversion)}`);
}
// numberToString();

//5) Create an object with your details (name, age, hobby) and print it :-
const userData = {
    "User Name": "K.Sudalaimani",
    userAge: 22,
    hobby: ["Playing FreeFire", "Watching Anime", "Little bit of Studying 😄"]
}
console.log(userData["User Name"]);
console.log(userData.userAge);
console.log(userData.hobby[0]);
console.log(userData.hobby[1]);
console.log(userData.hobby[2]);

//6) Create an array with 5 fruits and print the 3rd fruit:-
const fruits = ["Apple", "Orange", "Banana", "Grapes", "WaterMelon"];
console.log(fruits[3]);
//Splice :-
fruits.splice(1, 1, "Cherry");
console.log(`Splice method removes the elements based on the index of the array, also used to add the elemnt if want ${fruits}`);
//Slice
fruits.slice(2, 4);
console.log(`Slice method copy the array ${fruits}`);

//7) Write a function that takes a name and prints a greeting message:-
const userGreeting = () => {
    const userName = prompt(`Enter your name`);
    const greet = alert(`Helloo ${userName}`);
    return greet;
}
// userGreeting();

//8) Use if-else to check if a number is positive, negative or zero:-
const checkNumber = () => {
    const userNumber = prompt(`Enter the number to check if is positive, negative or zero`);
    const num = Number(userNumber);
    if (num > 0) {
        alert(`The number ${num} is positive`);
    }
    else if (num < 0) {
        alert(`The number ${num} is negative`);
    }
    else if (num === 0) {
        alert(`The number ${num} is zero`);
    }
};
// checkNumber();

//9) Use switch to print day of week based on number (1=Monday):-
const checkDays = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const userNumber = prompt(`Enter the number upto 7 to display the Days in a week`);
    const day = Number(userNumber);
    switch (day) {
        case 1:
            alert(`The number ${userNumber} which belongs to the day of ${days[0]}`);
            break;
        case 2:
            alert(`The number ${userNumber} which belongs to the day of ${days[1]}`);
            break;
        case 3:
            alert(`The number ${userNumber} which belongs to the day of ${days[2]}`);
            break;
        case 4:
            alert(`The number ${userNumber} which belongs to the day of ${days[3]}`);
            break;
        case 5:
            alert(`The number ${userNumber} which belongs to the day of ${days[4]}`);
            break;
        case 6:
            alert(`The number ${userNumber} which belongs to the day of ${days[5]}`);
            break;
        case 7:
            alert(`The number ${userNumber} which belongs to the day of ${days[6]}`);
            break;
        default:
            alert(`Enter a valid Number (1 and 7)`);
    }
}
// checkDays();

//Better way:-
const checkDay = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const userNumber = prompt("Enter a number (1–7):");
  const day = Number(userNumber);

  if (day >= 1 && day <= 7) {
    alert(`The number ${day} belongs to the day ${days[day - 1]}`);
  } else {
    alert("Enter a valid number between 1 and 7");
  }
};
// checkDay();

//10) Create a simple loop to print numbers 1 to 10:-
for (let i = 0 ; i <= 10 ; i++) {
    console.log(i);
};