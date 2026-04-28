import React, { useEffect, useState } from "react";
import clsx from "clsx";
import languages from "./Data/languages.js";
import { getFarewellText, generateRandomWord } from "./Data/utils.js";
import Confetti from "react-confetti";

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState(() => generateRandomWord());
    const [guesses, setGuesses] = useState([]);
    const [farewellText, setFarewellText] = useState("");
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const wrongGuessCount = guesses.filter(letter => !currentWord.includes(letter)).length;
    const isGameLost = wrongGuessCount >= languages.length - 1;
    const isGameWon = currentWord.split("").every(letter => guesses.includes(letter));
    const isGameOver = isGameLost || isGameWon;
    const lastLostLanguage = wrongGuessCount > 0 ? languages[wrongGuessCount - 1].name : null;
    const attemptsRemaining = languages.length - 1 - wrongGuessCount;

    useEffect(() => {
        if (lastLostLanguage && !isGameOver) {
            setFarewellText(getFarewellText(lastLostLanguage));
        } else {
            setFarewellText("");
        }
    }, [lastLostLanguage, isGameOver]);

    const statusMessage = isGameWon
        ? "You win! Well done!"
        : isGameLost
            ? `Game over! The word was ${currentWord.toUpperCase()}.`
            : farewellText
                ? `${farewellText}. ${attemptsRemaining} attempts remaining.`
                : `${attemptsRemaining} attempts remaining.`;

    const wordStatusText = currentWord
        .split("")
        .map(letter => (guesses.includes(letter) || isGameLost ? letter.toUpperCase() : "blank"))
        .join(", ");

    const languageElements = currentWord.split("").map((letter, index) => (
        <span key={index} className="letter" aria-hidden="true">
            {guesses.includes(letter) || isGameLost ? letter.toUpperCase() : ""}
        </span>
    ));

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
                disabled={isGuessed || isGameOver}
                aria-label={`Letter ${letter.toUpperCase()}${isGuessed ? (isCorrect ? ", already guessed correctly" : ", already guessed and not in the word") : ""}`}
            >
                {letter.toUpperCase()}
            </button>
        );
    });

    function handleGuesses(letter) {
        setGuesses(prevLetter => (
            prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
        ));
    }

    function handleResetGame(){
        setGuesses([]);
        setCurrentWord(generateRandomWord());
    }

    const newGameBtn = isGameOver ? <button className="new-game" onClick={handleResetGame}>New Game</button> : null;

    return (
        <main aria-labelledby="game-title">
            <header>
                <h1 id="game-title">Assembly: Endgame</h1>
                <p id="game-instructions">
                    Guess the word within 8 attempts to keep the programming world safe from
                    Assembly!
                </p>
            </header>

            <section
                className={clsx("game-status", { won: isGameWon, lost: isGameLost })}
                aria-live="polite"
                aria-atomic="true"
                role="status"
            >
                {isGameWon && (
                    <>
                        <h2>You win!</h2>
                        <p>Well done!</p>
                        <div aria-hidden="true">
                            <Confetti
                                width={window.innerWidth}
                                height={window.innerHeight}
                                recycle={false}
                                numberOfPieces={500}
                            />
                        </div>
                    </>
                )}
                {isGameLost && (
                    <>
                        <h2>Game over!</h2>
                        <p>You lose! Better luck next time!</p>
                    </>
                )}
                {!isGameOver && farewellText && <p className="farewell-message">{farewellText}</p>}
            </section>

            <p className="sr-only" aria-live="polite" aria-atomic="true">
                {statusMessage}
            </p>

            <section className="language-chips" aria-label="Programming languages remaining">
                {languages.map((lang, index) => (
                    <span
                        key={lang.name}
                        className={clsx("chip", { lost: index < wrongGuessCount })}
                        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
                        aria-label={`${lang.name}${index < wrongGuessCount ? " eliminated" : " remaining"}`}
                    >
                        {lang.name}
                    </span>
                ))}
            </section>

            <section
                className="word"
                aria-label="Word to guess"
                role="group"
                aria-describedby="word-status"
            >
                {languageElements}
            </section>

            <p id="word-status" className="sr-only">
                Current word: {wordStatusText}
            </p>

            <section
                className="keyboard"
                aria-label="Letter keyboard"
                role="group"
                aria-describedby="game-instructions"
            >
                {keyboardElements}
            </section>

            {newGameBtn}
        </main>
    );
}
