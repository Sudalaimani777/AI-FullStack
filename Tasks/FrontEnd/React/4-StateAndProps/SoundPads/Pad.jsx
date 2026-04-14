import React from 'react'
import { useState } from 'react'
const Pad = ({color, darkMode, handleClassOn}) => {

    const [isOn, setIsOn] = useState(handleClassOn);

    const handleStyle = () => setIsOn(prevColor => !prevColor);

  return (
    <>
        <button  
            onClick={handleStyle}
            style={{backgroundColor: color}} 
            className={isOn ? "on" : ""}
        >
            Hii
        </button>
    </>
  )
}

export default Pad