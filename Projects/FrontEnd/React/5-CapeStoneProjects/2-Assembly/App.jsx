import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Confetti from "react-confetti";
import { getFarewellText, generateRandomWord } from "./Data/utils.js";
import { words } from "./Data/words.js";

const MAX_WRONG_GUESSES = 8;
const WORD_CHIP_COUNT = MAX_WRONG_GUESSES + 1;

function getWordChoices(answer) {
    const distractors = words
        .filter(word => word !== answer)
        .sort(() => Math.random() - 0.5)
        .slice(0, WORD_CHIP_COUNT - 1);

    return [answer, ...distractors];
}

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState(() => generateRandomWord());
    const [wordChoices, setWordChoices] = useState(() => getWordChoices(currentWord));
    const [guesses, setGuesses] = useState([]);
    const [farewellText, setFarewellText] = useState("");
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const wrongGuessCount = guesses.filter(letter => !currentWord.includes(letter)).length;
    const isGameLost = wrongGuessCount >= MAX_WRONG_GUESSES;
    const isGameWon = currentWord.split("").every(letter => guesses.includes(letter));
    const isGameOver = isGameLost || isGameWon;
    const lastLostChoice = wrongGuessCount > 0 ? wordChoices[wrongGuessCount] : null;
    const attemptsRemaining = MAX_WRONG_GUESSES - wrongGuessCount;

    useEffect(() => {
        if (lastLostChoice && !isGameOver) {
            setFarewellText(getFarewellText(lastLostChoice));
        } else {
            setFarewellText("");
        }
    }, [lastLostChoice, isGameOver]);

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

    const letterElements = currentWord.split("").map((letter, index) => (
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

    function handleResetGame() {
        const nextWord = generateRandomWord();
        setCurrentWord(nextWord);
        setWordChoices(getWordChoices(nextWord));
        setGuesses([]);
        setFarewellText("");
    }

    const wordChoiceElements = wordChoices.map((word, index) => {
        const isAnswer = index === 0;
        const isEliminated = !isAnswer && index <= wrongGuessCount;
        const showAnswer = isAnswer && isGameOver;

        return (
            <span
                key={`${word}-${index}`}
                className={clsx("chip", {
                    answer: showAnswer,
                    lost: isEliminated,
                })}
                aria-label={`${word}${showAnswer ? " correct answer" : isEliminated ? " eliminated option" : " remaining option"}`}
            >
                {word}
            </span>
        );
    });

    const newGameBtn = isGameOver ? (
        <button className="new-game" onClick={handleResetGame}>
            New Game
        </button>
    ) : null;

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

            <section className="language-chips" aria-label="Answer and remaining random words">
                {wordChoiceElements}
            </section>

            <section
                className="word"
                aria-label="Word to guess"
                role="group"
                aria-describedby="word-status"
            >
                {letterElements}
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
