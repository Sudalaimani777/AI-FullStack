// Literal Types :- (Used to specify the value that the variable can exaactly holds)
let userName;
// userName = "Varun" //Returns Error, because the variable can only accepts the name Sudalaimani
let userId;
userId = "1";
console.log(userId);
let directions;
directions = "East";
const moveDirection = (dir) => `Move ${dir}`;
console.log(moveDirection("West"));
// Functions :- with Return
const add = (a, b) => a + b;
console.log(add(2, 3));
// Function without return (void) :-
const greetUser = (user) => {
    console.log(user.name);
};
greetUser({ name: "Sudalaimani" });
export {};
