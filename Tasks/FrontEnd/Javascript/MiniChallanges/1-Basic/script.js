//1.1 :-
let a = 10;
let b = "10";
let c = a === b;
let d = a == b;
console.log(c); //Prints false because it checks the datatype at the same time.
console.log(d); //Prints true because it checks only the value not the data  type.

//1.2 :-
let str = "100";
let val = null;
let nullToBool  = Boolean(val);
let strToNum = Number(str);
let strToBool = Boolean(str);
console.log(typeof strToNum, strToNum);
console.log(typeof strToBool, strToBool);
console.log(typeof nullToBool, nullToBool);
