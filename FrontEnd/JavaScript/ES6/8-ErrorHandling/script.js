//Error Handling
// try catch finally

const fetchData = async () =>  {
    try{
        const resp = await fetch("./data.txt");
        console.log(resp);
        const result = await resp.text();
        console.log(result)
    }
    catch(e){
        throw new Error(e)
    }
}
fetchData();

//Using Fetch :-
const usingFetch = fetch("./data.txt");
usingFetch.then(res => res.text()).then(result => console.log(result)).catch(e => console.log(e))

//Promise .all :-
//The Promise.all() method takes an iterable of promises as input and returns a single Promise that resolves when all of the promises in the iterable have resolved, or rejects if any of the promises in the iterable reject. The returned promise will resolve with an array of the resolved values from the input promises, in the same order as the input promises. If any of the input promises reject, the returned promise will reject with the reason of the first promise that rejects.

const p1 = Promise.resolve("A"); //Static method of Promise class which returns a resolved promise with the given value.
const p2 = Promise.reject("Error"); //Static method of Promise class which returns a rejected promise with the given reason.
const p3 = Promise.resolve("C"); //Static method of Promise class which returns a resolved promise with the given value.

Promise.all([p1, p3, p2]).then(res => console.log(res))
.catch(err => console.log(err));

//Promise.race :-
//Returns the result of the first promise that finishes (success or failure).
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("A");
    }, 1000);   
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("500 ms");
    }, 500);    
});

Promise.race([p4,p5]).then(res => console.log(res)).catch(err => console.log(err));

//Promise.allSettled :-
//Returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("A");
    }, 1000);
});
const p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("500 ms");
    }, 500);
});

Promise.allSettled([p6, p7]).then(res => console.log(res)).catch(err => console.log(err));