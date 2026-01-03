//Normal Function :-
const a = function(){
    console.log("Normal Function");
}


//IIFE (Immediately Invoked Function Expression) :-
const iife = (() => {
    console.log(`This is the IIFE`)
})();

const greet ="This is the greet which is in the outer of the IIFE";
console.log("Outer Greet -> ",greet)

const iifeFunction = (() => {
    //Private :-
    const x= 10;
    const greet= "This is the greet inside the modular iife"

    //We need to return the Private codes to access it in the outer
    return {
        x: x,
        userGreet: function(){
            return greet;
        }
    } 
})(); //Calling the function using the parenthesis "()"

console.log(iifeFunction.x);
console.log(iifeFunction.userGreet());