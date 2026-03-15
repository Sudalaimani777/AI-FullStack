//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

//Syntax -> leftExpr ?? rightExpr

const userData1 = null ?? "Surya";
console.log(userData1);

const userData2 = "Kumar" ?? "Arun";
console.log(userData2);

const userData3 = "Barath" ?? undefined;
console.log(userData3);


//This causes an syntax error -> 

// null || undefined ?? "foo"; --> // raises a SyntaxError
// true && undefined ?? "foo"; --> // raises a SyntaxError


//Instead Use Parenthesis to wrap the Presedence :-

const userData4 = (null || undefined) ?? "Dharan";
console.log(userData4);

const userData5 = (undefined || "Sunil") ?? "Ram";
console.log(userData5);

const userData6 = (null && undefined) ?? "Jegan";
console.log(userData6);

const userData7 = ("Tharun" && "Tharik") ?? "Jeba"; //Tharik
console.log(userData7); 