// Index Signature :-
// In typescript index signature defines the type of the object properties when we not know the exact property names, but we know the shape of the keys and the value in the object. Used to handle dynamic data structures safely.
const todayTransaction = {
    Pizza: 200,
    Books: 80,
    Job: 1000
};
console.log("-----Normal Object-----");
console.log(todayTransaction);
const classTenthStudentOne = {
    tamil: 80,
    english: 75,
    maths: 60,
    science: 78,
    social: 83
};
// We can also add the properties dynaamcally :-
classTenthStudentOne.sports = 79;
console.log("-----Index Singature-----");
console.log(classTenthStudentOne);
const userNames = {
    varun: "Kumar"
};
const userInfo = {
    Bob: "Hey Bob",
    Kim: "Hey Kim",
    Joe: "Hey Joe"
};
const student = {
    name: "Sudalaimani",
    GPA: 8.7,
    classes: [200, 300]
};
console.log(student["test"]); //Returns undefined
export {};
