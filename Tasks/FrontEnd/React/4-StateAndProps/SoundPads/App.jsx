import pads from "./pads"
import { useState } from "react"

export default function App() {
    const [colorPads, setColorPads] = useState(pads);
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    return (
        <main>
            <div className="pad-container">
                {/* <button>s go here */}
                {
                    colorPads.map(pad => (
                        <button key={pad.id} className={`pad ${pad.color}`}>Hii</button>
                    ))
                }
            </div>
        </main>
    )
}
