import React from 'react'
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"
const Star = ({isFilled, handleStarChange}) => {
    return (
        <>
            <button
                onClick={handleStarChange}
                aria-pressed={isFilled}
                aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
                className="favorite-button"
            >
                <img
                    src={isFilled ? starFilled : starEmpty}
                    alt={isFilled ? "filled star icon" : "empty star icon"}
                    className="favorite"
                />
            </button>
        </>
    )
}

export default Star