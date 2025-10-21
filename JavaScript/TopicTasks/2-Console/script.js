// Task 1: Use console.log() to display different messages
console.log("Message One");
console.log("Message Two");
console.log("Message Three");

// Task 2: Use console.error() to show error messages
console.error(`This is the error message`);

// Task 3: Use console.warn() to show warning messages
console.warn(`This is the warning message`);

// Task 4: Use console.info() to display information messages
console.info(`This is the informational message`);

// Task 5: Create a script that uses all console methods together
function allConsole (e) {
    console.log(e);
    console.error(e);
    console.warn(e);
    console.info(e);
}
allConsole("Hello JS");
