//Normal Named Function (Boring) :-
function normalFunction(){
    console.log("This is the normal function");
}
normalFunction();

//ES6 Function (Syntatic Sugar) :-
const esSixFunction = () => console.log("THis is the ES6 Function");
esSixFunction();

//Advantages of ES6 Function :-

//1)Simpler Syntax :-
const simpleSyntax = () => console.log(`This is the simpler syntax`);

//2) No need of Parenthesis if the parameter is "One"
const userFirstName = fNmae => {
    console.log(`The user first name is ${fNmae}`);
}
console.log("Sudalaimani");

//3) No need of Curley Bracred "{}" if there is a sinngle return :-
const add = (a,b) => a+b;
console.log(add(2,4));

//4) Lexical this Binding :-

//Normal Function :- // Traditional function - 'this' depends on how it's called
function Counter(){
    this.count = 0;
    setInterval(function(){
        console.log(this.count++) // 'this' is undefined or global object
    }, 1000)
}
// Counter();
// console.log(window.count); 

//Arrow Function :-
function counterInArrow(){
    this.count = 0;
    setInterval(() => {console.log(this.count++)}, 1000)
}
// counterInArrow();
// new counterInArrow(); // 'this' correctly refers to the Counter instance

//Kid Example Named Function :-
function CounterKid() {
    this.count = 0;  // Your locker has 0 stickers
    
    setInterval(function() {
        // Oops! You're in a different room now
        // You forgot who you are! 😵
        console.log(this.count++);  // Whose locker? I don't know!
    }, 1000);
}

//Kid Example Arrow Function :-
function counterInArrowKid() {
    this.count = 0;  // Your locker has 0 stickers
    
    setInterval(() => {
        // The arrow function remembers who you are! 😊
        console.log(this.count++);  // Your locker! Found it!
    }, 1000);
}

// But you need to create it properly:
// new counterInArrowKid();  // This creates a special "locker" just for you

/**
 * 🎒 Simple Story
Think of this as "whose backpack am I using?"

Regular Function (gets confused):
 */

function MyBackpack() {
    this.candies = 5;  // I put 5 candies in MY backpack
    
    setTimeout(function() {
        // Wait... whose backpack is this? 🤔
        // It's not mine anymore!
        this.candies++;  // Adding candy to the WRONG backpack!
    }, 1000);
}

//Arrow Function (remembers):
function MyBackpackArrow() {
    this.candies = 5;  // I put 5 candies in MY backpack
    
    setTimeout(() => {
        // I remember! This is MY backpack! 🎒
        this.candies++;  // Adding candy to MY backpack! ✓
    }, 1000);
}

new MyBackpack();  // Create your own backpack

/**
 * 
Understanding this Binding: Regular vs Arrow Functions
🎓 Professional Explanation
The Problem with Regular Functions
What happens:

When Counter() is called as a regular function (not with new), this inside Counter refers to the global object (window in browsers, global in Node.js)
Inside the setInterval callback (regular function), this loses its context and refers to the global object or undefined (in strict mode)
this.count doesn't exist on the global object, so you get undefined++ → NaN
Why it fails:
Regular functions have dynamic this binding - this is determined by how the function is called, not where it's defined.

Solution 1: Arrow Functions (Your Code)
What happens:

Arrow functions have lexical this binding
The arrow function "inherits" this from its parent scope (counterInArrow)
Even though counterInArrow() is called without new, the arrow function still captures whatever this is in that scope
But there's still an issue: When you call counterInArrow() as a regular function, this is still the global object. The arrow function correctly preserves it, but you're still incrementing a global variable.

✅ Proper Solutions
Option 1: Use new keyword

Option 2: Use ES6 Class (Modern)

Option 3: Old-school .bind() method

Option 4: Save this reference (pre-ES6 pattern)

Complete Working Example
🎈 Kid-Friendly Explanation
The Problem: Lost Identity! 😵
Imagine you're at school, and you have a name tag that says "Your Name".

Regular functions are like forgetting your name tag when you go to different rooms:

The Solution: Keep Your Name Tag! ✅
Arrow functions are like always keeping your name tag with you:

🎒 Simple Story
Think of this as "whose backpack am I using?"

Regular Function (gets confused):

Arrow Function (remembers):

🎮 Real Example Kids Can Understand
🎯 Key Takeaway
Regular function = Forgets who you are when you go to different places 😵
Arrow function = Always remembers who you are! 😊✨
Use new keyword = Creates your own special space (like your own locker or backpack)
 */