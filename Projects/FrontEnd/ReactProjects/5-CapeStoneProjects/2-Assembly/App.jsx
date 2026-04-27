import React from "react"
import languages from "./Data/languages.js";
import { useState } from "react";
import clsx from "clsx";


export default function AssemblyEndgame() {
    // State to track the current word to guess and the letters guessed by the player
    const [currentWord, setCurrentWord] = useState("react");
    const [guesses, setGuesses] = useState([]);
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    const wrongGuessCount = guesses.filter(letter => !currentWord.includes(letter)).length;
    console.log(wrongGuessCount);

    const isGameLost = wrongGuessCount >= languages.length - 1;
    const isGameWon = currentWord.split("").every(letter => guesses.includes(letter));
    const isGameOver = isGameLost || isGameWon;

    const languageElements = currentWord.split("").map((letter, index) => (
        <span key={index} className="letter">
            {guesses.includes(letter) ? letter.toUpperCase() : ""}
        </span>
    ))
    // Generate keyboard buttons for each letter, applying styles based on whether the letter has been guessed and if it's correct or wrong
    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guesses.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);

        return (
            <button
                key={letter}
                onClick={() => handleGuesses(letter)}
                className={clsx({
                    correct: isCorrect,
                    wrong: isGuessed && !isCorrect,
                })}
                disabled={isGuessed}
            >
                {letter.toUpperCase()}
            </button>
        )
    })
    // Add the guessed letter to the guesses state, ensuring no duplicates
    function handleGuesses(letter){
        setGuesses(prevLetter => (
            prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
        ))
    }
    // If the game is over, show the "New Game" button
    const newGameBtn = isGameOver ? <button className="new-game">New Game</button> : null;

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                    programming world safe from Assembly!</p>
            </header>
            {/* Game Status */}
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            {/* Word display */}
            <section className="language-chips">
                {
                    languages && languages.map((lang, index) => (
                        <span
                            key={lang.name}
                            className={clsx("chip", { lost: index < wrongGuessCount })}
                            style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
                        >
                            {lang.name}
                        </span>
                    ))
                }
            </section>
            {/* Word */}
            <section className="word">
                {languageElements}
            </section>
            {/* Keyboard */}
            <section className="keyboard">
                {keyboardElements}
            </section>
            {/* New Game Button */}
            {newGameBtn}
        </main>
    )
}
