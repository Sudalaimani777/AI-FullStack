//Switch Operator :-
const age = 20;

switch(true){
    case age >= 18 :
        console.log(`Wow, you are an adult`);
        break;
    case age < 10 :
        console.log(`Sorry, you are not an adult`)
        break;
    default :
        console.log(`Not a valid age`);
}

const color = "red";
switch(color){
    case "blue" :
        console.log(`The color is blue`);
        break;
    case "red" :
        console.log(`The color is red`);
        break;
    default :
        console.log(`Not a valid color`);
}