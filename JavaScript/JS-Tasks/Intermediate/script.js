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
const countVowels = () => {
    
}