const incBtn = document.querySelector("#increment");
const decBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");
const displayedValue = document.querySelector("#count");

let count = 0
displayedValue.textContent = count;


function allEvent() {
    incBtn.addEventListener("click", incEvent);
    decBtn.addEventListener("click", decEvent);
    resetBtn.addEventListener("click", resetCount);
}
allEvent();

function incEvent() {
    count += 1;
    displayedValue.textContent = count;
}

function decEvent () {
    count -= 1;
    displayedValue.textContent = count;
}

function resetCount () {
    count = 0;
    displayedValue.textContent = count;
}