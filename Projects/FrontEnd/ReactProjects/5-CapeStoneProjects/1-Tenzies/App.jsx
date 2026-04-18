import { useState } from "react";
import Die from "./Die"

export default function App() {

    const [numbers, setNumbers] = useState(generateNewDie());
    console.log(numbers)

    function generateNewDie() {
        const dieNum = [];
        for (let i = 0; i < 10; i++) {
            const randomNum = Math.ceil(Math.random() * 6);
            dieNum.push(randomNum);
        }
        return dieNum
    }

    return (
        <main>
            <div className="dice-container">
                {
                    numbers.map(number => <Die number={number} />)
                }
            </div>
        </main>
    )
}