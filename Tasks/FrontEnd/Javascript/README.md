# JavaScript Practice Tasks 📚

Welcome to the JavaScript Tasks repository! This folder contains a comprehensive collection of JavaScript practice exercises designed to build your skills from beginner to advanced level.

## 📁 Folder Structure

```
Javascript/
├── ES6/                    # ES6+ features and modern JavaScript
│   ├── 2-Promise/          # Promise-based async programming
│   └── Async-EasyHttp/     # Async/Await with HTTP library
├── JS-Tasks/              # Categorized JavaScript challenges
└── TopicTasks/            # Topic-specific practice exercises
```

---

## 🎯 ES6 Folder

Modern JavaScript (ES6+) practice tasks focusing on asynchronous programming and advanced features.

### 2-Promise
Modern asynchronous JavaScript using Promises.

**Contents:**
- Promise creation with resolve/reject
- Promise chaining with `.then()` and `.catch()`
- Practical example: Laptop purchase decision simulation
- Dynamic UI creation based on Promise results
- Error handling patterns

**Example Project:**
- Mom's laptop buying decision simulator
- setTimeout for async operations
- DOM manipulation based on Promise outcomes

### Async-EasyHttp
Async/Await patterns with custom HTTP library.

**Contents:**
- EasyHttp library with async/await methods
- GET, POST, PUT, DELETE operations
- Try-catch error handling
- RESTful API integration
- Modern async patterns

**Skills Covered:**
- Async function declarations
- Await keyword with Promises
- Error handling with try-catch blocks
- HTTP request methods
- JSON data handling
- API integration patterns

---

## 💼 JS-Tasks Folder

Practice challenges organized by difficulty level.

### Basic
**10 Fundamental Tasks:**

1. **Hello World** - Console and alert output
2. **Variables** - var, let, const differences
3. **Arithmetic Operations** - Addition, subtraction, multiplication, division
4. **Type Conversion** - String ↔ Number conversions
5. **Objects** - Creating and accessing object properties
6. **Arrays** - Array manipulation and accessing elements
7. **Functions** - Greeting messages with user input
8. **Conditionals** - Positive/negative/zero number checker
9. **Switch Statement** - Day of the week mapper (1=Monday)
10. **Loops** - Print numbers 1 to 10

**Skills Covered:**
- Basic syntax and structure
- Data types and variables
- Control flow (if-else, switch)
- Functions and user interaction
- Arrays and objects fundamentals

---

### Advanced
**10 Challenging Tasks:**

1. **String Reversal** - Reverse any string using array methods
2. **Find Maximum** - Return largest number in an array
3. **Custom Array Methods** - Implement custom `myMap()` function
4. **Palindrome Checker** - Verify if string reads same forwards/backwards
5. **Vowel Counter** - Count vowels using loops and regex
6. **Ternary Operators** - Age validation (Adult/Minor)
7. **Nested Objects** - Create and access deeply nested properties
8. **forEach Method** - Iterate and print array elements
9. **Reduce Method** - Sum all numbers in array
10. **Spread Operator** - Combine multiple arrays

**Skills Covered:**
- Advanced array manipulation
- String processing algorithms
- Custom function implementations
- Modern ES6 features (spread, arrow functions)
- Higher-order functions (map, reduce, forEach)
- Regular expressions
- Complex data structures

---

### Bonus
**10 Additional Practice Tasks:** ✅

1. **Fibonacci Series** - Generate Fibonacci sequence up to n terms
2. **Remove Duplicates** - Filter duplicate values from arrays (2 methods)
3. **Array Sorting** - Sort arrays in ascending/descending order
4. **Odd/Even Finder** - Separate odd and even numbers from arrays
5. **Object Merging** - Merge two objects using spread operator
6. **String Filtering** - Filter names starting with specific letter
7. **Square Calculator** - Return square of a number using arrow function
8. **Template Literals** - Print formatted user details
9. **Prime Number Filter** - Extract only prime numbers from array
10. **Temperature Converter** - Convert Celsius to Fahrenheit

**Skills Covered:**
- Advanced algorithms (Fibonacci, prime numbers)
- Set data structure for duplicates removal
- Array sorting with custom comparators
- Object manipulation with spread operator
- String methods (startsWith)
- Arrow functions and template literals
- Array filtering with complex logic
- Mathematical operations and conversions

---

## 📖 TopicTasks Folder

Structured learning path with 13 comprehensive topics and 100 practice tasks.

### Progress: ✅ 13/13 Topics Completed (100%)

### Topic Breakdown:

#### 1️⃣ **1-Start** (5 tasks) ✅
Getting started with JavaScript basics.
- HTML and JavaScript file linking
- Using `alert()` and `console.log()`
- Writing comments
- Page load events

