import React from "react"
import languages from "./Data/languages.js";
import { useState } from "react";
import clsx from "clsx";


export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react");
    const [guesses, setGuesses] = useState([]);
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    console.log(guesses);

    const languageElements = currentWord.split("").map((letter, index) => (
        <span key={index} className="letter">
            {guesses.includes(letter) ? letter.toUpperCase() : ""}
        </span>
    ))

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guesses.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)

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

    function handleGuesses(letter){
        setGuesses(prevLetter => (
            prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
        ))
    }

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                    programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            {/* Word display */}
            <section className="language-chips">
                {
                    languages && languages.map(lang => (
                        <span key={lang.name} className="chip" style={{ backgroundColor: lang.backgroundColor, color: lang.color }}>
                            {lang.name}
                        </span>
                    ))
                }
            </section>
            <section className="word">
                {languageElements}
            </section>
            {/* Keyboard */}
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}
