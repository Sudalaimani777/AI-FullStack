// Simple User Greeting & Age Categorizer
const userName = "Sudalaimani", userAge = 25;

const generateGreetings = (name, age) => {
    console.log(`
        Hello ${name}, Welcome
        ${age < 13 ? "You are a child." : "You are an adult"}
        `)
}

generateGreetings(userName, userAge);