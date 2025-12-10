//ES6 Classes :-

//Defining the Class :-
class UserData{
    constructor(firstName, lastName){
        //Property :-
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //Methods :- The below "getFullName" gives the Method in the object (direct object) not in the "prototype" itself, to add the method inside the prototype, we cannot use the "function"
    /**
     *  getFullName = function (){
        return `${this.firstName + this.lastName}`
        }
     */

    //Correct way to add the "Method" inside the prototype
    getFullName(){
        return `${this.firstName + this.lastName}`;
    }

    greet(){
        return `Welcome ${this.firstName + this.lastName}`;
    }
}

const personOne = new UserData("Sudalai", "mani");
console.log(personOne);
console.log(personOne.getFullName());


//Inheritance in ES6 :-

//Creating the new Constructor :-
//I need the customer greet but the greet method in the 'UserData' constructor
class Customer extends UserData{
    constructor(firstName, lastName, email){
        super(firstName, lastName);
        this.email = email
    }
}

const customerOne = new Customer("Prakash", "raj", "sdsaik@gmail.com");
console.log(customerOne);

//The 'extends', extends all the methods to the another classes. The "super" calls the property of the called Constructor (UserData)