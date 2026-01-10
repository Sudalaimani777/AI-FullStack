//Promise :-
const promise = new Promise((resolve, reject) => {
    resolve("Resolved");
    reject("Rejected");
})

//Normal Method instead of "Async Await" :-
function norlmalMethod(){
    promise.then(response => console.log(response));
}
// norlmalMethod();

//ES6 Method -Async and Await :-
async function getUserDataAsync(){
    //The await is used infront of the Promise which is stored in the variable. Also the await is used only inside the await function
    const response = await promise;
    console.log(response);
}
// getUserDataAsync();

//Promise One :-
const PromiseOne = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promise One Resolved")
    }, 10000);
});
//Promise Two :-
const promiseTwo = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promise Two Resolved")
    }, 20000);
});

async function handelTwoPromises() {
    console.log("Hello World");

    //Handle Promise One :-
    const handelPromiseOne = await PromiseOne;
    console.log(handelPromiseOne);

    //Handle Promise Two :-
    const handlePromiseTwo = await promiseTwo;
    console.log(handlePromiseTwo);
}

handelTwoPromises();