import { useState } from "react";
import Die from "./Die"
import Confetti from "react-confetti"

export default function App() {

    const [numbers, setNumbers] = useState(() => generateNewDie()); //We use the callback function 
    // console.log(numbers);

    const gameWon = numbers.every(die => die.isHeld) && numbers.every(die => die.value === numbers[0].value);

    function generateNewDie() {
        const dieNum = [];
        for (let i = 0; i < 10; i++) {
            const randomNum = Math.ceil(Math.random() * 6);
            dieNum.push({ value: randomNum, isHeld: false, id: i });
        }
        return dieNum
    }

    function handleRollDice() {
        if (!gameWon) {
            setNumbers(prevDice => prevDice.map(die => die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }));
        } else {
            const newDice = generateNewDie();
            setNumbers(newDice);
        }
    }

    function hold(id) {
        // console.log(id)
        setNumbers(prevDice => prevDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die));
    }


    return (
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {
                    numbers.map(number => <Die key={number.id} number={number.value} backgroundColor={number.isHeld ? "#59E391" : "white"} hold={hold} id={number.id} />)
                }
            </div>
            <button className="roll-dice" onClick={handleRollDice}>{gameWon ? "New Game" : "Roll Dice"}</button>
        </main>
    )
}