
let a = 10;
let b = "5";
let result;

if (a > b) {
    result = a + Number(b);
} else if (a === b) {
    result = a * b;
} else {
    result = a - b;
}

let message = "The result is: ";

if (result % 2 === 0) {
    message += result + " and it's even.";
} else {
    message += result + " and it's odd.";
}

console.log(message);

