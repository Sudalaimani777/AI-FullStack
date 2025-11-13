// Topic 10: Objects - placeholder script
// Add your practice code here.
const userData = {
    userName: "Sudalaimani",
    userAge: 22,
    status: "Student",
    userInterest: [
        {
            games: {
                indoorGames: ["FreeFire", "Clash of Clans", "Dream Cricket"],
                outdoorGames: ["Cricket", "Kabaddi"]
            },
            studies: {
                "College": "ECE",
                extrernalStudies: "Web Development"
            }
        }
    ],
    address: {
        streetNo: "19/4",
        street: "East Street",
        "city": "Ettaiyapuram"
    },
    greet: function () {
        return `The user name is ${this.userName} and his age is ${this.userAge}`
    }
};

// Task 1: Create an object with nested properties and access them
console.log(userData);
console.log(userData.userName);
console.log(userData.userInterest);
console.log(userData.userInterest[0].games.indoorGames[0]);
console.log(userData.userInterest[0].games.outdoorGames[0]);
console.log(userData.userInterest[0].studies.extrernalStudies);

// Task 2: Add methods to the object and call them
//In JavaScript, methods are functions that are properties of an object.
/*
i)Object Literal :-
These are the most common, defined directly inside an object.
*/
const data = {
    userName: "Sudalalaimani",
    greet: function () {
        return `Hello, ${this.userName}`
    }
}
console.log(`Object LIteral Method - ${data.greet()}`);

const datas = {
    user: "SUdlaimani",
    greet: function () {
        return `Hello ${this.user}`;
    }
}
console.log(datas.greet());

/*
ii)Shorthand Method Syntax (ES6)

These are the most common, defined directly inside an object.
*/
const shortHandMethod = {
    userName: "Arun",
    greet() {
        return `Hello, this is surya ${this.userName}`;
    }
}
console.log(`Shorthand Method Syntax (ES6) - ${shortHandMethod.greet()}`);

/*
iii)Arrow Function Methods :-

You can assign an arrow function to an object property. Note: Arrow functions do not have their own this; they inherit it from the surrounding scope.
✅ Important: Avoid using arrow functions for object methods if you need to access this.

*/
const arrowFunctionMethod = {
    userName: "Sudalaimani",
    greet: () => {
        const userName = "Mani";
        return `Hello, ${userName}`; //Return Hello, Mani
        // return `Hello, ${this.userName}`; //Return Hello, undefined
    }
}
console.log(arrowFunctionMethod.greet());

//Task 3: Use object destructuring to extract values
//Destructuring is the method which is used to extract the value in the variable in the object and store it into the seperate variable 
const { userName, userAge, status } = userData;
console.log(`Using Object destructuring and accessing the value in the object ${userName, userAge, status}`);
//We can also change the name of the key as well
const { userName: Name, userAge: Age } = userData;
console.log(`Modified user name and age ${Name, Age}`);


//Task 4: Iterate over object keys and values
//We can use for...in loop to iterate over the object keys and values
for (let key in userData) {
    console.log(`Key: ${key}, Value: ${userData[key]}`);
}

for (let keys in userData) {
    console.log(`The key is ${keys} and the value is ${userData[keys]}`);
}
//Task 5: Convert object to JSON and back to object
//Convert object to JSON string

//JSON.stringify() method is used to convert a JavaScript object or value to a JSON string.

const objectToJSON = JSON.stringify(userData);
console.log(`The object to json is ${objectToJSON}`);

//Convert JSON string back to object:-
//JSON.parse() method is used to parse a JSON string and convert it into a JavaScript object.
const jsonToObject = JSON.parse(objectToJSON);
console.log(`The JSON to object is ${jsonToObject}`);