// =============================================
// LOCAL STORAGE
// =============================================
// localStorage stores data with NO expiry.
// Data stays even after the browser is closed.
// Only stores strings.


// --- 1. setItem() - Save data ---
localStorage.setItem('username', 'Alice');
localStorage.setItem('theme', 'dark');
localStorage.setItem('age', '25');       // numbers also saved as strings


// --- 2. getItem() - Read data ---
const username = localStorage.getItem('username');
console.log(username);   // 'Alice'

const theme = localStorage.getItem('theme');
console.log(theme);      // 'dark'

// If the key doesn't exist, returns null
const missing = localStorage.getItem('email');
console.log(missing);    // null


// --- 3. removeItem() - Delete one item ---
localStorage.removeItem('age');
console.log(localStorage.getItem('age'));  // null (deleted)


// --- 4. clear() - Delete ALL items ---
// localStorage.clear();  // commented out so other items stay for demo


// --- 5. length - How many items are stored ---
console.log(localStorage.length);  // 2 (username, theme)


// --- 6. key() - Get key name by index ---
console.log(localStorage.key(0));  // 'username' (order may vary)


// --- 7. Check if item exists before using it ---
if (localStorage.getItem('username') !== null) {
  console.log('User found:', localStorage.getItem('username'));
} else {
  console.log('No user saved.');
}


// --- 8. Practical Example: Save & load user preference ---
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    console.log('Applying saved theme:', savedTheme);
  } else {
    console.log('No theme saved, using default.');
  }
}

saveTheme('light');
loadTheme();  // 'Applying saved theme: light'
