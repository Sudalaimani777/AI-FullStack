//Why Should we use "Promise" ?
/**
 * It is a single thread synchronous language 
 */

// const userData = [
//     {
//         title: "Post One"
//     },
//     {
//         title: "Post Two"
//     },
//     {
//         title: "Post Three"
//     }
// ];

// function getUserData(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             userData.push(data);
//             let err = false;
//             if(!err){
//                 resolve()
//             }
//             else{
//                 reject("Something Went Wrong")
//             }
//         }, 2000);
//     });
// };

// function createUserList (){
//     const section = document.querySelector("section")
//     setTimeout(() => {
//         let output = ""
//         userData.forEach((user) => {
//             output += `<h2>${user.title}</h2>`
//         });
//         section.innerHTML = output;
//     },1000);
// }
// getUserData({title: "Post Four"}).then(createUserList).catch(err => console.log(err));

//Display the Count down Timer in the DOM (callBack Hell) :-
// const sections = document.querySelector("section");

// setTimeout(() => {
//     sections.innerHTML = 3;

//     setTimeout(() => {
//         sections.innerHTML = 2;

//         setTimeout(() => {
//             sections.innerHTML = 1;

//             setTimeout(() => {
//                 sections.innerHTML = "Happy New Year!"
//             }, 1000);
//         }, 1000)
//     }, 1000);
// }, 1000);


// const adviceAPIKey = fetch("https://api.adviceslip.com/advice");
// console.log(adviceAPIKey)

//How to Create the Promise :-
//The Promise is not an object, it is an constructor.Which means we need to use the "new" keyword to create the Promise constructor.

// const myPromise =  Promise(); //Returns error :- script.js:71 Uncaught TypeError: Promise constructor cannot be invoked without 'new'
// const myPromise = new Promise((resolve, reject) => {}) //The promise has callback functions such as "resolve() and reject()""
// console.log(myPromise);

//The Promise has two seneraios such as DID and DIDN'T

//DID -> resolve() -> True.
//DIDN'T -> reject() -> False.

//There are To methods to create the Promise such as  -> 
//1) new Promise(function(resolve, reject){});
//2) ES6 -> new Promise((resolve, reject) => {});

//In Promise there are three types of state such as,
/**
*   i)Pending (Default State)
*   ii)Fullfilled (reslove)
*   iii)Rejected (reject)
*/

// const myPromise = new Promise((reslove, reject) => {});
// console.log(myPromise);

//1) Example :-
const myOrderStatus = new Promise((resolve, reject) => {
    let myStatus = true;
    if (myStatus) {
        const orderedItem = { name: "Laptop", brand: "LOQ" }
        resolve(`The user order ${orderedItem.name} and the brand ${orderedItem.brand} was delivered successfully`);
    } else {
        reject("Somethig went wrong!!, Please Check the oeder statue");
    }
})
// console.log(myOrderStatus);

//In Promise there are two code blocks such as,
/**
 *  i)Producing Code -> Who gave the Promise . EX -> KGF Rocky's Mom
 *  ii)Consuming Code -> Who consmes the Promise. EX -> Rocky 
 */

//2) Example -2 :-
const myCoffeeStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
        let coffeeStatus = true;
        if (coffeeStatus) {
            let coffeeData = { orderPersonName: "Sudalaimani", name: "Bru Coffee", incredients: ["Milk", "Sugar", "Bru Coffee Powder", "Cardamon"] };
            resolve(`The person ${coffeeData.orderPersonName} was received the ${coffeeData.name} it has the incredients of ${coffeeData.incredients}`);
        } else {
            reject("Sorry the coffee Machine was broken....");
        }
    }, 1000);
})
myCoffeeStatus.then(message => console.log(message)).catch(err => console.log(err)).finally(message => console.log(`Thankyou For Visiting....`))

//3) Example -3 :-
const myMobileStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
        let mobileStatus = true;
        if (mobileStatus) {
            let mobileData = { orderPersonName: "Sudalaimani", name: "One Plus 11R", price: 45000, color: "Black" };
            resolve(`The person ${mobileData.orderPersonName} was received the ${mobileData.name} it has the price of ${mobileData.price} and the color is ${mobileData.color}`);
        } else {
            reject("Sorry the Mobile was out of stock....");
        }
    }, 2000);
})
myMobileStatus.then(message => console.log(message)).catch(err => console.log(err)).finally(message => console.log(`Thankyou For Visiting....`))