// Task 1: Use reduce() to calculate the sum of all numbers in an array
const nums = [1,2,3,4,5,6,7,87,100,8,9];
const total  = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);
console.log(total);

// Task 2: Use reduce() to find the maximum or minimum value in an array
const maxValue = nums.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
}, 0);
console.log(`The maximum value in the array is ${maxValue}`);

// Task 3: Use reduce() to count occurrences of items in an array
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
},{})

console.log(count);

// Task 4: Use reduce() to flatten a nested array into a single array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, currentValue) => acc.concat(currentValue),[]);
console.log("Nested Arry -> ", nested);
console.log("Combine all the nested array into the single array -> ", flat);

// Task 5: Use reduce() to group objects by a specific property
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 25 }
];

const grouped = users.reduce((acc, user) => {
  const key = user.age;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(user);
  return acc;
}, {});

console.log(grouped);