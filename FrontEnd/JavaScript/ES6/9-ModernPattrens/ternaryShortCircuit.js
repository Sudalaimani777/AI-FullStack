//Short Circuiting :-

//The short circuit in js is defined as the process of evaluating a logical expression and stopping the evaluation as soon as the result is determined. In JavaScript, there are two types of short circuiting: logical AND (&&) and logical OR (||).

//Logical AND (&&) Short Circuiting:-
//In a logical AND operation, if the first operand is falsy, the entire expression will be falsy, and the second operand will not be evaluated. For example:
let a = false;
let b = true;

if (a && b) {
    console.log("This will not be printed");
}
//In this example, since 'a' is false, the expression 'a && b' will be false, and the console.log statement will not be executed.

//But if the first operand is truthy, the second operand will be evaluated. For example:
let c = true;
let d = false;
if (c && d) {
    console.log("This will not be printed");
} else {
    console.log("This will be printed the else block will be executed");
}

//In this example, since 'c' is true, the expression 'c && d' will be evaluated, and since 'd' is false, the console.log statement in the else block will be executed.

//Logical OR (||) Short Circuiting:-
//In a logical OR operation, if the first operand is truthy, the entire expression will be truthy, and the second operand will not be evaluated. For example:
let e = true;
let f = false;
if (e || f) {
    console.log("This will be printed");
}
//In this example, since 'e' is true, the expression 'e || f' will be true, and the console.log statement will be executed.

//But if the first operand is falsy, the second operand will be evaluated. For example:
let g = false;
let h = true;
if (g || h) {
    console.log("This will be printed");
}
//In this example, since 'g' is false, the expression 'g || h' will be evaluated, and since 'h' is true, the console.log statement will be executed.
