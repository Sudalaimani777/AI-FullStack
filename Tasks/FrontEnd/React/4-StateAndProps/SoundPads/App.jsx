import Pad from "./Pad";
import pads from "./pads"
import { useState } from "react"

export default function App({darkMode}) {
    const [colorPads, setColorPads] = useState(pads);
    
    return (
        <main>
            <div className="pad-container">
                {/* <button>s go here */}
                {
                    colorPads.map(pad => (
                        <Pad 
                            key={pad.id} 
                            color={pad.color} 
                            darkMode={darkMode} 
                            handleClassOn={pad.on}
                        />
                    ))
                }
            </div>
        </main>
    )
}
