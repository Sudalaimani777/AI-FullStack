// reduce() is an array method that executes a reducer function on each element of the array, resulting in a SINGLE OUTPUT VALUE. It "reduces" an array to a single value.

//Syntax :-
// const reduceArr = array.reduce(callback(accumulator,currentValue, currentIndex, orgArray), initialValue);

const num = [1,2,3,5,5,6,87,10].reduce((accumulator, currentValue, currentIndex, orgArray) => {
    console.log("Accumulator -> ", accumulator);
    console.log("Current Value -> ", currentValue);
    console.log("Current Index -> ", currentIndex);
    console.log("Original Array -> ", orgArray);
}, 0);

const addTotal = [15,545,7988,6545].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(addTotal);