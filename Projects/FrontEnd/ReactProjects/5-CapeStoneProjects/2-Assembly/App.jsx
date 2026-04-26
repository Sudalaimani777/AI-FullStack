import React from "react"
import languages from "./Data/languages.js";
import { useState } from "react";


export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const languageElements = currentWord.split("").map((letter, index) => (
        <span key={index} className="letter">{letter.toUpperCase()}</span>
    ))

    const keyboardElements = alphabet.split("").map(letter => (
        <button key={letter}>{letter}</button>
    ))

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
