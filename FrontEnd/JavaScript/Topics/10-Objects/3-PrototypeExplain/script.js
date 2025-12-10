//Normal Prototype (Constructor function) :-
function normalConstructor (firstName, lastName){
    this.fName = firstName;
    this.lastName = lastName;
    this.getFullName = function (){
        return this.fName + this.lastName;
    }
}

const personOne = new normalConstructor("Sudalai", "mani");
// console.log(personOne);
//The "getFullName" method is inside the object not in the prototype
// console.log(personOne.getFullName());

//Creating the another person :-
const personTwo = new normalConstructor("Arun", "Kumar");
// console.log("Person Two -> ", personTwo);
// console.log("Calling the person two method -> ", personTwo.getFullName());

//Prototype :-
const arr = [1,3,4];
arr.forEach((value) => {
    // console.log(value);
})
// console.log(arr);

//There are two prototype in the "Object" which is "normal prototype" and the "Base prototpe", we only use the normal prototype. Don't touch the Base Prototype.

//Without Prototype :-
//This constructor has no methods
function WithoutProto (fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

//Consoling the Constructor's Prototype :-
console.log(WithoutProto.prototype); //Returns the empty object 


//Setting the "method" inside the "prototype" not inside the object
WithoutProto.prototype.getFullName = function () {
    return this.firstName + this.lastName;
}

const personArun = new WithoutProto("Arun", "Kumar");
//Now we can get the getFullName inside the "Prototype" not in the "Constructor (Object)" It actually "taking the reference of the method"
console.log("Method is inside the 'Prototype' not in the object itself -> ",personArun);