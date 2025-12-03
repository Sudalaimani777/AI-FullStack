//Constructor Rule :-
/**
 * 1) The first letter should be capital.
 * 2) If we want to create the constructor into the object, we need to use the "new" as a keyword infront of the constructor name to assign it in the another variable.
 * 3) The constructor creates the instances of the object.
 */

//ES5 :-
//Created the constructor (Function)
function UserName(fName, lName, address) {
    console.log("This is the constructor function");
    this.fName = fName;
    this.lName = lName;
    this.getUSerData = function () {
        this.address = address;
        return address;
    }
    this.getFullName = function(){
        return this.fName + " " + this.lName;
    }
}

//Assignin the constructor to the another variable as an "Empty Object" :-
//The "new" points to the parent
let personOne= new UserName("a", "b", "2"); //Assigning the Values to the parameter in the UserName constructor
console.log(personOne);
console.log(personOne.getUSerData());

//Creating the Another Instance of  the Constructor Object :-
const personTwo = new UserName("Arun", "Kumar", "19/4 Ranasurettunayakkanpatti Ettaiyapuram");
console.log(personTwo.getFullName());
console.log("Person Two Address ->", personTwo.getUSerData());

//Global Scope :-
// "this" points to the window object :-
console.log(this);

//It has all in-built methods
// this.alert("123");

//this === window

//Normal Function inside the object :-
function normal () {
    console.log("This is the normal function but we called 'this'  keyword ->", this);
}
normal();

//"this" in the object :-
const thisInObject = {
    a : "A Key and a value (Return the parent (Own object itself)",
    b: function(){
        console.log(this);
        return this.a;
    }
}
console.log(thisInObject.b());

const singleThis = {
    k : function(){
        return "This returns the own object ->", this;
    }
}
console.log(singleThis);

//Neated Method inside the object :-
const nestedMethod = {
    //key -> Method
    key: function(){
        console.log("key ->", this); //Returns the object nestedMethod
    //But inside the 'key' method we have the seperate function :-
    function seperateFunction(){
        console.log("Nested function inside the method -> ", this); //Returns the window object because it is an normnal function
    }
    seperateFunction();
    }
}
nestedMethod.key();

// nestedMethod.key() -> this === nestedMethod
// inside key() -> seperateFunction === Standalone call, so here "this" returns the "window object";

//To fix the issue we can use the "Lexical this" :-
const fixTheIssue = {
    lexical: function(){
        console.log("Inside the normal method which returns the object itself -> ", this);
        // function lexicalThis (){} // Returns the window object, so we can use the arrow function to access the object itsel using "this";
        const lexicalThis = () =>{
            console.log("The arrow functio returs the onject if it was placed inside the method -> ", this);
        }
        lexicalThis()
    }
}
fixTheIssue.lexical();