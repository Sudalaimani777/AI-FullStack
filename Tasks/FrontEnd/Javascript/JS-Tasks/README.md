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
└── Bonus/                   # Extra challenges (coming soon)
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

## Bonus/

Extra challenges for additional practice (coming soon).

## Difficulty Progression

```
Basic → Fundamental concepts & syntax
Advanced → Algorithms & problem-solving
Bonus → Extra challenges
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
3. **Try Bonus/** - Challenge yourself further
4. **Experiment** - Modify solutions, try alternatives

## Skills Matrix

| Skill | Basic | Advanced |
|-------|-------|----------|
| Variables | ✅ | ✅ |
| Functions | ✅ | ✅ |
| Conditionals | ✅ | ✅ |
| Loops | ✅ | ✅ |
| Arrays | ✅ | ✅ |
| Objects | ✅ | ✅ |
| String methods | ⭐ | ✅ |
| Array methods | ⭐ | ✅ |
| Algorithms | ❌ | ✅ |
| Regex | ❌ | ✅ |
| ES6+ features | ⭐ | ✅ |

Legend: ✅ Covered | ⭐ Partially covered | ❌ Not covered

## Tips

- Read task comments in script.js
- Uncomment function calls to test
- Try multiple solutions to same problem
- Compare your approach with provided solutions
- Practice with different input variations
- Use console.log() for debugging

---

**Level Range:** Beginner to Intermediate  
**Total Exercises:** 20+ (10 Basic + 10 Advanced + Bonus)  
**Code Lines:** 300+ lines of solutions