---

#### 2️⃣ **2-Console** (5 tasks) ✅
Master different console methods.
- `console.log()` - Regular messages
- `console.error()` - Error messages
- `console.warn()` - Warning messages
- `console.info()` - Information messages
- Combined console method usage

---

#### 3️⃣ **3-Variables** (5 tasks) ✅
Understanding variable declarations.
- `var`, `let`, `const` declarations
- Variable scope differences
- Re-declaration and re-assignment rules
- Undefined variables
- Naming conventions

---

#### 4️⃣ **4-DataTypes** (5 tasks) ✅
Exploring JavaScript data types.
- Primitive types: String, Number, Boolean
- Special values: null, undefined
- Arrays and array indexing
- Array methods: `push()`, `pop()`, `unshift()`, `shift()`
- Primitive vs reference types

---

#### 5️⃣ **5-TypeConversion** (5 tasks) ✅
Converting between data types.
- String to Number: `Number()`, `parseInt()`
- Number to String: `String()`, `toString()`
- Boolean conversion: `Boolean()`
- Implicit type coercion
- Building a type converter program

---

#### 6️⃣ **6-Numbers** (5 tasks) ✅
Working with numbers and Math object.
- Basic arithmetic operators (+, -, *, /)
- Rounding: `Math.round()`, `Math.floor()`, `Math.ceil()`
- Random numbers: `Math.random()`
- Number methods: `toFixed()`, `toString()`
- Calculator program

---

#### 7️⃣ **7-Strings** (5 tasks) ✅
String manipulation techniques.
- String properties: `length`
- Case conversion: `toUpperCase()`, `toLowerCase()`
- Extracting substrings: `slice()`, `substring()`
- Finding characters: `charAt()`, `indexOf()`
- String replacement and splitting

---

#### 8️⃣ **8-TemplateString** (5 tasks) ✅
Modern string templating.
- Multi-line strings with backticks
- Variable interpolation with `${}`
- Calculations inside template literals
- HTML template generation
- Comparison with concatenation

---

#### 9️⃣ **9-ArrayMethods** (25 tasks) ✅
Comprehensive array method implementations and practice.

**1-BasicMethods (5 tasks):**
- Custom `indexOf()` implementation
- Custom `lastIndexOf()` implementation
- Custom `push()` and `pop()` methods
- Custom `shift()` and `unshift()` methods
- Custom `includes()` method

**Example Implementation:**
```javascript
Array.prototype.customIndex = function(searchElement, fromIndex = 0) {
  // Custom indexOf implementation
  // Handles negative indices, empty arrays, and boundary cases
}
```

**2-AdvancedMethods (20 tasks):**

**map() - 5 tasks:**
- Double all numbers in an array
- Extract specific properties from objects
- Use index parameter for numbered lists
- Transform array of objects (add/modify properties)
- Convert strings to uppercase

**filter() - 5 tasks:**
- Get all even numbers
- Find objects matching conditions
- Get strings longer than specific length
- Remove falsy values using Boolean
- Search/find items containing specific text

**forEach() - 5 tasks:**
- Log each element
- Display numbered items with index
- Iterate over objects and display properties
- Calculate sum of numbers
- Dynamically create HTML elements

**reduce() - 5 tasks:**
- Calculate sum of all numbers
- Find maximum or minimum value
- Count occurrences of items
- Flatten nested arrays
- Group objects by specific property

---

#### 🔟 **10-Objects** (15+ tasks) ✅
Comprehensive object-oriented programming.

**Main Folder:**
- Creating objects with mixed data types
- Dot notation vs bracket notation
- Nested objects and arrays
- Object methods and `this` keyword
- Property modification

**Subfolders:**

