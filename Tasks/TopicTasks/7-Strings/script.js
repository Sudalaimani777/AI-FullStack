// Task 1: Use string methods: length, toUpperCase(), toLowerCase()
let str = "K.Sudalaimani";
console.log(`Lenght - ${str.length}`);
console.log(`To uppecase - ${str.toUpperCase}`);
console.log(`To lowercase - ${str.toLowerCase}`);

// Task 2: Extract parts of string using slice() and substring()
const slicing =  str.slice(0,4);
console.log(slicing);

const subString = str.substring(2, 6);
console.log(subString);

// Task 3: Find characters using charAt() and indexOf()
const charAt = str.charAt(5);
console.log(charAt);

const index = str.indexOf("d");
console.log(index);

// Task 4: Replace text using replace() method
const replace = str.replace("Sudalai","mani");
console.log(replace) // o/p k.manimani

// Task 5: Split and join strings
const split = str.split(2, 8);
const mani = "mani";
const join = split.join(mani);
console.log(join);