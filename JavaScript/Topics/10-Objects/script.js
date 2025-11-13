//( . ) Object are key and value pairs
//( . ) Object are reference types
//( . ) Object are mutable in nature
const userData = {
    name: "Sudalaimani",
    age: 22,
    address: {
        doorNo: "19/4",
        street: "East Street",
        "City": "Ettaiyapuram"
    },
    hobby: ["Playing", "Studying"],
    //Method :-
    getFullName: function(){
        return this.name + this.age;
    }
}
console.log(userData);

//Oru object ikulla function irundha adhukku method nu peru.
let value;
//Get a sopecific value :-
value =userData.getFullName();
console.log(value);

//[]:-
value = userData["age"];
console.log(value);

value = userData.address.doorNo;
console.log(value);

value = userData.hobby[0];
console.log(value)

userData.hobby.push("Sleeping");
console.log(userData.hobby)