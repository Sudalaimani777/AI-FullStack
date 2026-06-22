// Index Signature :-
// In typescript index signature defines the type of the object properties when we not know the exact property names, but we know the shape of the keys and the value in the object. Used to handle dynamic data structures safely.

// Without Index Signature :-
interface Transactions { //Here the structure is same like the values have a consistent data type of number
    Pizza: number,
    Books: number,
    Job: number
}

const todayTransaction: Transactions = {
    Pizza: 200,
    Books: 80,
    Job: 1000
}
console.log("-----Normal Object-----")
console.log(todayTransaction)


// So we know the structure of the object, it contains the values of only numbers, so we created the Index signature
interface Subjects {
    [subject: string]: number;
}

const classTenthStudentOne: Subjects = {
    tamil: 80,
    english: 75,
    maths: 60,
    science: 78,
    social: 83
}

// We can also add the properties dynaamcally :-
classTenthStudentOne.sports = 79;

console.log("-----Index Singature-----");
console.log(classTenthStudentOne);

// We can decide the value of the key has readonly or not by using the readonly
interface Users {
    readonly [userNames: string]: string
}

const userNames: Users = {
    varun: "Kumar"
}

// userNames.varun = "Dev" // Returs an error

//One of the main disadvantage of the index signature is, if the object have the key, but the user tries to access the key the TS won't throws an error, but simply returns the "undefiend"
// console.log(userNames["Tharun"]) //Returns undefined

// We can also combine the both index signature and the normal interface together :-
interface UserInfo {
    [userName: string]: string,
    Bob: string,
    Kim: string,
    Joe: string,
}

const userInfo: UserInfo = {
    Bob: "Hey Bob",
    Kim: "Hey Kim",
    Joe: "Hey Joe"
}

interface Student {
    [data: string]: number | string | number[] | undefined,
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Sudalaimani",
    GPA: 8.7,
    classes: [200, 300]
};

console.log(student["test"]) //Returns undefined