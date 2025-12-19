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


