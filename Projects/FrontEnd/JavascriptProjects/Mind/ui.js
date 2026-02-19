

const container = document.querySelector("#thoughtList");

export function renderThought(thought, onDlete) {
    console.log(onDlete);
    
    container.innerHTML = "";
    thought.forEach(thought => {
        const card = document.createElement("div");
        card.className = "bg-slate-800 p-3 rounded flex justify-between items-center";
        
        // Handle both data formats: {content, type, createdAt} and {title, body}
        const displayContent = thought.content || thought.title || 'No content';
        const displayType = thought.type || 'note';
        const displayDate = thought.createdAt ? new Date(thought.createdAt).toLocaleString() : (thought.body || '');
        
        card.innerHTML = `
            <div>
                <p class="font-semibold">${displayContent}</p>
                <span class="text-xs text-slate-400">${displayType} - ${displayDate}</span>
            </div>
                <button class="text-red-500">x</button>
        `
         
        // Add event listener for delete button
        card.querySelector("button").addEventListener("click", (e) => {
            onDlete(thought.id);
        })
        // Append the card to the container
        container.appendChild(card);
    })

}