**1-Constructor/**
- ES5 constructor functions
- `new` keyword for object instantiation
- `this` keyword in different contexts
- Constructor methods
- Lexical `this` with arrow functions

**2-Built-in-Constructor/**
- String literals vs String constructor
- Number literals vs Number constructor
- Array literals vs Array constructor
- Object literals vs Object constructor
- Understanding `typeof` differences

---

#### 1️⃣1️⃣ **11-IfElse** (5 tasks) ✅
Conditional logic and decision making.
- Basic if-else statements
- Multiple conditions with else-if
- Logical operators: `&&`, `||`
- Voting eligibility checker
- Ternary operator shortcuts

---

#### 1️⃣2️⃣ **12-Switch** (5 tasks) ✅
Advanced conditional statements.
- Basic switch syntax
- Default case handling
- Day of the week program
- Multiple cases for same code block
- Switch vs if-else comparison

---

#### 1️⃣3️⃣ **13-Functions** (5 tasks) ✅
Function declarations and expressions.
- Function declarations
- Function expressions
- Arrow function syntax
- Default parameters
- Return values

---

## 🎓 Learning Path

**Recommended Order:**

1. ✅ **1-Start** - Getting Started
2. ✅ **2-Console** - Basic Output
3. ✅ **3-Variables** - Declaration & Assignment
4. ✅ **4-DataTypes** - Understanding Data
5. ✅ **5-TypeConversion** - Data Manipulation
6. ✅ **6-Numbers** - Numeric Operations
7. ✅ **7-Strings** - Text Manipulation
8. ✅ **8-TemplateString** - Modern Strings
9. ✅ **9-ArrayMethods** - Array Operations
10. ✅ **10-Objects** - Key-Value Pairs & OOP
11. ✅ **11-IfElse** - Conditional Logic
12. ✅ **12-Switch** - Advanced Conditions
13. ✅ **13-Functions** - Reusable Code

---

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Edge, etc.)
- Text editor (VS Code recommended)
- Basic understanding of HTML

### Running the Tasks

1. **Navigate to any task folder**
   ```
   Tasks/FrontEnd/Javascript/[folder-name]/
   ```

2. **Open `index.html` in your browser**
   - Double-click the HTML file, or
   - Right-click → Open with → Browser

3. **Open Browser Developer Tools**
   - Press `F12` or `Ctrl+Shift+I` (Windows/Linux)
   - Press `Cmd+Option+I` (Mac)

4. **Check the Console tab**
   - View output from `console.log()`
   - See error messages and warnings

5. **Modify `script.js`**
   - Add your solutions
   - Refresh browser to test

---

## 📝 Task Guidelines

- **Read First**: Review existing code in each folder before starting
- **Build Upon**: Add new examples to existing `script.js` files
- **Test Thoroughly**: Check your code in browser console
- **Comment Your Code**: Explain what your code does
- **Mark Progress**: Update completion status in `tasksList.txt`

---

## 🎯 Skills You'll Learn

### Core JavaScript
- ✅ Variables and data types
- ✅ Operators and expressions
- ✅ Control flow (if/else, switch)
- ✅ Functions (declarations, expressions, arrow functions)
- ✅ Arrays and array methods
- ✅ Objects and OOP concepts

### Advanced Concepts
- ✅ ES6+ features (template literals, spread operator, arrow functions)
- ✅ Promises and asynchronous programming
- ✅ Async/Await with try-catch error handling
- ✅ HTTP methods and RESTful APIs
- ✅ Higher-order functions (map, reduce, filter, forEach)
- ✅ Custom method implementations
- ✅ DOM manipulation
- ✅ Error handling patterns

### Problem Solving
- ✅ String manipulation algorithms
- ✅ Array operations and transformations
- ✅ Data validation and conversion
- ✅ Pattern recognition (palindromes)
- ✅ Mathematical operations
- ✅ Logic implementation

---

## 📊 Progress Tracking

### Overall Statistics
- **Total Topics**: 13
- **Total Tasks**: 100
- **Completion**: 100% ✅

### Current Status
```
[██████████] 100%

Completed:    13/13 topics
In Progress:   0/13 topics
Not Started:   0/13 topics
```

---

## 🎨 Task Difficulty Levels

| Level | Folder | Description |
|-------|--------|-------------|
| 🟢 **Beginner** | TopicTasks | Fundamental concepts and syntax |
| 🟡 **Intermediate** | JS-Tasks/Basic | Practical applications |
| 🔴 **Advanced** | JS-Tasks/Advanced | Complex algorithms and patterns |
| 🟣 **Expert** | ES6 | Modern JavaScript features |

---

## 💡 Tips for Success

1. **Practice Consistently**: Complete at least one task daily
2. **Type, Don't Copy**: Write code yourself to build muscle memory
3. **Experiment**: Try variations of each solution
4. **Debug**: Use `console.log()` to understand code flow
5. **Research**: Look up unfamiliar concepts on MDN
6. **Review**: Revisit completed tasks to reinforce learning
7. **Challenge Yourself**: Optimize solutions for better performance

---

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Comprehensive JavaScript reference
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [Eloquent JavaScript](https://eloquentjavascript.net/) - Free online book

---

## 🤝 Contributing

Feel free to:
- Add new tasks to the Bonus folder
- Improve existing solutions
- Create additional examples
- Share alternative approaches

---

## 📅 Last Updated

January 9, 2026

---

## 🎉 Acknowledgments

All tasks are designed to provide a structured learning path from JavaScript basics to advanced concepts, focusing on hands-on practice and real-world applications.

---

**Happy Coding! 🚀**
