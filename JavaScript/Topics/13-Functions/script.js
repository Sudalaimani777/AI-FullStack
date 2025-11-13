/*The function has two phases
    i)Creation Phase.
    ii)Execution phase.
*/

//Function Statement or Function Declaration :-
//Creation Phase :-
function greet (user) {
    //Function Body
    return `Hello ${user}`;
};
//Execution Phase:-
console.log(greet("Mani"))

//Default Parameter
function add (a, b = 20) {
    return a + b;
}
console.log(add(2)); //Default value 20 added to the a. o/p - 22;
console.log(add(2, 300)); //Modify the default parameter 20 to 300;


// console.log(sum(2, 3)); //Throws an error 
//Function Expression :-
const sum = (a, b) => a + b;
console.log(sum(20, 30));