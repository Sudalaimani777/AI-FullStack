// Task 1: Use map() to double all numbers in an array
const numbers= [1,2,3,4,5,5,6,7,8,9,10];
const doubleNums = numbers.map(num => num * num);
console.log(doubleNums); // [2,4,6,8,10,10,12,14,16,18,20]

// Task 2: Use map() to extract a specific property from an array of objects
const user = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const userNames = user.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

const userId = user.map(userId => userId.id);
console.log(userId); // [1, 2, 3]

// Task 3: Use map() with index parameter to create numbered list items

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Indian Fig', 'Jackfruit', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince', 'Raspberry', 'Strawberry', 'Tangerine', 'Ugli Fruit', 'Vanilla Bean', 'Watermelon', 'Xigua', 'Yellow Passion Fruit', 'Zucchini'];

const numberOfFruitsWithIndexValue = fruits.map((fruit, index) => `The fruit is ${fruit} in the place of ${index + 1}`);
console.log(numberOfFruitsWithIndexValue);
console.log(numberOfFruitsWithIndexValue[0]); // The fruit is Apple in the place of 1
// [
//   'The fruit is Apple in the place of 1',

// Task 4: Use map() to transform an array of objects (add/modify properties)
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
]

const addedDiscount = products.map(product => {
    return {
        name: product.name,
        originalPrice: product.price,
        discountedPrice: product.price * 0.90 // 10% discount
    }
})
console.log(addedDiscount);

// Add a new property 'inStock' to each product :-
const updatedProducts = products.map(product => {
    return {
        ...product,
        inStock: true,
    }
});

const laptop = updatedProducts[0].inStock = false;
console.log(laptop); // false

console.log(updatedProducts); // [
//   { name: 'Laptop', price: 1000, inStock: false },
//   { name: 'Phone', price: 500, inStock: true },
//   { name: 'Tablet', price: 300, inStock: true }
// ]

// Task 5: Convert an array of strings to uppercase using map()
const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "black", "white"];
const colorsToUpperCase = colors.map(colors => colors.toUpperCase());
console.log(colorsToUpperCase); // ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE', 'ORANGE', 'PINK', 'BROWN', 'BLACK', 'WHITE']
