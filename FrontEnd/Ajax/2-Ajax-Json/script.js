// ==========================================
// AJAX JSON DATA LOADER
// ==========================================
/**
 * This script demonstrates how to fetch and parse JSON data using AJAX
 * 
 * Features:
 * 1. Load single customer data from customer.json
 * 2. Load multiple customers data from customers.json
 * 3. Parse JSON responses and display them dynamically
 * 4. Use template literals for HTML generation
 */

// ==========================================
// DOM ELEMENT SELECTION
// ==========================================
// Select buttons that will trigger different AJAX requests
const singleCustomerBtn = document.querySelector("#single-customer");
const manyCustomerBtn = document.querySelector("#many-customers");

// ==========================================
// EVENT LISTENERS INITIALIZATION
// ==========================================
/**
 * Initialize all event listeners
 * This function attaches click events to both buttons
 */
function loadAllEvent() {
    // Button to load single customer data
    singleCustomerBtn.addEventListener("click", getSingleCustomer);
    // Button to load multiple customers data
    manyCustomerBtn.addEventListener("click", getManyCustomers)
}
// Call initialization function
loadAllEvent();

// ==========================================
// FUNCTION: GET SINGLE CUSTOMER
// ==========================================
/**
 * Fetches and displays data for a single customer from customer.json
 * 
 * Process:
 * 1. Create XMLHttpRequest object
 * 2. Configure GET request to customer.json
 * 3. Send the request
 * 4. Parse JSON response
 * 5. Display customer data with styling
 */
function getSingleCustomer() {
    // ==========================================
    // STEP 1: CREATE XMLHttpRequest OBJECT
    // ==========================================
    /**
     * Create new XHR instance to handle the AJAX request
     */
    const xhr = new XMLHttpRequest();

    // ==========================================
    // STEP 2: CONFIGURE THE REQUEST
    // ==========================================
    /**
     * Open GET request to customer.json file
     * Parameters:
     * - Method: "GET" - Retrieve data from server
     * - URL: "customer.json" - Local JSON file
     * - Async: true - Non-blocking asynchronous request
     */
    xhr.open("GET", "customer.json", true);

    // ==========================================
    // STEP 3: SEND THE REQUEST
    // ==========================================
    /**
     * Initiate the HTTP request
     * No data needed for GET requests
     */
    xhr.send();

    // ==========================================
    // STEP 4: HANDLE THE RESPONSE
    // ==========================================
    /**
     * onload event handler executes when request completes
     * Processes the JSON response and updates the UI
     */
    xhr.onload = function () {
        // Select the container element for displaying customer data
        const display = document.querySelector("#datas");

        /**
         * Parse JSON response
         * JSON.parse() converts JSON string to JavaScript object/array
         * this.responseText contains the raw JSON string from the file
         */
        const customer = JSON.parse(this.responseText);

        // Check if request was successful (HTTP status 200 = OK)
        if (this.status === 200) {
            /**
             * Iterate through customer data (assuming it's an array)
             * and generate HTML for each customer
             */
            customer.forEach((customer) => {
                /**
                 * Use template literals to create styled HTML
                 * Display customer information with Tailwind CSS classes
                 * ${} syntax embeds JavaScript expressions in the template
                 */
                display.innerHTML = `
                    <ul class="bg-white rounded-xl shadow-lg p-6 space-y-3 border-l-4 border-purple-500">
                        <li class="text-gray-700"><span class="font-semibold text-purple-600">ID:</span> ${customer.id}</li>
                        <li class="text-gray-700"><span class="font-semibold text-purple-600">Name:</span> ${customer.Name}</li>
                        <li class="text-gray-700"><span class="font-semibold text-purple-600">Company:</span> ${customer.Company}</li>
                        <li class="text-gray-700"><span class="font-semibold text-purple-600">Phone Number:</span> ${customer.PhoneNumber}</li>
                    </ul>
                `
            })
        }
    }
}

// ==========================================
// FUNCTION: GET MANY CUSTOMERS
// ==========================================
/**
 * Fetches and displays data for multiple customers from customers.json
 * 
 * Process:
 * 1. Create XMLHttpRequest object
 * 2. Configure GET request to customers.json
 * 3. Send the request
 * 4. Parse JSON array of customers
 * 5. Loop through all customers and build HTML
 * 6. Display all customers in a responsive grid layout
 */
function getManyCustomers() {

    // ==========================================
    // STEP 1: CREATE XMLHttpRequest OBJECT
    // ==========================================
    /**
     * Initialize new XHR object for AJAX communication
     */
    const xhr = new XMLHttpRequest();

    // ==========================================
    // STEP 2: CONFIGURE THE REQUEST
    // ==========================================
    /**
     * Set up GET request to fetch customers.json
     * Parameters:
     * - Method: "GET" - Retrieve multiple customer records
     * - URL: "customers.json" - JSON file with array of customers
     * - Async: true - Asynchronous, non-blocking request
     */
    xhr.open("GET", "customers.json", true);

    // ==========================================
    // STEP 3: SEND THE REQUEST
    // ==========================================
    /**
     * Execute the HTTP request to the server/file
     */
    xhr.send();

    // ==========================================
    // STEP 4: HANDLE THE RESPONSE
    // ==========================================
    /**
     * onload callback processes the response when request completes
     * Handles multiple customer records and creates a grid layout
     */
    xhr.onload = function () {
        // Select the display container element
        const displayCustomer = document.querySelector("#datas");

        /**
         * Parse the JSON response into a JavaScript array
         * JSON.parse() converts the JSON string to native JavaScript objects
         */
        const allCustomers = JSON.parse(this.responseText);

        /**
         * Initialize output string with opening grid container
         * Using Tailwind CSS grid classes:
         * - grid-cols-1: Single column on mobile
         * - md:grid-cols-2: Two columns on medium+ screens
         * - gap-6: Space between grid items
         */
        let output = "<div class='grid grid-cols-1 md:grid-cols-2 gap-6'>"

        // Verify successful response (HTTP 200 OK)
        if (this.status === 200) {
            /**
             * Iterate through each customer in the array
             * Build HTML string by concatenating customer cards
             */
            allCustomers.forEach((customer) => {
                /**
                 * Append HTML for each customer using template literals
                 * Each customer gets:
                 * - Styled card with shadow and border
                 * - Hover effects for better UX
                 * - All customer properties displayed as list items
                 */
                output += `
                    <ul class="bg-white rounded-xl shadow-lg p-6 space-y-3 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
                        <li class="text-gray-700"><span class="font-semibold text-indigo-600">ID:</span> ${customer.Id}</li>
                        <li class="text-gray-700"><span class="font-semibold text-indigo-600">Name:</span> ${customer.Name}</li>
                        <li class="text-gray-700"><span class="font-semibold text-indigo-600">Age:</span> ${customer.Age}</li>
                        <li class="text-gray-700"><span class="font-semibold text-indigo-600">Phone Number:</span> ${customer.PhoneNumber}</li>
                    </ul>
                `
            })
            // Close the grid container div
            output += "</div>"

            /**
             * Insert the complete HTML string into the DOM
             * innerHTML replaces all content in the container
             */
            displayCustomer.innerHTML = output;
        }

    }

}