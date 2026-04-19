import { useState } from "react";
import Die from "./Die"

export default function App() {

    const [numbers, setNumbers] = useState(generateNewDie());
    console.log(numbers)

    function generateNewDie() {
        const dieNum = [];
        for (let i = 0; i < 10; i++) {
            const randomNum = Math.ceil(Math.random() * 6);
            dieNum.push({value: randomNum, isHeld: false, id: i});
        }
        return dieNum
    }

    function handleRollDice() {
        setNumbers(prevDice => prevDice = generateNewDie());
    }


    return (
        <main>
            <div className="dice-container">
                {
                    numbers.map(number => <Die number={number.value} />)
                }
            </div>
                <button className="roll-dice" onClick={handleRollDice}>Roll Dice</button>
        </main>
    )
}