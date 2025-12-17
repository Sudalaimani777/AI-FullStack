// ==========================================
// EXTERNAL API INTEGRATION WITH AJAX
// ==========================================
/**
 * This script demonstrates how to fetch data from an external API
 * using AJAX and XMLHttpRequest
 * 
 * API Used: JSONPlaceholder - Free fake API for testing
 * Endpoint: https://jsonplaceholder.typicode.com/users
 * 
 * JSONPlaceholder provides:
 * - Fake REST API for prototyping and testing
 * - No registration required
 * - Returns realistic data
 * - Perfect for learning and demo purposes
 */

// API URL for reference
// https://jsonplaceholder.typicode.com/users

// ==========================================
// DOM ELEMENT SELECTION
// ==========================================
// Select the button that will trigger the API request
const btn = document.querySelector("button");


// ==========================================
// EVENT LISTENER INITIALIZATION
// ==========================================
/**
 * Initialize event listeners
 * Attach click event to button to fetch users from API
 */
function loadAllEvent() {
    // When button is clicked, execute getUsers function
    btn.addEventListener("click", getUsers);
}
// Call initialization function
loadAllEvent();

// ==========================================
// FUNCTION: GET USERS FROM EXTERNAL API
// ==========================================
/**
 * Fetches user data from JSONPlaceholder API and displays it
 * 
 * API Details:
 * - Endpoint: https://jsonplaceholder.typicode.com/users
 * - Method: GET
 * - Returns: Array of 10 user objects
 * - Response Format: JSON
 * 
 * Each user object contains:
 * - id, name, username, email, phone, website
 * - address (nested object)
 * - company (nested object)
 * 
 * Process:
 * 1. Create XMLHttpRequest object
 * 2. Configure GET request to external API
 * 3. Send the request over the internet
 * 4. Parse JSON response from API
 * 5. Loop through users and generate HTML cards
 * 6. Display all users in the DOM
 */
function getUsers() {
    // ==========================================
    // STEP 1: CREATE XMLHttpRequest OBJECT
    // ==========================================
    /**
     * Create XHR instance to communicate with external API
     */
    const xhr = new XMLHttpRequest();

    // ==========================================
    // STEP 2: CONFIGURE THE REQUEST
    // ==========================================
    /**
     * Configure GET request to external API endpoint
     * 
     * Parameters:
     * - Method: "GET" - Retrieve data from API
     * - URL: Full API endpoint URL (not a local file)
     * - Async: true - Non-blocking asynchronous request
     * 
     * Note: Cross-Origin requests work because JSONPlaceholder
     * has CORS enabled (allows requests from any domain)
     */
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    // ==========================================
    // STEP 3: SEND THE REQUEST
    // ==========================================
    /**
     * Execute the HTTP request to the external API
     * Request travels over the internet to JSONPlaceholder servers
     */
    xhr.send();

    // ==========================================
    // STEP 4: HANDLE THE API RESPONSE
    // ==========================================
    /**
     * onload event fires when API responds successfully
     * Processes the JSON data and renders user cards
     */
    xhr.onload = function () {
        // Select the container div for displaying users
        const displayUsers = document.querySelector("div");

        /**
         * Parse JSON response from API
         * Converts JSON string to JavaScript array of objects
         * this.responseText contains the raw JSON from the API
         */
        const users = JSON.parse(this.responseText);

        // Log users array to console for debugging
        console.log(users);

        /**
         * Initialize empty string to accumulate HTML
         * Will be populated with user cards in the loop
         */
        let output = "";

        /**
         * Iterate through each user in the array
         * Build HTML card for each user with their information
         */
        users.forEach((users) => {
            /**
             * Append HTML for each user using template literals
             * 
             * Features:
             * - Responsive design with Tailwind CSS
             * - Hover effects (shadow-xl, scale-105)
             * - Smooth transitions
             * - Mobile-optimized text sizes
             * - break-all class for long emails/websites
             * - Emerald color theme for consistency
             */
            output += `
                
                <ul class="bg-white rounded-xl shadow-lg p-6 space-y-3 border-l-4 border-emerald-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <li class="text-gray-700 text-sm sm:text-base"><span class="font-semibold text-emerald-600">ID:</span> ${users.id}</li>
                    <li class="text-gray-700 text-sm sm:text-base"><span class="font-semibold text-emerald-600">Name:</span> ${users.name}</li>
                    <li class="text-gray-700 text-sm sm:text-base"><span class="font-semibold text-emerald-600">Username:</span> ${users.username}</li>
                    <li class="text-gray-700 text-sm sm:text-base break-all"><span class="font-semibold text-emerald-600">Email:</span> ${users.email}</li>
                    <li class="text-gray-700 text-sm sm:text-base"><span class="font-semibold text-emerald-600">Phone:</span> ${users.phone}</li>
                    <li class="text-gray-700 text-sm sm:text-base break-all"><span class="font-semibold text-emerald-600">Website:</span> ${users.website}</li>
                </ul>
            `
        });

        /**
         * Insert all generated HTML into the DOM
         * Replaces any existing content in the container
         */
        displayUsers.innerHTML = output
    }
}