// =============================================
// JSON.stringify() & JSON.parse() with Web Storage
// =============================================
// localStorage & sessionStorage only store STRINGS.
// To store objects or arrays, convert them using JSON.
//
// JSON.stringify()  -> converts object/array  to a string  (to SAVE)
// JSON.parse()      -> converts string back   to object/array (to READ)


// ---- Storing an OBJECT ----

const user = {
  name: 'Bob',
  age: 30,
  isPremium: true
};

// Save: convert object -> string first
localStorage.setItem('user', JSON.stringify(user));

// Read: convert string -> object back
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser);           // { name: 'Bob', age: 30, isPremium: true }
console.log(storedUser.name);      // 'Bob'
console.log(storedUser.age);       // 30
console.log(storedUser.isPremium); // true


// ---- Storing an ARRAY ----

const fruits = ['apple', 'banana', 'mango'];

// Save
localStorage.setItem('fruits', JSON.stringify(fruits));

// Read
const storedFruits = JSON.parse(localStorage.getItem('fruits'));
console.log(storedFruits);         // ['apple', 'banana', 'mango']
console.log(storedFruits[1]);      // 'banana'


// ---- Storing an ARRAY of OBJECTS ----

const todos = [
  { id: 1, task: 'Learn localStorage', done: true },
  { id: 2, task: 'Build a project',    done: false }
];

// Save
localStorage.setItem('todos', JSON.stringify(todos));

// Read
const storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(storedTodos);
console.log(storedTodos[0].task);  // 'Learn localStorage'
console.log(storedTodos[1].done);  // false


// ---- Safe read: handle null (key not found) ----

function getData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

const result = getData('todos');
console.log(result);  // the todos array

const nothing = getData('nonexistent');
console.log(nothing);  // null


// ---- What JSON.stringify looks like (raw string) ----
console.log(localStorage.getItem('user'));
// '{"name":"Bob","age":30,"isPremium":true}'  <- stored as plain text
