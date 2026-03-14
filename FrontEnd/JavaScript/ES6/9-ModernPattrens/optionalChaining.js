//Optional Chaining
//Optional chaining is a feature in JavaScript that allows you to safely access nested properties of an object without having to check if each level of the object exists. It uses the `?.` operator to prevent errors when trying to access properties that may be undefined or null.

const user = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    }
}

//Without optional chaining
const city = user && user.address && user.address.city; // "New York"

//With optional chaining
const cityWithOptionalChaining = user?.address?.city; // "New York"

//If the address property is missing, it will return undefined instead of throwing an error
const userWithoutAddress = {
    name: "Jane"
}   
const cityWithoutAddress = userWithoutAddress?.address?.city; // undefined

//Optional chaining can also be used with function calls
const getUserName = (user) => user?.name; // "John"
const getUserNameWithoutUser = (user) => user?.name; // undefined

//Optional chaining can also be used with arrays
const users = [
    { name: "Alice" },
    { name: "Bob" }
];
const firstUserName = users?.[0]?.name; // "Alice"
const thirdUserName = users?.[2]?.name; // undefined