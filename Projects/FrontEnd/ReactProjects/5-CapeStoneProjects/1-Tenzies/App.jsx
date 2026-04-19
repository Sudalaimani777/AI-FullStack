import { useState } from "react";
import Die from "./Die"

export default function App() {

    const [numbers, setNumbers] = useState(generateNewDie());
    console.log(numbers)

    function generateNewDie() {
        const dieNum = [];
        for (let i = 0; i < 10; i++) {
            const randomNum = Math.ceil(Math.random() * 6);
            dieNum.push({value: randomNum, isHeld: true, id: i});
        }
        return dieNum
    }

    function handleRollDice() {
        setNumbers(prevDice => prevDice = generateNewDie());
    }

     /**
     * Challenge: Create a function `hold` that takes
     * `id` as a parameter. For now, just have the function
     * console.log(id).
     * 
     * Then, figure out how to pass that function down to each
     * instance of the Die component so when each one is clicked,
     * it logs its own unique ID property. (Hint: there's more
     * than one way to make that work, so just choose whichever
     * you want)
     */

     const hold = id => {
        console.log(id)

     }


    return (
        <main>
            <div className="dice-container">
                {
                    numbers.map(number => <Die key={number.id} number={number.value} backgroundColor={number.isHeld ? "#59E391" : "white"} hold={hold} id={number.id}/>)
                }
            </div>
                <button className="roll-dice" onClick={handleRollDice}>Roll Dice</button>
        </main>
    )
}