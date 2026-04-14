import Pad from "./Pad";
import pads from "./pads"
import { useState } from "react"

export default function App({ darkMode }) {
    const [colorPads, setColorPads] = useState(pads);

    const toggle = id => {
        setColorPads(prevPads => prevPads.map(items => items.id === id ? { ...items, on: !items.on } : items))
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
            </div>
        </main>
    )
}
