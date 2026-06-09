const userName = "Sudalaimani Kannan";
console.log(userName);

const userAge = 22;
console.log(userAge);

// TypeScript can automatically infer that `a` and `b` are numbers,
// so no type error occurs here.

const a = 10;
const b = 20;
console.log(a / b);
console.log(a * b);

// We can also explicitly write the type if we want:
const firstNumber: number = 22;
const secondNumber: number = 73;
console.log(firstNumber / secondNumber);
console.log(firstNumber * secondNumber);