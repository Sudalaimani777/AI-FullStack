// Global Name:-
var globalName = "Sudalaimani";

// Normal Function :-
function welcomeUser(userName) {
    let messagePrefix = "Varun";
    console.log(`Welcome ${userName}`);
}
welcomeUser(globalName);

// Arrow Function :-
const farewellUser = userName => `Good bye ${userName}`;
console.log(farewellUser(globalName));

// Closure :-
const createGreetingGenerator = (greetingType) => {
    return (name) => {
        return `${greetingType}, ${name}`
    }
}

console.log(createGreetingGenerator("Hii")("Sudalaimani"));