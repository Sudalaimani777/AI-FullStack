//Prototype Inheritance :-
function UserData (fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

//Person One
const personOne = new UserData("Sudalai", "mani");
console.log(personOne);

//Adding the metod inside the Prototype :-
UserData.prototype.greeting = function (){
    return `Hello ${this.firstName + this.lastName}`;
}

console.log(personOne);
console.log(personOne.greeting());

UserData.prototype.getFullName = function () {
    return this.firstName + this.lastName;
}

//Creating the Another Constructor :-
function Coustomer (fName, lName, email){
    //We already have the 'getFull' in the "UserData" constructor, so we can call the getFullName inside the Coustomer constructor
    UserData.call(this,fName, lName); //The first parameter is the "this" which calls the "UserData" constructor itself, the next parameter is the called "this.firstName = fName" and "this.lastName = lName"
    this.email = email;
}

const customerOne = new Coustomer("Kumar", "Sankakara", "123@gmail.com");
console.log(customerOne);

// console.log(customerOne.greeting()); //Returns TypeError because the greeting() method has only in the UserData prototype.

//So, We need to inherit the greeting() method to the Customer constructor.
Coustomer.prototype = Object.create(UserData.prototype);  //The "Object.create()" takes only a "object" or an empty object which is null {}

console.log(customerOne);

//Customer Two :-
const customerTwo = new Coustomer("Arun", "Prasad", "sadfk@gmail.com");

//Now we can access the "greeting() and the getFullName()" in the Customer constructor.
console.log("access the 'greeting()' ->",customerTwo.greeting());