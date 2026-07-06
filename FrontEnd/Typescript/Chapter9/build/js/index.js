// Utility Types :-
// Partial :-
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assignOne = {
    studentId: 1,
    title: "English",
    grade: "O"
};
console.log(updateAssignment(assignOne, { grade: "A" }));
const assignGraded = updateAssignment(assignOne, { grade: "O" });
// Require and ReadOnly :-
const recordAssignment = (assign) => {
    return assign;
};
const assignTwo = {
    studentId: 2,
    title: "Tamil",
    grade: "A",
};
// console.log(recordAssignment(assignOne)) //Throws an Error cz the assignOne doesn't have the verified key and its value
console.log(recordAssignment(Object.assign(Object.assign({}, assignTwo), { verified: true })));
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
const studentGrades = {
    Kelly: "A",
    Alok: "O",
    Maxim: "A"
};
const gradeData = {
    Kelly: { gradeOne: 89, gradeTwo: 90 },
    Alok: { gradeOne: 96, gradeTwo: 90 },
    Maxim: { gradeOne: 90, gradeTwo: 90 }
};
const assignPreview = {
    studentId: 3,
    grade: "A",
};
const omitAssign = {
    studentId: 4,
    title: "Hii",
};
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("");
        const data = yield response.json();
        return data;
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
});
export {};
