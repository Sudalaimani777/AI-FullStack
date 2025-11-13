// Topic 11: If/Else - placeholder script

// Add your practice code here.
//Task 1: Write basic if/else statements to compare numbers
const greaterNum = (numOne, numTwo) => numOne > numTwo ? true : false;
console.log(greaterNum(0, 1))

//Task 2: Use else if chains to handle multiple conditions
const multipleIfCases = (studentMark) => {
    if (studentMark >= 0 && studentMark <= 34) {
        console.log(`Your mark is ${studentMark} with the grade of 'F'`)
    }
    else if (studentMark >= 35 && studentMark <= 50) {
        console.log(`Your mark is ${studentMark} with the grade of 'D'`)
    }
    else if (studentMark >= 51 && studentMark <= 70) {
        console.log(`Your mark is ${studentMark} with the grade of 'C'`)
    }
    else if (studentMark >= 71 && studentMark <= 90) {
        console.log(`Your mark is ${studentMark} with the grade of 'B'`)
    }
    else if (studentMark >= 91 && studentMark <= 99) {
        console.log(`Your mark is ${studentMark} with the grade of 'A'`)
    }
    else if (studentMark === 100) {
        console.log(`Your mark is ${studentMark} with the grade of 'A+'`)
    }
};

multipleIfCases(100);

//Task 3: Practice logical operators (&&, ||, !) in conditions
// OR operator :-
const data = 0;
let result = data || 100;
console.log(result);

//NOT ! operator :-
const val = !data;
console.log(val);

//Task 4: Check for undefined/null values before using variables
function checkValue (value) {
    let result = value === "undefined" ? console.log(`The entered value is undefined`) : value === "null" ? console.log(`The entered value is null`) : `The entered value is ${value}`;
    return result;
}
console.log(checkValue(undefined));

//Task 5: Implement nested if/else statements

const nestedIf = (value = 21) => {
    if(value <= 20) {
        if(value === 20) {
            console.log(`The entered value is 20 and it is correct`);
        }
        else{
             console.log(`The value (${value}) is 20 or less.`);
        }
    }
    else if(value >= 21 && value <= 98){
        if(value >= 25 && value <=30){
            console.log(`The selected value is between 25 to 30`)
        }
        else{
            console.log(`The value is above 30`);
        }
    }
}
nestedIf(31);