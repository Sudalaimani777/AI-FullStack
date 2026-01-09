// Task 1: Use filter() to get all even numbers from an array
const allNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const evenNumbers = allNumbers.filter(evenNum => evenNum % 2 === 0);
console.log("Original Number -> ", allNumbers);
console.log("Filter the even numbers only using filter -> ", evenNumbers);

// Task 2: Use filter() to find objects that match a condition (e.g., adults)
const allUsers = [
    {userName: "Sudalaimani", age : 22},
    {userName:"Immanuel Giffy", age: 22},
    {userName:"Subbiah Manju Raj", age: 23},
    {userName:"Kabilan", age: 16},
    {userName:"Suraj", age: 13},
    {userName:"Krishna", age: 17},
];

const onlyAdultUsers = allUsers.filter(adultAge => adultAge.age > 18 )
console.log(onlyAdultUsers);

// Task 3: Use filter() to get strings longer than a specific length which is greater than 6
const allCharacters = ["Sudalai", "Mani", "Immanuel Giffy", "Raj"];
const onlyCharLongerThanSix = allCharacters.filter(char => char.trim().length > 6);
console.log(onlyCharLongerThanSix);

// Task 4: Use filter() with Boolean to remove falsy values from an array
const allValues = [1,"Char", true, false, null, undefined, "", 0];
const onlyBoolean = allValues.filter(Boolean)
console.log(onlyBoolean);

// Task 5: Use filter() to search/find items that contain a specific text
const allNames = ["Sudalaimani", "Immanuel Giffy"];
const findSpecificCharacter = allNames.filter(name => name.trim() === "Sudalaimani");
console.log(findSpecificCharacter);