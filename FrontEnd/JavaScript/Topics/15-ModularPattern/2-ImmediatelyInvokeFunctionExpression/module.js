//Normal Function :-
const a = function(){
    console.log("This is an Normal Function");
}
a();

//IIFE (Immediately Invoked Function Expression) :-
const iife = (() => {
    console.log(`This is the IIFE`)
})();

const greet ="This is the greet which is in the outer of the IIFE";
console.log("Outer Greet -> ",greet)

const iifeFunction = (() => {
    //Private :-
    const x= 10;
    const greet= "This is the greet inside the modular iife"

    //We need to return the Private codes to access it in the outer
    return {
        x: x,
        userGreet: function(){
            return greet;
        }
    } 
})(); //Calling the function using the parenthesis "()"

console.log(iifeFunction.x);
console.log(iifeFunction.userGreet());

const addTwoNums = ((function add(a, b) {
    const result = a + b;
    console.log(result);
})(2, 4));

//Syntax :-
(function funcName(param1, param2){

}());

//ES6 :-
(() => {
    let a= 10;

})();

//App Controller, Data Contorller, UI Controller :-

//Data Controller :-
const dataController = (() => {
    //Private :-
    const data = {
        items:[
            {id:0, task:"Code", money:2000},
            {id:1, task:"Eat", money:5000},
            {id:2, task:"Play", money:3000}
        ]
    }

    //To Access these above data we need to return :-
    return {
        getData: function(){
            return data;
        },
        getItem: function(){
            return this.getData().items
        }
    }
})();

//UI Controller :-
const uiController = (() => {
    return {
        showData: function(items){
            
        }
    }
})();

//APP Controller :-
const appController = (() => {
    return{
        appSatrt: function (){
            const items = dataController.getItem();
            if(items.length > 0){
                uiController.showData(items)
            }
        }
    }
})();

appController.appSatrt();

const expression = (function a(){
    //Private :-
    const x = 1000;
    //Retur the X to access in the object format :-
    return {
        vslueA: x
    }
})()
console.log(expression.vslueA)