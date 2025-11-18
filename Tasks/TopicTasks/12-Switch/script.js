// Topic 12: Switch - placeholder script

// Add your practice code here.
//Task 1: Implement a switch statement for menu selection
function menuSwitch (value) {
    switch(value){
        case 1:
            console.log(`Home`);
            break;
        case 2:
            console.log(`About`);
            break;
        case 3:
            console.log(`Contact`);
            break;
        default:
            console.log("Hero");
            break;
    }
}
menuSwitch(1);

//Use fall-through cases intentionally and explain why
//In JavaScript, intentional fall-through in a switch statement occurs when you omit the break, return, or throw keywords, allowing execution to continue into the next case block. 

const animal = "Giraffe";

switch (animal) {
    case "Cow":
    case "Giraffe":
    case "Dog":
    case "Pig":
        console.log("This animal is not extinct.");
        break; // Break here prevents falling through to 'default'
    case "Dinosaur":
    default:
        console.log("This animal is extinct.");
}
// Output: This animal is not extinct.

//Task 3: Replace an if/else chain with a switch statement
function studentMark (mark) {
    switch(true) {
        case mark >= 0 && mark <=34:
            console.log(`The mark is ${mark} with the grade of 'F'`)
            break;
        case mark >=35 && mark <= 50:
            console.log(`The mark is ${mark} with the grade of 'B'`);
            break;
        case mark >= 51 && mark <= 100:
            console.log(`The mark is ${mark} with the grade of 'A'`);
            break;
        default:
            console.log(`Summa`)
            break;
    }
}
studentMark(94);

//Task 4: Handle default cases and invalid inputs :-
const handleDefaultCases = (value) => {
    if(value === null){
        console.log(`The entered data type is ${value}, which is ${value}`);
        return;
    }
    switch(typeof value) {
        case "string":
            console.log(`The entered data type is ${typeof value}, which is ${value}`);
            break;
        case "number":
            console.log(`The entered data type is ${typeof value}, which is ${value}`);
            break;
        case "boolean":
            console.log(`The entered data type is ${typeof value}, which is ${value}`);
            break;
        case "undefined":
            console.log(`The entered data type is ${typeof value}, which is ${value}`);
            break;
        case null:
            console.log(`The entered data type is ${typeof value}, which is ${value}`);
            break;
        default:
            console.log(`Enter a valid data type`);
            break;
    }
}
handleDefaultCases(null);
handleDefaultCases("Sudalaimani");

//Task 5: Use switch with string and numeric values:-
const numericAndString = (valueType) => {
    switch(typeof valueType){
        case "string":
           console.log(`The entered data type is ${typeof valueType}, which is ${valueType}`);
            break;
        case "number":
            console.log(`The entered data type is ${typeof valueType}, which is ${valueType}`);
            break;
        default:
             console.log(`Enter either number or a string data type.Your data type is ${valueType}`);
            break;
    }
}
numericAndString("Arun Kumar")