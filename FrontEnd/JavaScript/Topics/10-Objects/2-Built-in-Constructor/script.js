//Built-in constructor :-

let normalStringLiteral = "Sudalaimani"; //Normal String Literals;
console.log("Normal String Literal ->", normalStringLiteral, "and the typ3e of normal string literal is ->", typeof normalStringLiteral);

//Built-in String Constructor :-
let builtInStringConstructor = new String(normalStringLiteral);
console.log("Built In String Constructor -> ", builtInStringConstructor, "and the type of the 'String Constructor is ->' ", typeof builtInStringConstructor);

//Built-in constructor for Numbers :-

//Normal :-
let normalNumber = 30;
console.log("Normal number ->", normalNumber, " and the type of the normal number is -> ", typeof normalNumber);

//Built-in Constructor :-
let builtInConstructorForNumbers = new Number(normalNumber);
console.log("Built In Number Constructor -> ", builtInConstructorForNumbers, "and the type of the 'String Constructor is ->' ", typeof builtInConstructorForNumbers);

//Built-in constructor for Array :-

//Normal Array :-
let normalArray = [1, 2, 3, 4, 5, 6, ["Apple", "Orange", "Mango"]];
console.log("Normal Array ->", normalArray, " and the type of the normal array is -> ", typeof normalArray);

//Built-in Array :-
let builtInArrayConstructor = new Array(normalArray);
console.log("Built In Array Constructor -> ", builtInArrayConstructor, "and the type of the 'Array Constructor is ->' ", typeof builtInArrayConstructor);

//Built-in constructor for Object :-

//Normal Object :-
let normalObject = {
    name: "Sudalaimani",
    status: "Student"
}
console.log("Normal Object -> ", normalObject);

//Built-in Object :-
let builtInObjectConstructor = new Object(normalObject);
console.log("Built In Object Constructor -> ", builtInObjectConstructor, "and the type of the 'Object Constructor is ->' ", typeof builtInObjectConstructor);
