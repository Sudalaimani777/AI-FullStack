// Get DOM elements
const numColorsInput = document.getElementById('numColors');
const generateBtn = document.getElementById('generateBtn');
const colorDisplay = document.getElementById('colorDisplay');
const displayText = document.getElementById('displayText');
const colorGrid = document.getElementById('colorGrid');
const copyAllBtn = document.getElementById('copyAllBtn');
const successMsg = document.getElementById('successMsg');

let generatedColors = [];

// Generate random hex color
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        successMsg.classList.remove('hidden');
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 2000);
    });
}

// Create color card
function createColorCard(color) {
    const card = document.createElement('div');
    card.className = 'flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-200';

    card.innerHTML = `
        <div class="w-16 h-16 rounded-lg border-2 border-gray-300 shadow-md" style="background-color: ${color};"></div>
        <div class="flex-1">
            <p class="font-mono font-semibold text-gray-700 text-lg">${color}</p>
        </div>
        <button class="copy-single bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-semibold">
            Copy
        </button>
    `;

    // Add copy event to the button
    const copyBtn = card.querySelector('.copy-single');
    copyBtn.addEventListener('click', () => {
        copyToClipboard(color);
    });

    return card;
}

// Generate colors based on user input
function generateColors() {
    const numColors = parseInt(numColorsInput.value);

    if (numColors < 1 || numColors > 10) {
        alert('Please enter a number between 1 and 10');
        return;
    }

    generatedColors = [];
    colorGrid.innerHTML = '';

    // Generate random colors
    for (let i = 0; i < numColors; i++) {
        const color = generateRandomColor();
        generatedColors.push(color);
    }

    // Update main display with first color
    colorDisplay.style.backgroundColor = generatedColors[0];
    displayText.textContent = generatedColors[0];

    // Create color cards
    generatedColors.forEach(color => {
        const card = createColorCard(color);
        colorGrid.appendChild(card);
    });

    // Show copy all button if more than one color
    if (numColors > 1) {
        copyAllBtn.classList.remove('hidden');
    } else {
        copyAllBtn.classList.add('hidden');
    }
}

// Event listeners
generateBtn.addEventListener('click', generateColors);

copyAllBtn.addEventListener('click', () => {
    const allColors = generatedColors.join(', ');
    copyToClipboard(allColors);
});

// Allow Enter key to generate
numColorsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateColors();
    }
});
