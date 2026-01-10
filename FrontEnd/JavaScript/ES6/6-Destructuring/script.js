// Destructuring is a fancy way to UNPACK values from arrays or properties from objects into separate variables! It's like taking things apart to make them easier to use.

//In destructuring there are two types such as "Object Destructuring" and "Array Destructuring"

//Syntax :-

// const [variable1, variable2, variableN] = Array;

//1) Array Destructuring :-

//OLd Method :-
const colors = ["Red", "Orange", "Green", "Yellow"];
const redColor = colors[0];
const orangeColor = colors[1];
const greenColor = colors[2];
const yellowColor = colors[3];

console.log("---------- Older Destructuring ----------");

console.log("Old Method to access, extract and store the data in the seperare cariable -> ", redColor);
console.log("Old Method to access, extract and store the data in the seperare cariable -> ", orangeColor);
console.log("Old Method to access, extract and store the data in the seperare cariable -> ", greenColor);
console.log("Old Method to access, extract and store the data in the seperare cariable -> ", yellowColor);

console.log("---------- ES6 Destructuring ----------");

//ES6 Method :-
const [colorRed, colorOrange, colorGreen, colorYellow] = colors;
console.log("Newer method to seperate the values and store it into the variables -> ", colorRed);
console.log("Newer method to seperate the values and store it into the variables -> ", colorOrange);
console.log("Newer method to seperate the values and store it into the variables -> ", colorGreen);
console.log("Newer method to seperate the values and store it into the variables -> ", colorYellow);

//Skip the Values :-

//In destructuring we easiyl skip the specific elements in the array by simply using the comma ","

const numbers = [1,2,3,4,5,6,7,8,9,10];
const [varOne,,varTwo] = numbers;

console.log("---------- Skip Elements by Destructuring ----------");
console.log("Skip the element by using the destructuring method -> ", varOne);
console.log("Skip the element by using the destructuring method -> ", varTwo);

//Set the default values to the destructured variables :-
const num = [1];
const [a, b = 2] = num;

console.log("---------- Set Dafault values to the variable ----------");
console.log(a);
console.log("In the num array we don't have the more than one index, so in the destructuring process we created the new variable and assign the value -> ",b);

//Swap the Variables :-
console.log("---------- Swap Variables ----------");
const firstName = "Sudalai";
const lastName = "Mani";

function swapFirstAndLastNameAndAssignItInTheVariable(fName, lName){
    return [fName,lName] = [lName, fName];
}
console.log(swapFirstAndLastNameAndAssignItInTheVariable(firstName,lastName));

//Nested Array Destructuring :-
console.log("---------- Nested Array ----------");
const nestedArray = [1,[2,3,4],[5,6]];
console.log("Original Nested Array -> ", nestedArray);

const [na,[nb,nc,nd],[,nf]] = nestedArray
console.log("Destructured the nested Array -> ", na);
console.log("Destructured the nested Array -> ", nb);
console.log("Destructured the nested Array -> ", nc);
console.log("Destructured the nested Array -> ", nd);
console.log("Destructured the nested Array -> ", nf);

//Real Example :-
function getCoordinates (){
    return [2.4444,-5.968];
}
const [lat,long] = getCoordinates();
console.log("---------- RealTime Example ----------");
console.log(lat);
console.log(long);


//Object Destructuring :-

// Extracting properties from an object and assigning them to variables.

//SYNTAX :-
// const {varOne, varTwo} = Object;

const person = {
    userFirstName:"Sudalai",
    userLastName:"mani",
    age:22,
    isAlive:true,
    parent:{
        fatherName:"Kannan",
        motherName:"Karpagam"
    }
}

console.log("Person Object -> ", person);

//Old Method of Destructuring :-
console.log("---------- Object Destructuring Old Method -----------");
const userFirstNames = person.firstName;
const userLastNames =person.lastName;
console.log("This is the older method of destructure the value and assign the value in the new variable -> ", userFirstNames);
console.log("This is the older method of destructure the value and assign the value in the new variable -> ", userLastNames);

console.log("---------- ES 6 Object Destructuring ----------");

const {userFirstName, userLastName} = person;
console.log("This is the new 'ES6 method' to extract the values and assign these values in the seperate variable -> ", userFirstName);
console.log("This is the new 'ES6 method' to extract the values and assign these values in the seperate variable -> ", userLastName);

//Examples :-

//Simple Destructuring :-
console.log("-------- Basic Example --------");
const {age, isAlive} = person;
console.log(age);
console.log(isAlive);

//Rename Variables :-
console.log("-------- Rename Variables ----------");
//We can also rename the variable name by using the classic method of making it as a key :-
const product = {id:1,product:"Laptop"};
const {id:idNumber,product:productName} = product;  //Here the id variable was changed "id" into a new variable called "idNumber";
console.log("The 'id' variable was changed into the 'idNumber' ->",idNumber); 
console.log("The 'product' variable was changed into the 'productName' ->",productName); 

//We can Also add the new value in the object :-
const {address = "19/4, Ettaiyapuram"} = person;
console.log('We can add the new variable in the object -> ', address);

//If the key is not present in the object, it returns "undefined";

const {products} = person;
console.log("This 'products' variable which is a key, that is not avaliable in the 'person' object -> ", products);

//Nested Object Destructuring :-
console.log("---------- Nested Object Destructuring ----------");

const {parent:{motherName, fatherName}} = person;
console.log("We can access the nested variables by using the parent key then use an another curly braces {} to carete an seperate variable");
console.log(motherName);
console.log(fatherName);

//Combine the Array and Object Destructuring together :-
const data = [
    {name:"Kumar", status:"Student"},
    {name:"Arun", status:"Influencer"},
    {name:"Ragu", status:"Employee"},
]
console.log("Original Array which contains the multiple objects -> ", data);
//First Destructured the first object in the data array :-
const [dataOne, dataTwo] = data;
console.log("Destructured the array and accessed the first object -> ", dataOne);
console.log("Destructured the array and accessed the second object -> ", dataTwo);
console.log("Destructured Object in the Array");
//Using the dataOne object, we can destructure the object :-
var {name, status} = dataOne;
console.log("Extracted the variables in the object -> ", name)
console.log("Extracted the variables in the object -> ", status);

//Main thing -> we cannot reassign the values in the destructured variables.If we assigned it stays the original data not the updated one.
var {name = "Arul"} = dataTwo;
console.log(name); //It will print the original name "Arun" not the updated one "Arul"
console.log("It will print the original name 'Arun' not the updated one 'Arul'");