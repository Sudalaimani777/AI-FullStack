//We can Export Multiple function and other stuffs instead of using export infornt of every functions :-
//This is kunown as named export

function add (a, b){
    return a + b;
}

function minus (a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function multiple (a, b){
    return a * b;
}

export {add, minus, multiple, divide}