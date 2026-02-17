

const container = document.querySelector("#thoughtList");

export function renderThought(thought, onDlete) {
    container.innerHTML = "";
    thought.forEach(thought => {
        const card = document.createElement("div");
        card.className = "bg-slate-800 p-3 rounded flex justify-between items-center";
        card.innerHTML = `
            <div>
                <p class="font-semibold">${thought.content}</p>
                <span class="text-xs text-slate-400">${thought.type} - ${thought.createdAt}</span>
            </div>
                <button class="text-red-500">x</button>
        `
        // console.log(card); 
        container.appendChild(card);

        card.querySelector("button").addEventListener("click", (e) => {
            console.log(e.target.parentElement);
            
        })
    })

}

renderThought([{id: 1, type: "thought", content: "This is a thought", createdAt: "2024-06-01"}])