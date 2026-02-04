//2.1 - Print Even Or Odd :-

function printOddOrEven  (num) {
    for(let i = 0; i <= num; i++){
        if(i % 2 === 0){
            console.log(i + " is Even");
        }
    }
}
printOddOrEven(10);

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
