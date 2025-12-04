const fName = "Sudalai";
const lName = "Mani";
console.log(fName);
console.log(lName);

let value;

value = fName + lName; //Concat
console.log(`Concatenation : ${value}`);

//With space :-
value  = fName + " " + lName;
console.log(`Concatenation : ${value}`);

//Append :-
value = "Arun";
value = value + "kumar"; //Normal Append
console.log(value);

//ShortHand :-
value += " " + "Prasadh" // value = value + " " + "Prasadh";
console.log(value);

//length :-
value = fName.length;
console.log("The length of the fName is" + " " +  value);

//Concat  :-
value = fName.concat(" ", lName);
console.log("Concat method" + " " + value);

//Change the case :-
//LowerCase :-
value = fName.toLowerCase() //Turn into lower case;
console.log(`Turn into lower case -  ${value}`);
//Uppercase :-
value = fName.toUpperCase();
console.log(`Turn into upper case - ${value}`);

//Indexing :-
value = fName[2];
console.log(`Access the particular value using it's index value ${value}`);

value = fName[500]; //Undefined
console.log("Throws an 'undefined' if the index not exist" + " " + value);

//CharAt :-
value = fName.charAt(1);
console.log("Checks the character using its index value" + " : " + value);

//Slice :-
value = fName.slice(0, 3);
console.log(`Slicing -  ${value}`);
console.log(`Doesn't modify the original value ${fName}`);

//Split :-
const str = "Hello JavaScript";
console.log(`Split returns the string into array`);
console.log(str)
value = str.split(" ");
console.log(value);

value = str.split("");
console.log(value);

value = str.split(",");
console.log(value);

//Replace :-
console.log("Replace the string :-");
value = fName.replace("Sudalai", "Arul");
console.log(`The value ${fName} to the ${value}`);

//Includes :-
console.log(`Includes - Returns true if the character or the string is present or vise versa`)
value = str.includes("H", 0);
console.log(`With character and its position ${value}`);

//Without Position :-
value = str.includes("o");
console.log(`Without position ${value}`);
