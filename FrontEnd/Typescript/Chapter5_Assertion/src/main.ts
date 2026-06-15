// Asserttion :-
/**
    It is the way to tell the TS compiler to treat the value as a specific type when we have more info about that value than the TS can infer
    It is a compile-time construct only and does not perform any runtime type conversion or validation.
    Simply -> We are instructing the Typescript, "I know the actual type of this value", so use this type for type checking
 * */

type One = string;
type Two = string | number;
type Three = "Sudalaimani"

// Syntax 1 (Recommended)
// Convert more or less Specific :-
let a: One = "Hii";
let b = "Bye" as Two; //Less Specific (Two Types "str" and "num")
console.log(b);
let c = "Varun" as Three; //More Specific (only str)
console.log(c)

// Syntax 2
// let d = <One>8 //Returns Error
let d = <One>"Bala" //Not recommended
console.log(d)

// Also we can directly use the types inside the ankel brackets
let e = <string | number>"Kishore"
console.log(e);

// Real World Example :-
const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") return "" + a + b
    return "" + a + b
}
const numOne: string = addOrConcat(2, 4, "add") as string
console.log(numOne)

// Be careful! TS sees no problem - but a string is returned
const nextVal: number = addOrConcat(2, 2, "concat") as number;
console.log(nextVal)

10 as number
// 10 as string //Returns error
10 as unknown as string // -> doesn't return error because of unknown data type

// Assertion is veryuseful for DOM :-
//TS infered as HTMLImageElement | null
const img = document.querySelector("img")! // The ! is defined as the not null assertion (Because the TS already known the img has only two data type will return one is HTMLImageElement and the another one is null)
//TS will infer as HTMLElement | null
const myImg = document.getElementById("img") as HTMLImageElement //But here the TS will knlw only the HTMLElement not the HTMLImageElement, so we need to use the assertion "as"
const nextImg = <HTMLImageElement>document.getElementById("img2") //This way will not work in TS file

img.src;
myImg.src;
nextImg.src;