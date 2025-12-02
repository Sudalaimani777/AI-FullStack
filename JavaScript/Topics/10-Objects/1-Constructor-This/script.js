//Constructor Rule :-
/**
 * 1) The first letter should be capital
 * 2) If we want to create the constructor into the object, we need to use the "new" as a keyword infront of the constructor name to assign it in the another variable
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