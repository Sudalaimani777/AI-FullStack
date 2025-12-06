//Task 1: Create a constructor function following ES5 naming conventions :-
function UserData(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getUserFullName = function () {
        return this.firstName + this.lastName;
    }
}

//Task 2: Use the 'new' keyword to create object instances from constructor
const personOne = new UserData("Sudalai", "mani");
console.log("Person One -> ", personOne.getUserFullName());

//Task 3: Understand 'this' keyword behavior in different contexts (global, function, object)

//"this" In function :-
function thisInFunction() {
    console.log("'this' in function -> ", this);
}
thisInFunction();

//"this" in global :-
console.log("'this' in global -> ", this);

// this.alert("this is the alert using this keyword");

//"this" in Object :-
const userDetails = {
    fName: "Sudalai",
    lName: "mani",
    getFullName: function () {
        //Creating the another function
        console.log(this.fName + this.lName) //Returns the object
        function anotherData() {
            console.log("'this' in inside the function and that function is inside the object -> ", this)
        }
        anotherData();
    }
}

userDetails.getFullName();