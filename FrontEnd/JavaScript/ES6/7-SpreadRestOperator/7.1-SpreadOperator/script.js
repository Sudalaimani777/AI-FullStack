// Spread operator EXPANDS an array or object into individual elements.It's like unpacking a suitcase and laying everything out! 🧳

//Old Method :-
console.log("---------- Old Method of Spread the array ----------");
const orginalArray = [1,2,3,4,5,6];
console.log("This is the original array -> ", orginalArray);

const copyOfTheOriginalArray = orginalArray; 
console.log("This is the copied array from the original array -> ", copyOfTheOriginalArray);
console.log("Now I push the value in the copied array, but the original array also changed because it was shallow copied, not an deep copy");
copyOfTheOriginalArray.push(7);

console.log("---------- After pushed the value in the copied array -----------");
console.log("Now again loggin the original array -> ", orginalArray);

//New Method :-
console.log("---------- ES6 of Spread ----------");
const orgFruitsArray = ["Apple", "Orange", "Grapes", "Kiwi"];
console.log("This is the original array of fruits -> ", orgFruitsArray);

const copiedFruitsArray = [...orgFruitsArray];
console.log("Now we spread the original fruits array using '...' to the copied of the fruits array to make an seperate individual 'new' array becuse of deep copy.Simply it creats an new instance of the original array");
copiedFruitsArray.push("Banana");

console.log("Successfully pushed the fruit in the copied fruits array.Now we check both the original fruit array and the copied fruit array");
console.log("After fruit was pushed Original Array -> ", orgFruitsArray);
console.log("After fruit was pushed copied Array -> ", copiedFruitsArray);

console.log("---------- Examples ----------");

console.log("---------- Combining Arrays ----------");

const animeRecommendOne = ["Naruto", "One Piece", "Bleach"];
console.log("Anime Recommended One -> ", animeRecommendOne);
const animeRecommendTwo = ["Komi can't communicate", "Your lie in april", "I want to eat your pancreas", "5 centimeters per seconds"];
console.log("Anime Recommended Two -> ", animeRecommendTwo);

console.log("Combining Both Anime Arrays");
const animeAllJournal = [...animeRecommendOne, ...animeRecommendTwo];
console.log("Combination of all recommended animes -> ", animeAllJournal);

//Adding Elements :-
console.log("---------- Adding Elements ----------");
const numbers = [2, 3, 4];
console.log("This is the number array -> ", numbers);
console.log("Now we are adding more numbers, but we need the numbers array values");
const moreNumbers = [1,...numbers, 5, 6];
console.log("Now we added the moreNumbers array and spreaded the numbers array -> ", moreNumbers);

//Spreading with strings :-
console.log("---------- Spreading With Strings ----------");
const string = "Hello"
console.log("This is the original string -> ", string);
const spreadTheString = [...string];
console.log("This is the spreaded string that is converted into each characters of array -> ", spreadTheString);

//Math Operation :-
console.log("---------- Math Operation ----------");

const allNums = [1,2,3,4,5,6,7,8,9,10];
console.log("This is the all numbers array -> ", allNums);

const maxNums = Math.max(...allNums);
console.log("This is the array which contains the maximum values in the all nums array -> ", maxNums);

const minNums = Math.min(...allNums);
console.log("This is the array which contains the minimum values in the all nums array -> ", minNums);