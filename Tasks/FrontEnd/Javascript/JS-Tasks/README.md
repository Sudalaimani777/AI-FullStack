# JS-Tasks

Categorized JavaScript practice exercises for building problem-solving skills.

## Structure

```
JS-Tasks/
├── Basic/                   # 10 fundamental exercises (143 lines)
│   ├── index.html
│   └── script.js
├── Advanced/                # 10 complex problems (151 lines)
│   ├── index.html
│   └── script.js
└── Bonus/                   # 10 additional challenges (159 lines) ✅
    ├── index.html
    └── script.js
```

## Basic/ (10 Tasks)

Fundamental exercises covering core JavaScript concepts.

**Tasks:**
1. Print "Hello World" in console and alert
2. Create variables with var, let, const and explain differences
3. Perform arithmetic operations (+, -, *, /)
4. Convert string to number and number to string
5. Create object with personal details (name, age, hobby)
6. Create array with 5 fruits and access elements
7. Write greeting function with name parameter
8. Check if number is positive, negative, or zero (if-else)
9. Print day of week based on number (switch statement)
10. Create loop to print numbers 1 to 10

**Concepts Covered:**
- Variable declarations (var, let, const)
- Data types (strings, numbers, objects, arrays)
- Type conversion
- Functions (arrow functions, parameters)
- Conditionals (if-else, switch)
- Loops (for loop)
- Array methods (splice, slice)
- Object property access (dot notation, bracket notation)

## Advanced/ (10 Tasks)

Complex problem-solving exercises requiring algorithmic thinking.

**Tasks:**
1. Reverse a string
2. Find largest number in an array
3. Implement custom `myMap` function (like Array.map)
4. Check if string is palindrome
5. Count vowels in a string (2 methods: loop & regex)
6. Use ternary operator to check age (Adult/Minor)
7. Create nested object and access inner property
8. Use forEach to print array elements
9. Sum array numbers using reduce
10. Combine two arrays using spread operator

**Concepts Covered:**
- String manipulation (split, reverse, join)
- Array algorithms (finding max, custom map)
- Regular expressions (vowel matching)
- Ternary operators
- Date object (getFullYear)
- Nested objects
- Array methods (forEach, reduce)
- Spread operator
- Higher-order functions
- Algorithm implementation

## Bonus/ (10 Tasks) ✅

Additional practice challenges covering advanced algorithms and modern JavaScript.

**Tasks:**
1. Generate Fibonacci series up to n terms
2. Remove duplicates from array (2 methods: filter & Set)
3. Sort array in ascending/descending order with custom function
4. Separate odd and even numbers from array
5. Merge two objects using spread operator (config merging example)
6. Filter array elements starting with specific letter (startsWith)
7. Calculate square of number using arrow function
8. Format user details using template literals
9. Filter prime numbers from array
10. Convert Celsius to Fahrenheit with formatted output

**Concepts Covered:**
- Fibonacci algorithm implementation
- Set data structure for unique values
- Array sorting with comparator functions
- Object destructuring and spread operator
- String methods (startsWith)
- Arrow functions with concise syntax
- Template literals for string formatting
- Prime number algorithm with optimization
- Mathematical formulas and conversions
- Filter with complex conditional logic

## Difficulty Progression

```
Basic → Fundamental concepts & syntax
Advanced → Algorithms & problem-solving
Bonus → Advanced algorithms & modern JavaScript ✅
```

## Code Examples

### Basic Level
```javascript
// Type conversion
const stringToNumber = Number("123");
const numberToString = String(456);

// Object access
const userData = {
    name: "K.Sudalaimani",
    age: 22,
    hobby: ["Gaming", "Anime", "Studying"]
};
console.log(userData.name);
console.log(userData.hobby[0]);
```

### Advanced Level
```javascript
// Custom map implementation
function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

// Palindrome checker
const checkPalindrome = (str) => {
    const lower = str.toLowerCase();
    const reversed = lower.split("").reverse().join("");
    return lower === reversed;
};

// Count vowels with regex
const countVowels = (str) => {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
};

// Reduce for sum
const sum = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr);

// Spread operator
const combined = [...array1, ...array2];
```

### Bonus Level
```javascript
// Fibonacci series
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

// Remove duplicates with Set
const removeDuplicates = (arr) => [...new Set(arr)];

// Prime number filter
function returnPrimeNum(arrNum) {
    return arrNum.filter(num => {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

// Temperature conversion
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// Object merging
const config = { ...defaultConfig, ...customConfig };
```

## Usage

**Open any difficulty folder:**
1. Open `index.html` in browser
2. Open Developer Console (F12)
3. View `script.js` for solutions
4. Uncomment function calls to test
5. Modify and experiment

## Learning Approach

1. **Start with Basic/** - Master fundamentals
2. **Move to Advanced/** - Build problem-solving skills
3. **Complete Bonus/** - Advanced algorithms & modern JavaScript ✅
4. **Experiment** - Modify solutions, try alternatives

## Skills Matrix

| Skill | Basic | Advanced | Bonus |
|-------|-------|----------|-------|
| Variables | ✅ | ✅ | ✅ |
| Functions | ✅ | ✅ | ✅ |
| Conditionals | ✅ | ✅ | ✅ |
| Loops | ✅ | ✅ | ✅ |
| Arrays | ✅ | ✅ | ✅ |
| Objects | ✅ | ✅ | ✅ |
| String methods | ⭐ | ✅ | ✅ |
| Array methods | ⭐ | ✅ | ✅ |
| Algorithms | ❌ | ✅ | ✅ |
| Regex | ❌ | ✅ | ⭐ |
| ES6+ features | ⭐ | ✅ | ✅ |
| Set/Map | ❌ | ❌ | ✅ |
| Arrow functions | ⭐ | ✅ | ✅ |
| Template literals | ❌ | ⭐ | ✅ |

Legend: ✅ Covered | ⭐ Partially covered | ❌ Not covered

## Tips

- Read task comments in script.js
- Uncomment function calls to test
- Try multiple solutions to same problem
- Compare your approach with provided solutions
- Practice with different input variations
- Use console.log() for debugging

---

**Level Range:** Beginner to Advanced  
**Total Exercises:** 30 (10 Basic + 10 Advanced + 10 Bonus) ✅  
**Code Lines:** 450+ lines of solutions  
**Last Updated:** December 30, 2025
