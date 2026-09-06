const containerElement = document.querySelector(".container");

//Career Array :-
const careerArray = ["Web Developer", "Artist", "Gamer", "Freelancer"];

//Character Index and Career Index :-
let characterIndex = 0, careerIndex = 0;

updateUI()
//Function To update the UI :-
function updateUI(){
    characterIndex++;   
    containerElement.innerHTML = `
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-8 tracking-tight">I am ${careerArray[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careerArray[careerIndex].slice(0, characterIndex)}</h1>    
    `

    if(characterIndex === careerArray[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }

    if(careerIndex === careerArray.length){
        careerIndex = 0;    
    }

    setTimeout(updateUI,400)
}
