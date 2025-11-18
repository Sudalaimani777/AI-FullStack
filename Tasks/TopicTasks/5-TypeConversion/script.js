// Task 1: Convert string to number using Number() and parseInt()
const str = "Sudalaimani";
const strToNum = Number(str);
console.log(typeof strToNum)

const strToParse = parseInt(str);
console.log(typeof strToParse);

// Task 2: Convert number to string using String() and toString()
const num = 7;

const numToString = String(num);
console.log(typeof numToString);

const numToToString = toString(num);
console.log(typeof numToToString)

// Task 3: Convert values to boolean using Boolean()
const value = 100;
const summa = Boolean(value);

// Task 4: Show implicit type conversion examples
console.log("5" + 5); // "55"
console.log("5" - 5); // 0
console.log(true + 1); // 2
console.log(false + 1); // 1

// Task 5: Create a simple type converter program
function convertType(value, targetType) {
    switch (targetType) {
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
        case 'boolean':
            return Boolean(value);
        default:
            throw new Error('Invalid target type');
    }
}

// Example usage:
console.log(convertType(123, 'string')); // "123"
console.log(convertType("456", 'number')); // 456
console.log(convertType(0, 'boolean')); // false
