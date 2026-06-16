// A class is the blueprint for creating the object that encapsulate the data(properties) and behaviour (methods).
//public -> (Where it can be seen) It controls the visibility. Anyone, anywhere in the codebase can access this property
//private -> private modifier controls visibility. It ensures that a property or method can only be accessed from within the specific class where it was defined
//readonly ->  (What can be done to it): It controls mutability. It prevents the property from being assigned a new value after the class instance is initialized
// protected -> protected modifier is the middle ground between public and private. It controls visibility based on inheritanc
//  ! -> ! symbol is known as the Definite Assignment Assertion. It is used directly on a class property to tell TypeScript: "I know this property isn’t initialized right now, but I promise it will be assigned a value before anyone tries to read it. Do not give me a compiler error. 
// Traditional Method :-
// class StudentInfo {
//     constructor(name: string, email: string, age: number) {
//         this.name = name
//         this.email = email
//         this.age = age
//     }
//     name: string
//     email: string
//     age: number
// }
// Using Modifiers :-
class StudentInfo {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        // We can also provide the default value
        this.name = name;
        this.age = age;
        this.email = email;
        // this.language = language = "Tamil"
    }
    getEmail() {
        return this.email;
    }
}
const studentOne = new StudentInfo("Sudalaimani", 23, "sudalaimani5112007@gmail.com");
console.log(studentOne);
// console.log(studentOne.language) //Return error beacuse the language is only accessible by the StudentInfo only
console.log(studentOne.getEmail());
// Extends :-
class StudentData extends StudentInfo {
    constructor(name, age, email, standard) {
        super(name, age, email);
        this.name = name;
        this.age = age;
        this.email = email;
        this.standard = standard;
        this.standard = standard;
    }
    getName() {
        return `Welcome ${this.name}`;
    }
}
const Surya = new StudentData("Varun", 23, "varun@example.com", "12th");
console.log(Surya.getName());
export {};
