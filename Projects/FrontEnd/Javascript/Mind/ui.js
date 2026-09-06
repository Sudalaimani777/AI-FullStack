

const container = document.querySelector("#thoughtList");

export function renderThought(thought, onDelete, onEdit) {
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
            <div class="flex gap-2">
                <button class="text-blue-500 edit-btn">✏️</button>
                <button class="text-red-500 delete-btn">x</button>
            </div>
        `
         
        // Add event listener for delete button
        card.querySelector(".delete-btn").addEventListener("click", (e) => {
            onDelete(thought.id);
        })
        
        // Add event listener for edit button
        card.querySelector(".edit-btn").addEventListener("click", (e) => {
            if (onEdit) {
                onEdit(thought.id, displayContent, displayType);
            }
        })
        
        // Append the card to the container
        container.appendChild(card);
    })

}

