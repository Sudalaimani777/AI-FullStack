// =============================================
// SESSION STORAGE
// =============================================
// sessionStorage stores data TEMPORARILY.
// Data is deleted when the browser tab is closed.
// Works exactly like localStorage — same methods.


// --- 1. setItem() - Save data ---
sessionStorage.setItem('currentPage', 'checkout');
sessionStorage.setItem('cartCount', '3');


// --- 2. getItem() - Read data ---
const page = sessionStorage.getItem('currentPage');
console.log(page);       // 'checkout'

const cart = sessionStorage.getItem('cartCount');
console.log(cart);       // '3'

// Returns null if key doesn't exist
console.log(sessionStorage.getItem('user'));  // null


// --- 3. removeItem() - Delete one item ---
sessionStorage.removeItem('cartCount');
console.log(sessionStorage.getItem('cartCount'));  // null


// --- 4. clear() - Delete ALL session items ---
// sessionStorage.clear();  // commented out to keep demo items


// --- 5. length ---
console.log(sessionStorage.length);  // 1 (only 'currentPage' left)


// --- 6. Practical Example: Track multi-step form progress ---
function saveStep(step) {
  sessionStorage.setItem('formStep', step);
  console.log('Saved form step:', step);
}

function getStep() {
  const step = sessionStorage.getItem('formStep');
  return step ? parseInt(step) : 1;  // default to step 1
}

saveStep(2);
console.log('Current step:', getStep());  // 2


// --- 7. localStorage vs sessionStorage ---
// localStorage  -> survives closing the browser
// sessionStorage -> deleted when the tab is closed
//
// Both have the same API: setItem, getItem, removeItem, clear
