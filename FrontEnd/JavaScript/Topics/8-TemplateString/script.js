const userData = {
    name: "Sudalaimani",
    age: 22,
    job: "Web Developer",
    city: "Chennai",
    hobby: [
        {
            games: {
                indoorGames: "FreeFire",
                outdoorGames: "Cricket"
            }
        },
        "Studying"
    ]
};

//Without Template String (ES5):-
console.log(`--------------------Without Template String------------------`);
console.log("The user name is" + " " + userData.name + " " + "and his age is " + userData.age);

//With Template String (ES6) :-
console.log(`--------------------With Template String------------------`);
console.log(`The user name is ${userData.name} and his age is ${userData.age}.He used to play ${userData.hobby[0].games.indoorGames} a lot`);
