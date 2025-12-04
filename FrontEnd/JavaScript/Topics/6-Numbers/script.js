//Basic Math Operation :-
let value;
const numOne = 20;
const numTwo = 10;

console.log(`Number One ${numOne}`);
console.log(`Number Two ${numTwo}`);

//Math Operation :-
value = numOne + numTwo;
console.log(`Addition ${value}`);
value = numOne - numTwo;
console.log(`Subtraction ${value}`);
value = numOne * numTwo;
console.log(`Multiplication ${value}`);
value = numOne / numTwo;
console.log(`Division ${value}`);
value = numOne % numTwo;
console.log(`Modulo ${value}`);

//Math Objects :-
//PI :-
value = Math.PI;
console.log(value);

//Round :-
value = Math.round(2.5); //3
console.log(value);
value = Math.round(2.1); //2
console.log(value);

//Ceil :-
value = Math.ceil(2.1); //3
console.log(value);

//Floor :-
value = Math.floor(2.9) //2
console.log(value);

//Sqrt :-
value = Math.sqrt(100);
console.log(value);

//Absloute :-
value = Math.abs(-3); //3
console.log(value);

//Min :-
value = Math.min(1, 2, 3); //1
console.log(value);

//Max :-
value = Math.max(1, 3, 45); //45
console.log(value);

//Random :-
value  =Math.random() * 1000;
console.log(value);

value = Math.ceil(Math.random() * 10000);
console.log(value);