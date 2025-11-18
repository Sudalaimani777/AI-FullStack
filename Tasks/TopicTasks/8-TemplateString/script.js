// Task 1: Create multi-line strings using template literals
const multiLineString = ` Lorem ipsum dolor sit amet
 consectetur adipisicing elit. Incidunt
 tenetur ea molestias minus 
 dolorem consectetur perspiciatis veritatis, iusto aut aliquid!`;
console.log(multiLineString)

// Task 2: Use string interpolation with variables
const name = "Sudalaimani";
const age = 22;
const templateLiteral = `The username is ${name} and his age is ${age}`;
console.log(templateLiteral);

// Task 3: Perform calculations inside template literals
const numOne = 7;
const numTwo = 10;
const result = `The addition of ${numOne} and the ${numTwo} is ${numOne + numTwo}`;
console.log(result);

// Task 4: Create HTML templates using template literals
const div = document.querySelector("div");
const para = `<p>Hello World</p>`
div.innerText = para
console.log(para);

// Task 5: Compare template literals with regular string concatenation
const normalConcat = "My name is " + name + "and my age is " + age + ".";
console.log(`Normal concatenation - `, normalConcat);

const templateLiteralConcat = `My name is ${name} and my age is ${age}`;
console.log(`Template Literal Concat - ${templateLiteralConcat}. `); 