// Asserttion :-
/**
    It is the way to tell the TS compiler to treat the value as a specific type when we have more info about that value than the TS can infer
    It is a compile-time construct only and does not perform any runtime type conversion or validation.
    Simply -> We are instructing the Typescript, "I know the actual type of this value", so use this type for type checking
 * */
// Syntax 1 (Recommended)
// Convert more or less Specific :-
let a = "Hii";
let b = "Bye"; //Less Specific (Two Types "str" and "num")
console.log(b);
let c = "Varun"; //More Specific (only str)
console.log(c);
// Syntax 2
// let d = <One>8 //Returns Error
let d = "Bala"; //Not recommended
console.log(d);
// Also we can directly use the types inside the ankel brackets
let e = "Kishore";
console.log(e);
// Real World Example :-
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return "" + a + b;
    return "" + a + b;
};
const numOne = addOrConcat(2, 4, "add");
console.log(numOne);
// Be careful! TS sees no problem - but a string is returned
const nextVal = addOrConcat(2, 2, "concat");
console.log(nextVal);
10;
// 10 as string //Returns error
10; // -> doesn't return error because of unknown data type
// Assertion is veryuseful for DOM :-
//TS infered as HTMLImageElement | null
const img = document.querySelector("img"); // The ! is defined as the not null assertion (Because the TS already known the img has only two data type will return one is HTMLImageElement and the another one is null)
//TS will infer as HTMLElement | null
const myImg = document.getElementById("img"); //But here the TS will knlw only the HTMLElement not the HTMLImageElement, so we need to use the assertion "as"
const nextImg = document.getElementById("img2"); //This way will not work in TS file
img.src;
myImg.src;
nextImg.src;
export {};
