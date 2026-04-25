import React from "react"
import languages from "./Data/languages.js";


export default function AssemblyEndgame() {
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
            <section className="language-chips">
                {
                    languages && languages.map(lang => (
                        <span key={lang.name} className="chip" style={{ backgroundColor: lang.backgroundColor, color: lang.color }}>
                            {lang.name}
                        </span>
                    ))
                }
            </section>
        </main>
    )
}
