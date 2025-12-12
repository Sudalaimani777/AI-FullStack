const addBooksBtn = document.querySelector("#form");
const bookCollection = document.querySelector("#book-collection");

//Load All Event :-
function loadAllEvents() {
    //Add Books Event :-
    addBooksBtn.addEventListener("submit", addBooksFunc);
    //Remove Books Event :-
    bookCollection.addEventListener("click", removeBooks);
}
loadAllEvents();

//Creating the Constructor For the Books :-
class Books {
    constructor(bookName, authorName, isbn) {
        this.bookName = bookName;
        this.authorName = authorName;
        this.isbn = isbn;
    }
}

//Creating the Constructor for the UI creation methods :-
class UI {
    constructor() {

    }
    //Add Books Method :-
    addBook(book) {
        const li = document.createElement("li");
        li.className = "books bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition duration-200 grid grid-cols-1 md:grid-cols-4 gap-3 items-center";

        //Creating the Book Span :-
        const bookSpan = document.createElement("span");
        bookSpan.className = "text-gray-800 font-semibold";
        bookSpan.textContent = book.bookName;
        li.appendChild(bookSpan);

        //Creating the Author Span :-
        const authorSpan = document.createElement("span");
        authorSpan.className = "text-gray-600";
        authorSpan.textContent = book.authorName;
        li.appendChild(authorSpan);

        //Creating the Book Number Span :-
        const bookNumberSpan = document.createElement("span");
        bookNumberSpan.className = "text-indigo-600 font-medium";
        bookNumberSpan.textContent = `ISBN: ${book.isbn}`;
        li.appendChild(bookNumberSpan);

        //Creating the Delete Button :-
        const deleteBtnSpan = document.createElement("span");
        deleteBtnSpan.className = "deleteSpan flex justify-end md:justify-center";
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 active:bg-red-700 transition duration-200 shadow-sm hover:shadow-md";
        deleteBtn.id = "delete-books";
        deleteBtnSpan.appendChild(deleteBtn);
        li.appendChild(deleteBtnSpan);

        bookCollection.appendChild(li);

    }
    //Clear all the Input Fields :-
    clearFields() {
        document.querySelector("#bookName").value = "";
        document.querySelector("#bookNumber").value = "";
        document.querySelector("#authorName").value = "";
    }
    //Remove Books Methods :-
    deleteBook(targetElement) {
        if (confirm("Are You sure to remove the books ?")) {
            targetElement.parentElement.remove();
        }
    }
}

//Add Books Function :-
function addBooksFunc(e) {
    //Prevent the Default while sbumitting the data 
    e.preventDefault();

    //Getting the Author Name, Book Name and the ISBN id for the books :-
    const book = document.querySelector("#bookName").value;
    const author = document.querySelector("#authorName").value;
    const isbn = document.querySelector("#bookNumber").value;

    //Creating the Books Object :-
    const bookData = new Books(book, author, isbn);
    //Creating the Add Books Objects :-
    const ui = new UI();

    if (book.trim() === "" || author.trim() === "" || isbn.trim() === "") {
        alert("Enter the required fields");
        return;
    }
    else {
        //Add Books Method Call :-
        ui.addBook(bookData);
        //Clear Fields Method Call :-
        ui.clearFields();
    }
}

//Remove Books Function :-
function removeBooks(e) {
    //Method for remove books:-
    const ui = new UI();
    if (e.target.parentElement.classList.contains("deleteSpan")) {
        ui.deleteBook(e.target.parentElement);
    }
}