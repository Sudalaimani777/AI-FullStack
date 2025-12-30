//Task 1 -> Fibonacci Series :-
function fibonacciSeries(n) {
    let a = 0, b = 1, series = [a, b];
    for (let i = 2; i < n; i++) {
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
        series.push(nextTerm);
    }
    return series;
}
console.log(fibonacciSeries(10));

//Task Two -> Removes the Duplicate number in the Array :-
function removeDuplicates(arr) {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9]));

//Easiest Method  for removing duplicates :-
let arrr = [1, 2, 2, 44, 44];
console.log("Duplicate Array -> ", arrr);
const newArr = new Set(arrr);
console.log("Using set object to remove duplicates -> ", [...newArr]);

function easyToRemoveDuplicates(arr) {
    let array = arr;
    return [...new Set(array)];
}
console.log(easyToRemoveDuplicates([1, 3, 3, 2, 2, 4, 4, 5, 5]));

//Task Three -> Create the program that sorths number ascending and desending order :-
function sortArray(array, orderOfArray = "ascending") {
    if (orderOfArray === "ascending") {
        return array.sort((a, b) => {
            return a - b;
        });
    }
    else if (orderOfArray === "desending") {
        return array.sort((a, b) => {
            return b - a;
        });
    }
    return array;
}
console.log("Desending Order -> ", sortArray([1, 3, 563, 35, 64543, 32], "desending"));
console.log("Ascending Order -> ", sortArray([1, 3, 563, 35, 64543, 32], "ascending"));

//Task Four -> Finds the odd and even number in an array :-
function findOrEven(arr) {
    let oddNumbers = [];
    let evenNumbers = [];
    arr.forEach(num => {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
    }
    );
    return { evenNumbers, oddNumbers };
}
console.log(findOrEven([1, 2, 3, 4, 5, 6, 7, 8]))

//Task 5 -> Function that merges two objects into one (Spread Operator) :-
function mergeTwoObjects(objectOne, objectTwo){
    return {...objectOne, ...objectTwo};
}

const defaultProfile = {
    theme: "Light",
    notification: true,
    language: "en"
}
const userPreferences = {
    theme: "Dark",
    notification: false
}

console.log(mergeTwoObjects(defaultProfile, userPreferences));

const defaultConfig = {
    timeout : 5000,
    headers:{
        "Content-Type": "application/json"
    }
}

const customConfig = {
    timeout: 10000,
    headers:{
        "Content-Type": "/api/users"
    }
}

const config = {
    ...defaultConfig,
    ...customConfig
}
console.log(config);

//Task -6 -> Function that takes the Array of names and returns those starting with A or a :-

function wordStartsWithA(arr){
    let Aarray = []
    let array = arr;
    array.forEach(value => {
        if(value.startsWith("A") || value.startsWith("a")){
            Aarray.push(value);
        }
    })
    return Aarray;
}

console.log(wordStartsWithA(["Ankush", "Kumaran", "Ankith", "arya"]));

//Task - 7 -> Function that returns the square of it :-

const squareOfTheNum = num => num * num;

console.log(squareOfTheNum(5));
console.log(squareOfTheNum(12));

//Task - 8 -> Use template literals to print, name, age and city :-
const printDetails = (userName, userAge, userCity) => `The user name is ${userName}, age is ${userAge} and city is ${userCity}`;

console.log(printDetails("Sudalaimani", 22, "Tuticorin"));

//Task 9 -> Function that returns only prime number in an array :-
function returnPrimeNum(arrNum){
    return arrNum.filter(num => {
        if(num <=1 ){
            return false;
        }
        if(num === 2){
            return true;
        }
        if(num % 2 === 0){
            return false;
        }
        for(let i =3; i <- Math.sqrt(num); i = i +2){
            if(num % i === 0){
                return false
            }
        }
        return true;
    });
}
console.log(returnPrimeNum([1,3,4,6,7,8,5,38,64,4,2]));

//Task 10 -> Convert Celsius to Fahrenheit :-
function celciusIntoFahrenheit(celcius){
    const fahrenheit = (celcius * 9/5) + 32;
    console.log(`The conversion of ${celcius}°C to fahrenheit is ${fahrenheit}°F`)
    return fahrenheit;
};
celciusIntoFahrenheit(100);