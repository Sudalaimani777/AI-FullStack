let value;
//Number to string :-
value = String(7);
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

value = String(4 + 4);
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);


//String to Number :-
value = Number("Hellooo JS");
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

value = Number("5" + "5");
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

value  =Number("5 + 5");
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);


//String to Boolean :-
value = Boolean() //False
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);
value = Boolean("Hello") //True
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

//Boolean to String :-
value = String(true);
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

//Array to string :-
value = String(["Apple", "Orange"]);
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

//String to Array :-
value = Array("Hello");
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

//Boolean to Number :-
value = Boolean(0); //False
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

value = Boolean(1); //True
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

value =Boolean(2); //True because it has a value
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

value  = Boolean("Hii"); //True
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

value = Boolean(); //False cz it doesn't contain any value
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

value = Boolean(null); //False
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

//Array to Number :-
value = Number([1, 2, 3]); //Not an Number
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);


//ParseInt :-
value  = parseInt(100.4);
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);

//ParseFloat :-
value = parseFloat(10.333);
console.log(`The actual value is "${value}" but the data type is "${typeof value}"`);