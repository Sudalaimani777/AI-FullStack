// Task 1: Perform basic arithmetic operations (+, -, *, /)
const add = 1 + 2;
const sub = 1 - 2;
const mul = 1 * 2;
const div = 1 / 2;
const modulo = 1 % 2;

// Task 2: Use Math.round(), Math.floor(), Math.ceil()
const nums = 100.2323
const round = Math.round(nums);
console.log(round);

const floor = Math.floor(nums);
console.log(floor);

const ceil = Math.ceil(nums);
console.log(ceil);

// Task 3: Generate random numbers using Math.random()
const random = Math.floor(Math.random() * 1000);
console.log(random);

// Task 4: Use Number methods like toFixed() and toString()
const num = 50.44;
num.toFixed(1);
console.log(num);

num.toString();
console.log(num);

// Task 5: Create a simple calculator program
const calculator = () => {
    let result;
    const numOne = Number(prompt(`Enter the first number`));
    console.log(typeof numOne);
    const operator = prompt(`Enter the operator to calculate eg: +, -`);
    const numTwo = Number(prompt(`Enter the second number`));
    console.log(typeof numTwo);
    switch(operator){
        case "+" :
           result = alert(`The addition of ${numOne} and ${numTwo} is ${numOne + numTwo}`)
           break; 
        case "-" :
           result = alert(`The subtraction of ${numOne} and ${numTwo} is ${numOne - numTwo}`)
           break; 
        case "*" :
           result = alert(`The multiplication of ${numOne} and ${numTwo} is ${numOne * numTwo}`)
           break; 
        case "/" :
           result = alert(`The division of ${numOne} and ${numTwo} is ${numOne / numTwo}`)
           break; 
        case "%" :
           result = alert(`The modulo of ${numOne} and ${numTwo} is ${numOne % numTwo}`)
           break;
        default :
            alert(`Enter the proper number or operator to calculate`);
            break;
        
    }
}
// calculator();