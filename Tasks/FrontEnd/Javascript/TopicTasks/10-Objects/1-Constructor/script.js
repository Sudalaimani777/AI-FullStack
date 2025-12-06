// //Task 1: Create a constructor function following ES5 naming conventions :-
// function UserData(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getUserFullName = function () {
//         return this.firstName + this.lastName;
//     }
// }

// //Task 2: Use the 'new' keyword to create object instances from constructor
// const personOne = new UserData("Sudalai", "mani");
// console.log("Person One -> ", personOne.getUserFullName());

// //Task 3: Understand 'this' keyword behavior in different contexts (global, function, object)

// //"this" In function :-
// function thisInFunction() {
//     console.log("'this' in function -> ", this);
// }
// thisInFunction();

// //"this" in global :-
// console.log("'this' in global -> ", this);

// // this.alert("this is the alert using this keyword");

// //"this" in Object :-
// const userDetails = {
//     fName: "Sudalai",
//     lName: "mani",
//     getFullName: function () {
//         //Creating the another function
//         console.log(this.fName + this.lName) //Returns the object
//         function anotherData() {
//             console.log("'this' in inside the function and that function is inside the object -> ", this)
//         }
//         anotherData();
//     }
// }

// userDetails.getFullName();

//Task 4: Implement methods inside constructor functions using 'this'
function BankAccount(accHolder, balanceAmount) {
    this.accountHolder = accHolder;
    this.bankBalance = balanceAmount;

    //Deposite Amount :-
    this.depositeAmount = function (amount) {
        if (amount > 0) {
            this.bankBalance += amount;
            return `Deposited Money -> $${amount}, Total Balance $${this.bankBalance}`;
        }
        else {
            retun`Invalid amount`
        }
    }
    //Check Bank Balance :-
    this.checkBalance = function () {
        return `The account holder name is ${this.accountHolder} having the balance amount of ${this.bankBalance}`
    }

    //WithDraw Amount :-
    this.withdrewAmount = function (amount) {
        if (amount > 0 && amount <= this.bankBalance) {
            this.bankBalance -= amount;
            return `The withdrawal amount is $${amount} the remaining balance is $${this.bankBalance}`
        }
        else {
            return `Something went wrong please check the amount and details`
        }
    }
    //Transfer Money to another bank account :-
    this.transaction = function (amount, accHolder) {
        if (amount > 0 && amount <= this.bankBalance) {
            this.bankBalance -= amount;
            accHolder.bankBalance += amount;
            return `The transferredd amonunt is $${amount} to the coustomer MR/MS ${accHolder.accountHolder}`
        }
        else {
            return `Transaction Failed`;
        }
    }

}


const maniAccount = new BankAccount("Sudalaimani", 100);
const raviAccount = new BankAccount("RaviMohan", 50);

//Checking the Bank Balance :-
console.log("Mani Account -> ", maniAccount.checkBalance());
console.log("Ravi Account -> ", raviAccount.checkBalance());
//Withdrawal :-
console.log(maniAccount.withdrewAmount(10));
console.log("Mani Account -> ", maniAccount.checkBalance());

//Transfer Money :-
console.log(maniAccount.transaction(20, raviAccount));
console.log(raviAccount.checkBalance())

console.log(maniAccount.checkBalance());

//Task 5: Create nested methods and understand lexical 'this' with arrow functions

const understandLexical = {
    obj: function () {
        console.log("This -> ", this);
        function insideMethod() {
            console.log("This is the inside method and it returns the global this  ->", this);
        }
        insideMethod();
    }
}
understandLexical.obj();

//To Avoid these kinda issue we can use the lexical this :-
const toAvoidTheGlobalThisInsideTheMethod = {
    obj: function () {
        console.log("this ->", this);
        //Lexical This (ES6 Arrow Functio) :-
        const avLexical = () => {
            console.log("Lexical this to catch the parent (method) ->" , this)
        };
        avLexical();
    }
}
toAvoidTheGlobalThisInsideTheMethod.obj();