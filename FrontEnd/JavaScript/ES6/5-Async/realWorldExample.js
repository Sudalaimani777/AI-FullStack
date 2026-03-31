const API_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUserData (){
    //fetch() -> Returns a Promise that resolves to the Response object representing the response to the request (response.json() also returns a Promise)
    const response = await fetch(API_URL);
    console.log(response);
    const data = await response.json();
    console.log(data);
}
// fetchUserData();

//Handle the Error Using Try catch Block :-
async function fetchUserDataWithErrorHandling (){
    //Use try block whenever the code has await keyword which is a Promise
    //API Executes the try block will execute.
    try{
        const response = await fetch(API_URL); //Returns the Promise so we need to use await
        const data = await response.json(); //Returns the Promise so we need to use await
        console.log(data);
    }
    //API Fails the catch block will execute.
    catch(err){
        console.log(err);
    }
}
fetchUserDataWithErrorHandling();

//Note: If you want to use .then() and .catch() instead of async/await, you can do it like this:
function fetchUserDataWithThenCatch (){
    fetch(API_URL)
    .then(response => response.json()) //Returns the Promise so we need to use .then()
    .then(data => console.log(data)) //Returns the Promise so we need to use .then()
    .catch(err => console.log(err)); //Handle the error using .catch()
}
fetchUserDataWithThenCatch();

//Note: If you want to use async/await with try/catch, you can do it like this:
async function fetchUserDataWithAsyncAwait (){
    try{
        const response = await fetch(API_URL); //Returns the Promise so we need to use await
        const data = await response.json(); //Returns the Promise so we need to use await
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
fetchUserDataWithAsyncAwait();