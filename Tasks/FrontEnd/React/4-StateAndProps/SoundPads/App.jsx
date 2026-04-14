import Pad from "./Pad";
import pads from "./pads"
import { useState } from "react"

export default function App({ darkMode }) {
    const [colorPads, setColorPads] = useState(pads);

    const toggle = id => {
        setColorPads(prevPads => prevPads.map(items => items.id === id ? { ...items, on: !items.on } : items))
    }

    const resetAll = () => {
        setColorPads(prevPads => prevPads.map(items => ({...items, on: false})))
    }

    return (
        <main>
            <div className="pad-container">
                {/* <button>s go here */}
                {
                    colorPads.map(pad => (
                        <Pad
                            toggle={toggle}
                            id={pad.id}
                            key={pad.id}
                            color={pad.color}
                            handleClassOn={pad.on}
                            darkMode={darkMode}
                        />
                    ))
                }
                <button onClick={resetAll} className="reset">
                    Reset All
                </button>
            </div>
        </main>
    )
}
