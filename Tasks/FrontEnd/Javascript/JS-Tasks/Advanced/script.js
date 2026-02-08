//1. Write a function that reverses a string:-
const reverseString = () => {
    const userInput = prompt(`Enter the character to revers the string`);
    const char = userInput.split("");
    const reverseString = char.reverse();
    const reversed = reverseString.join("");
    console.log(reversed);
    const alertMessage = alert(`The reversed string of ${userInput} is ${reversed}`);
}
// reverseString();

//2. Create a function that returns the largest number in an array :-
const numbers = [3, 5, 7, 2, 8, 20];
const findLargestNumber = (array) => {
    if(array.length === 0){
        return "Empty Array";
    }
    let largestNum = array[0]
    for(let i = 0 ; i<= array.length ; i++){
        if(array[i] > largestNum){
            largestNum = array[i];
        }
    }
    console.log(largestNum)
    return largestNum;
}
findLargestNumber(numbers);

//3. Write a custom 'myMap' function like Array.map:-
function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const number = [1, 2, 3, 4, 5];
const doubledNum = myMap(number, function(num) {
  return num * 2;
});
console.log("Real array:", number);
console.log("After myMap:", doubledNum);

//4.  Create a function to check if a string is palindrome:-
const checkPalindrome = () => {
    const gettingCharFromUser = prompt(`Enter the string to check whether it is palindrome or not`);
    const data = gettingCharFromUser.toLowerCase();
    console.log(data);
    const checkPalindrome = data.split("").reverse().join("");
    console.log(checkPalindrome);
    const result = data === checkPalindrome ? alert(`The given word ${gettingCharFromUser} is a palindrome`) : alert(`The given word ${gettingCharFromUser} is not a palindrome`);

}
// checkPalindrome();

// 5. Create a function that counts vowels in a string:-
//i)Using Regular Loop :-
const countVowelsUsingLoop = () => {
  const userInput = prompt(`Enter the word to find how many vowels`);
  const checkUserInput = userInput.trim();
  const vowels = "aeiouAEIOU";
  let counter = 0;
  for(let i = 0; i < checkUserInput.length ; i++){
    if(vowels.includes(checkUserInput[i])){
      counter++
    }
  }
  console.log(`The number of vowels in a string ${userInput} is ${counter}`);
  return counter;
}
// countVowelsUsingLoop();

//ii)Using Regular Expression :-
const countVowels = () => {
    const userInput = prompt(`Enter the string to count the number of vowels`);
    const vowels = userInput.match(/[aeiou]/gi);
    const count = vowels ? vowels.length : 0;
    console.log(`The number of vowels in the string "${userInput}" is: ${count}`);
}
// countVowels();

//6. Use ternary operator to check age > 18 and print 'Adult' or 'Minor':-
//i)
const checkUserAge = () => {
  const userInput = prompt(`Enter your age to validate if you are a minor or not`);
  const data = Number(userInput);
  const validation = data > 18 ? alert("Congrats you are a Adult") : alert(`You are not an adult`);
}
// checkUserAge();

//ii)
const checkUserMinorOrAdult = () => {
   const userBirthYear = prompt(`Enter your birth year to check you are an adult or not`);
   const adultAge = 18;
   const currentYear = new Date().getFullYear();
   const calculatedUserAge = currentYear - Number(userBirthYear);
   if(adultAge < calculatedUserAge){
    alert(`Congrats You are an Adult`);
   }
   else{
    const remainingYears = adultAge - calculatedUserAge;
    alert(`You are not an adult, you need ${remainingYears} years to become an adult`)
   }
}
// checkUserMinorOrAdult();

// 7. Create nested object and print one inner property:-
const nestedObject = {
  name: "K.Sudalaimani",
  age: 22,
  address:{
    doorNo: "19/4",
    street: "East Street",
    city: "Ettaiyapuram"
  }
}
console.log(nestedObject.address.city);

//8. Use forEach to print all elements of an array:-
const array = [1, 2, 3, 4, 5];
array.forEach((element) => {
  console.log(element)
})

//9. Create a function that sums all numbers in array using reduce:-
//i)
const reduceMethod = [1, 2, 3, 4, 5].reduce((a, b) => a + b);
console.log(reduceMethod)
//a - accumulator(stores the ongoing total)
//b- current element

//ii)
const trying = () => {
  arr = [1, 3, 4, 5];
  const total = arr.reduce((a, b) => a + b);
  console.log(total);
}
trying();

// 10. Combine two arrays using spread operator:-
const arrOne = [1, 2, 3, 4];
const arrTwo = [5, 6, 7, 8];
const combinedArray =[...arrOne ,...arrTwo]
console.log(combinedArray);
//OR
const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];
arrayOne.push(...arrayTwo);
console.log(arrayOne);

// Largest num in the Array :-
const findLargestNum = (arr) => {
    let mavValue = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > mavValue){
            mavValue = arr[i];
        }
    }
    return mavValue;
}
console.log("The largest number in the array is ->", findLargestNum([1,3,4,6,7,8,9,34,21]));