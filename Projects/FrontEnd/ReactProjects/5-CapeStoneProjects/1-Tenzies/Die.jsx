export default function Die({number, backgroundColor, hold, id, isHeld}) {
    return (
        <button 
            style={{backgroundColor: backgroundColor}} 
            onClick={() => hold(id)}
            aria-pressed={isHeld}
            aria-label={`Die with value ${number}, 
            ${isHeld ? "held" : "not held"}`}
        >
                {number}
        </button>
    )
}