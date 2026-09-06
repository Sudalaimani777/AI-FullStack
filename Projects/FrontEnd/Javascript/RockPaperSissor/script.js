const moves = [
    {
        name: "rock",
        emoji: "🪨",
        accent: "from-slate-500 to-slate-700",
        glow: "shadow-[0_18px_40px_rgba(100,116,139,0.35)]",
        beats: "scissors",
        tagline: "Heavy. Cold. Unbothered.",
    },
    {
        name: "paper",
        emoji: "📄",
        accent: "from-cyan-400 to-sky-500",
        glow: "shadow-[0_18px_40px_rgba(34,211,238,0.32)]",
        beats: "rock",
        tagline: "Clean cut. Quiet power.",
    },
    {
        name: "scissors",
        emoji: "✂️",
        accent: "from-fuchsia-400 to-rose-500",
        glow: "shadow-[0_18px_40px_rgba(244,114,182,0.32)]",
        beats: "paper",
        tagline: "Sharp enough to end the debate.",
    },
];

const state = {
    playerScore: 0,
    computerScore: 0,
    rounds: [],
    isQuit: false,
};

const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const roundWinnerEl = document.getElementById("roundWinner");
const playerChoiceEmojiEl = document.getElementById("playerChoiceEmoji");
const playerChoiceTextEl = document.getElementById("playerChoiceText");
const computerChoiceEmojiEl = document.getElementById("computerChoiceEmoji");
const computerChoiceTextEl = document.getElementById("computerChoiceText");
const statusTextEl = document.getElementById("statusText");
const statusSubtextEl = document.getElementById("statusSubtext");
const historyListEl = document.getElementById("historyList");
const roundCountEl = document.getElementById("roundCount");
const choicesContainerEl = document.getElementById("choicesContainer");
const quitButtonEl = document.getElementById("quitButton");

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function getRandomMove() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function decideWinner(playerMove, computerMove) {
    if (playerMove.name === computerMove.name) {
        return "tie";
    }

    return playerMove.beats === computerMove.name ? "player" : "computer";
}

function getVerdictMessage(winner, playerMove, computerMove) {
    if (winner === "tie") {
        return `Stalemate. ${capitalize(playerMove.name)} meets ${computerMove.name}.`;
    }

    if (winner === "player") {
        return `${capitalize(playerMove.name)} defeats ${computerMove.name}. You own the round.`;
    }

    return `${capitalize(computerMove.name)} defeats ${playerMove.name}. Computer takes the round.`;
}

function renderChoices() {
    choicesContainerEl.innerHTML = "";

    moves.forEach(move => {
        const button = document.createElement("button");
        button.type = "button";
        button.disabled = state.isQuit;
        button.className = [
            "group rounded-[1.5rem] border border-white/10 bg-slate-800/80 p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 disabled:cursor-not-allowed disabled:opacity-40",
            move.glow,
        ].join(" ");
        button.innerHTML = `
            <div class="flex items-center justify-between gap-4">
                <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">${capitalize(move.name)}</p>
                    <p class="mt-2 text-sm text-slate-300">${move.tagline}</p>
                </div>
                <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${move.accent} text-4xl shadow-lg">
                    ${move.emoji}
                </div>
            </div>
        `;

        button.addEventListener("click", () => playRound(move));
        choicesContainerEl.appendChild(button);
    });
}

