import React from 'react'
import { useState } from 'react'
const Pad = ({ color, darkMode, handleClassOn, toggle, id }) => {

    return (
        <>
            <button
                onClick={() => toggle(id)}
                style={{ backgroundColor: color }}
                className={handleClassOn ? "on" : ""}
            >
            </button>
        </>
    )
}

export default Pad