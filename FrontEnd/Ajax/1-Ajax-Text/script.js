// ==========================================
// AJAX TEXT LOADER - Main Implementation
// ==========================================
/**
 * This script demonstrates how to load text data from a file
 * using AJAX without reloading the page
 */

// ==========================================
// DOM ELEMENT SELECTION
// ==========================================
// Select the button that triggers the AJAX request
const getMessageBtn = document.querySelector("button");

// ==========================================
// EVENT LISTENER SETUP
// ==========================================
/**
 * Initialize all event listeners
 * This function attaches the click event to the button
 */
function loadAllEvent() {
    // When button is clicked, execute getMessage function
    getMessageBtn.addEventListener("click", getMessage);
}
// Call the initialization function
loadAllEvent();

// ==========================================
// AJAX REQUEST HANDLER
// ==========================================
/**
 * Function to fetch and display text data using AJAX
 * 
 * AJAX Request Workflow:
 * 1. Create XMLHttpRequest object
 * 2. Configure request using open()
 * 3. Send the request using send()
 * 4. Handle response in onload event
 */
function getMessage() {
    // Select the h3 element where the fetched message will be displayed
    const message = document.querySelector("h3");

    // ==========================================
    // STEP 1: CREATE XMLHttpRequest OBJECT
    // ==========================================
    /**
     * XMLHttpRequest is the core object for AJAX communication
     * It provides methods and properties to:
     * - Send HTTP requests to a server
     * - Receive responses from the server
     * - Handle request states and events
     */
    const xhr = new XMLHttpRequest();
    // Log initial XHR state (readyState = 0: UNSENT)
    console.log(xhr);

    // ==========================================
    // STEP 2: CONFIGURE THE REQUEST
    // ==========================================
    /**
     * xhr.open(method, url, async)
     * 
     * Parameters:
     * - method: "GET" - HTTP method to retrieve data
     * - url: "data.txt" - The file to fetch
     * - async: true - Makes the request asynchronous (non-blocking)
     * 
     * After open(), readyState changes to 1: OPENED
     */
    xhr.open("GET", "data.txt", true);

    // Log XHR after configuration (readyState = 1: OPENED)
    console.log(xhr)

    // ==========================================
    // STEP 3: SEND THE REQUEST
    // ==========================================
    /**
     * Send the HTTP request to the server
     * For GET requests: send() takes no parameters
     * For POST requests: send(data) would include the data to send
     * 
     * After send(), the request progresses through states:
     * - readyState 2: HEADERS_RECEIVED
     * - readyState 3: LOADING
     * - readyState 4: DONE (triggers onload)
     */
    xhr.send();

    // ==========================================
    // STEP 4: HANDLE THE RESPONSE
    // ==========================================
    /**
     * onload event fires when the request completes successfully
     * This is called when readyState reaches 4 (DONE)
     * 
     * Important properties in 'this' context:
     * - this.status: HTTP status code
     *   * 200: OK (success)
     *   * 404: Not Found
     *   * 500: Internal Server Error
     * - this.responseText: The actual response data
     * - this.readyState: Should be 4 (DONE)
     */
    xhr.onload = function () {
        // Log the complete response object for debugging
        console.log("This -> ", this)

        // Check if request was successful (status 200)
        // Success: Display the response text
        // Failure: Display error message with status code
        const response = this.status === 200 ? message.textContent = this.responseText : message.textContent = `${this.status} - Data not found`;
        return response
    }
}