function renderHistory() {
    historyListEl.innerHTML = "";

    if (state.rounds.length === 0) {
        historyListEl.innerHTML = `
            <li class="rounded-2xl border border-dashed border-white/10 bg-slate-900/60 p-4 text-sm leading-6 text-slate-400">
                No rounds played yet. Throw a move and the arena feed will light up.
            </li>
        `;
        roundCountEl.textContent = "0 rounds";
        return;
    }

    state.rounds.slice().reverse().forEach(round => {
        const item = document.createElement("li");
        item.className = "rounded-2xl border border-white/10 bg-slate-900/70 p-4";
        item.innerHTML = `
            <div class="flex items-start justify-between gap-3">
                <div>
                    <p class="text-sm font-semibold text-white">Round ${round.id}</p>
                    <p class="mt-1 text-sm text-slate-300">
                        You played <span class="font-semibold text-cyan-300">${round.player.emoji} ${capitalize(round.player.name)}</span>
                        against
                        <span class="font-semibold text-fuchsia-300">${round.computer.emoji} ${capitalize(round.computer.name)}</span>.
                    </p>
                </div>
                <span class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                    round.winner === "player"
                        ? "bg-cyan-400/15 text-cyan-200"
                        : round.winner === "computer"
                            ? "bg-rose-400/15 text-rose-200"
                            : "bg-slate-400/15 text-slate-200"
                }">
                    ${round.winner === "tie" ? "Tie" : round.winner === "player" ? "Player" : "Computer"}
                </span>
            </div>
            <p class="mt-3 text-sm leading-6 text-slate-400">${round.message}</p>
        `;
        historyListEl.appendChild(item);
    });

    roundCountEl.textContent = `${state.rounds.length} ${state.rounds.length === 1 ? "round" : "rounds"}`;
}

function updateScoreboard() {
    playerScoreEl.textContent = state.playerScore;
    computerScoreEl.textContent = state.computerScore;
}

function setChoiceCard(target, move, role) {
    const emojiEl = role === "player" ? playerChoiceEmojiEl : computerChoiceEmojiEl;
    const textEl = role === "player" ? playerChoiceTextEl : computerChoiceTextEl;

    emojiEl.textContent = move.emoji;
    textEl.textContent = capitalize(move.name);
    target.className = role === "player"
        ? "mt-4 rounded-[1.4rem] border border-cyan-300/25 bg-cyan-400/15 p-6 text-center"
        : "mt-4 rounded-[1.4rem] border border-fuchsia-300/25 bg-fuchsia-400/15 p-6 text-center";
}

function renderStatus(message, winner) {
    roundWinnerEl.textContent =
        winner === "tie" ? "Tie round" : winner === "player" ? "Player wins" : "Computer wins";
    statusTextEl.textContent = message;

    if (state.isQuit) {
        const finalWinner = state.playerScore === state.computerScore
            ? "Nobody. It ends in a stylish draw."
            : state.playerScore > state.computerScore
                ? "You leave the arena as champion."
                : "The machine claims the crown this time.";

        statusTextEl.textContent = "Match concluded.";
        statusSubtextEl.textContent = `Final score: ${state.playerScore} to ${state.computerScore}. ${finalWinner}`;
        return;
    }

    statusSubtextEl.textContent = winner === "tie"
        ? "No points awarded. Throw another move and break the symmetry."
        : winner === "player"
            ? "Point added to your score. Keep the momentum alive."
            : "Computer scores this one. Time to answer back.";
}

function playRound(playerMove) {
    if (state.isQuit) {
        return;
    }

    const computerMove = getRandomMove();
    const winner = decideWinner(playerMove, computerMove);
    const message = getVerdictMessage(winner, playerMove, computerMove);

    if (winner === "player") {
        state.playerScore += 1;
    } else if (winner === "computer") {
        state.computerScore += 1;
    }

    state.rounds.push({
        id: state.rounds.length + 1,
        player: playerMove,
        computer: computerMove,
        winner,
        message,
    });

    setChoiceCard(document.getElementById("playerChoiceCard"), playerMove, "player");
    setChoiceCard(document.getElementById("computerChoiceCard"), computerMove, "computer");
    updateScoreboard();
    renderStatus(message, winner);
    renderHistory();
}

function quitMatch() {
    state.isQuit = true;
    renderChoices();
    renderStatus("", "tie");
    quitButtonEl.disabled = true;
    quitButtonEl.classList.add("cursor-not-allowed", "opacity-40");
    roundWinnerEl.textContent = "Match ended";
}

quitButtonEl.addEventListener("click", quitMatch);

renderChoices();
renderHistory();
updateScoreboard();
