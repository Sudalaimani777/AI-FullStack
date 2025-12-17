// ==========================================
// AJAX - Asynchronous Javascript And XML
// ==========================================
/**
 * AJAX is a developer's dream because it enables:
 * 1) Reading data from the web server - after the page has loaded
 * 2) Updating the web page without reloading the entire page
 * 3) Sending data to the web server - in the background
 * 
 * Server: A service provider that handles requests and sends responses
 */

// ==========================================
// DOM ELEMENT SELECTION
// ==========================================
// Select the button element that will trigger the AJAX request
const button = document.querySelector("button");

// ==========================================
// EVENT LISTENER INITIALIZATION
// ==========================================
/**
 * Function to initialize all event listeners
 * This function is called once when the page loads
 */
function loadAllEvent() {
    // Attach click event listener to the button
    // When clicked, it will execute the getText function
    button.addEventListener("click", getText);
}
// Initialize event listeners when script loads
loadAllEvent();

// ==========================================
// AJAX REQUEST FUNCTION
// ==========================================
/**
 * Function to fetch text data from a file using AJAX
 * This demonstrates the XMLHttpRequest (XHR) workflow:
 * 1. Create XHR object
 * 2. Configure the request with open()
 * 3. Set up onload handler
 * 4. Send the request
 */
function getText() {
    // Select the h3 element where we'll display the fetched data
    const text = document.querySelector("h3");

    // ==========================================
    // STEP 1: CREATE XMLHttpRequest OBJECT
    // ==========================================
    // Create a new instance of XMLHttpRequest
    // This object handles the entire AJAX communication
    const xhr = new XMLHttpRequest();

    // Log the XHR object to see its initial state (readyState = 0: UNSENT)
    console.log(xhr);

    // ==========================================
    // STEP 2: CONFIGURE THE REQUEST
    // ==========================================
    /**
     * xhr.open(method, url, async)
     * - method: HTTP method (GET, POST, PUT, DELETE, etc.)
     * - url: The file or endpoint to request
     * - async: true for asynchronous, false for synchronous (always use true)
     * 
     * GET method is used to retrieve data from the server
     * true means the request is asynchronous (non-blocking)
     */
    xhr.open("GET", "data.txt", true);

    // ==========================================
    // STEP 3: DEFINE ONLOAD CALLBACK
    // ==========================================
    /**
     * The onload event fires when the request completes successfully
     * This handler processes the server response
     * 
     * Key properties available in 'this' context:
     * - this.status: HTTP status code (200 = success, 404 = not found, etc.)
     * - this.responseText: The response data as text
     * - this.readyState: Current state of the request (4 = DONE)
     */
    xhr.onload = function () {
        // Log the complete XHR object to inspect the response
        console.log(this);

        // Check if request was successful (status 200)
        // If successful: display the response text
        // If failed: display the error status code
        const response = this.status === 200 ? text.textContent = this.responseText : text.textContent = `${this.status} - Not Found`
        return response;
    }

    // ==========================================
    // STEP 4: SEND THE REQUEST
    // ==========================================
    /**
     * Send the request to the server
     * Without this line, the request will never be initiated
     * For GET requests, send() doesn't require parameters
     * For POST requests, you would pass data here: xhr.send(data)
     */
    xhr.send();
}