// Utility Types :-
// Partial :-

type Assignment = {
    studentId: number,
    title: string,
    grade: string,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assignOne: Assignment = {
    studentId: 1,
    title: "English",
    grade: "O"
}

console.log(updateAssignment(assignOne, { grade: "A" }))
const assignGraded: Assignment = updateAssignment(assignOne, { grade: "O" });

// Require and ReadOnly :-
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}

const assignTwo: Assignment = {
    studentId: 2,
    title: "Tamil",
    grade: "A",
}

// console.log(recordAssignment(assignOne)) //Throws an Error cz the assignOne doesn't have the verified key and its value
console.log(recordAssignment({ ...assignTwo, verified: true }))

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

// assignVerified.grade = "C" //Returns an Error cz we can only read the values in the assignVerified Variable

// Record :-
type Student = "Kelly" | "Alok" | "Maxim";
type Grades = "O" | "A" | "B" | "C" | "U";

const studentGrades: Record<Student, Grades> = {
    Kelly: "A",
    Alok: "O",
    Maxim: "A"
}

// Using Interface :-
interface NumGrades {
    gradeOne: number,
    gradeTwo: number
}

const gradeData: Record<Student, NumGrades> = {
    Kelly: { gradeOne: 89, gradeTwo: 90 },
    Alok: { gradeOne: 96, gradeTwo: 90 },
    Maxim: { gradeOne: 90, gradeTwo: 90 }
}

// Pick And Omit :-
type AssignPreview = Pick<Assignment, "studentId" | "grade">;

const assignPreview: AssignPreview = {
    studentId: 3,
    grade: "A",
}

type OmitAssign = Omit<Assignment, "grade" | "verified">;

const omitAssign: OmitAssign = {
    studentId: 4,
    title: "Hii",
}

// Exclude and Extract :-
type ExcludeGrade = Exclude<Grades, "U"> //Removes the Values that are in the union in the variable

type ExtractGrade = Extract<Grades, "O" | "A" | "B" | "C"> //Holds the specific value that is in the Union type "Grade"

// NonNullable :-
type AllNames = "Varun" | "Kumar" | "Rajesh" | null | undefined;

type OnlyNames = NonNullable<AllNames>;


// Promise (Await) :-
type User = {
    id: number,
    name: string
    username: string,
    email: string,
}

const fetchUser = async (): Promise<User[]> => {
    try {
        const response = await fetch("");
        const data = await response.json();
        return data;
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message)
        }
    }
}