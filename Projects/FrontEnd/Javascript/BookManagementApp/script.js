// Get references to the form and book collection container from the HTML
const addBooksBtn = document.querySelector("#form");
const bookCollection = document.querySelector("#book-collection");

// Function to set up all event listeners for the application
function loadAllEvents() {
    // When the page finishes loading, display all books saved in local storage
    document.addEventListener("DOMContentLoaded", function () {
        StoreBookToLS.displayBookFromLS();
    })
    // Listen for form submission to add new books
    addBooksBtn.addEventListener("submit", addBooksFunc);
    // Listen for clicks on the book collection (for delete button)
    bookCollection.addEventListener("click", removeBooks);
}
// Initialize all event listeners when the script loads
loadAllEvents();

// Book Class: Represents a single book with its properties
class Book {
    // Constructor to create a new book object with name, author, and ISBN
    constructor(bookName, authorName, isbn) {
        this.bookName = bookName;      // Title of the book
        this.authorName = authorName;  // Author's name
        this.isbn = isbn;              // Unique ISBN number (International Standard Book Number)
    }
}

// UI Class: Handles all user interface operations (displaying, clearing, removing books)
class UI {
    // Method to add a book to the display (creates and appends HTML elements)
    addBook(book) {
        // Create a list item element to hold the book information
        const li = document.createElement("li");
        li.className = "books bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition duration-200 grid grid-cols-1 md:grid-cols-4 gap-3 items-center";

        // Create and add the book name element
        const bookSpan = document.createElement("span");
        bookSpan.className = "text-gray-800 font-semibold";
        bookSpan.textContent = book.bookName;
        li.appendChild(bookSpan);

        // Create and add the author name element
        const authorSpan = document.createElement("span");
        authorSpan.className = "text-gray-600";
        authorSpan.textContent = book.authorName;
        li.appendChild(authorSpan);

        // Create and add the ISBN number element
        const bookNumberSpan = document.createElement("span");
        bookNumberSpan.className = "text-indigo-600 font-medium";
        bookNumberSpan.textContent = `ISBN: ${book.isbn}`;
        li.appendChild(bookNumberSpan);

        // Create and add the delete button element
        const deleteBtnSpan = document.createElement("span");
        deleteBtnSpan.className = "deleteSpan flex justify-end md:justify-center";
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 active:bg-red-700 transition duration-200 shadow-sm hover:shadow-md";
        deleteBtn.id = "delete-books";
        deleteBtnSpan.appendChild(deleteBtn);
        li.appendChild(deleteBtnSpan);

        // Add the complete book item to the book collection on the page
        bookCollection.appendChild(li);
    }
    // Method to clear all input fields in the form after adding a book
    clearFields() {
        document.querySelector("#bookName").value = ""
        document.querySelector("#authorName").value = ""
        document.querySelector("#bookNumber").value = ""
    }
    // Method to remove a book from the display
    removeBooks(targetElement) {
        // Check if the clicked element is the delete button container
        if (targetElement.classList.contains("deleteSpan")) {
            // Ask for confirmation before deleting
            if (confirm("Are You Sure to remove the Book ?")) {
                // Remove the entire book item from the display
                targetElement.parentElement.remove();
            }
        }
    }
}

// StoreBookToLS Class: Manages all local storage operations for books
// Uses static methods so we don't need to create instances of this class
class StoreBookToLS {
    // Static method to retrieve all books from local storage
    static getBooks() {
        let bookContainer;
        // Check if there are any books saved in local storage
        if (localStorage.getItem("books") === null) {
            // If not, return an empty array
            bookContainer = [];
        }
        else {
            // If yes, parse the JSON string and return the array of books
            bookContainer = JSON.parse(localStorage.getItem("books"))
        }
        return bookContainer;
    }
    // Static method to add a new book to local storage
    static addBookToLS(book) {
        // Get the current list of books
        const bookContainer = StoreBookToLS.getBooks();
        // Add the new book to the array
        bookContainer.push(book);
        // Save the updated array back to local storage as a JSON string
        localStorage.setItem("books", JSON.stringify(bookContainer));
    }
    // Static method to remove a book from local storage by ISBN
    static removeBooksToLS(isbn) {
        // Get the current list of books
        const bookContainer = StoreBookToLS.getBooks();
        // Loop through all books to find the one with matching ISBN
        bookContainer.forEach((book, index) => {
            if (book.isbn === isbn) {
                // Remove the book from the array
                bookContainer.splice(index, 1)
            }
        });
        // Save the updated array back to local storage
        localStorage.setItem("books", JSON.stringify(bookContainer));
    }
    // Static method to display all books from local storage when page loads
    static displayBookFromLS() {
        // Get all saved books
        const bookContainer = StoreBookToLS.getBooks();
        // Create a UI instance
        const ui = new UI();
        // Loop through each book and display it on the page
        bookContainer.forEach(book => {
            ui.addBook(book);
        })
    }
    // Static method to check if an ISBN already exists in the collection
    static checkISBN(isbn) {
        // Get all saved books
        const bookContainer = StoreBookToLS.getBooks();
        // Return true if any book has the same ISBN (prevents duplicates)
        return bookContainer.some(book => book.isbn === isbn)
    }
}

// Function to handle adding a new book when the form is submitted
function addBooksFunc(e) {
    // Prevent the form from refreshing the page
    e.preventDefault();

    // Get the values from the input fields
    const bookName = document.querySelector("#bookName").value;
    const authorName = document.querySelector("#authorName").value;
    const isbn = document.querySelector("#bookNumber").value;

    // Create a new Book object with the input values
    const bookData = new Book(bookName, authorName, isbn);

    // Create a UI instance to handle display operations
    const ui = new UI(bookData);

    if (bookName.trim() === "" || authorName.trim() === "" || isbn.trim() === "") {
        alert("Enter the required Fields");
        return
    }
    if (StoreBookToLS.checkISBN(isbn)) {
        alert("ISBN already exists. Please enter a unique ISBN.")
        return
    }
    ui.addBook(bookData);
    StoreBookToLS.addBookToLS(bookData);
    ui.clearFields();

}

// Function to handle removing a book when the delete button is clicked
function removeBooks(e) {
    // Create a UI instance to handle display operations
    const ui = new UI();

    // Remove the book from the display (with confirmation)
    ui.removeBooks(e.target.parentElement);

    // Get the book element that contains all the book information
    const bookElement = e.target.parentElement.parentElement;
    // Extract the ISBN from the book element (remove the "ISBN: " prefix)
    const isbn = bookElement.querySelector(".text-indigo-600").textContent.replace("ISBN: ", "");
    // Remove the book from local storage using its ISBN
    StoreBookToLS.removeBooksToLS(isbn);
}