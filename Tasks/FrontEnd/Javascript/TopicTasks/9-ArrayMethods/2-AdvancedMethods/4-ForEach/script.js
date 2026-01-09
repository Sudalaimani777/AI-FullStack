// Task 1: Use forEach() to log each element of an array
const names = ["Arondas", "Ariharan", "ArunKumar", "BalaMurugan", "Esakiraja", "Sivachandiran"].forEach(names => console.log(names));

// Task 2: Use forEach() with index parameter to display numbered items
const products = [
    { productName: "Laptop", price: 20000 },
    { productName: "Mobile", price: 20000 },
].forEach((items, index) => console.log(`The product is ${items.productName} in the index of ${index}`))

// Task 3: Use forEach() to iterate over an array of objects and display properties
const users = [
    { userName: "Sudalaimani", age: 22 },
    { userName: "Maari", age: 21 },
    { userName: "Gukesh", age: 20 },
].forEach(userName => console.log("Name: ", userName.userName, ",", "Age :", userName.age))

// Task 4: Use forEach() to calculate the sum of all numbers in an array
const num = [1, 2, 3, 4, 5, 6, 7, 8, 100];
let total = 0
num.forEach(num => {
    total += num;
});
console.log(total);

// Task 5: Use forEach() to dynamically create HTML elements from array data
const usersData = [
    { userName: "Sudalaimani", age: 22 },
    { userName: "Maari", age: 21 },
    { userName: "Gukesh", age: 20 },
].forEach(data => {
    const section = document.querySelector("section");
    const p = document.createElement("p");
    p.innerText = data.userName;
    section.appendChild(p);
})