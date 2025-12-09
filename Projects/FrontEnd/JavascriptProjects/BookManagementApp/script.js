const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const bookNumber = document.querySelector("#bookNumber");
const addBooksBtn = document.querySelector("#form");
const bookCollection = document.querySelector("#book-collection");
const deleteBooksBtn = document.querySelector("#delete-books")

function loadAllEvents() {
    //Add Books Event :-
    addBooksBtn.addEventListener("submit", addBooks);
}
loadAllEvents();

function addBooks(e) {
    e.preventDefault();
    //Getting the Input Values :-
    if (bookName.value === "" || authorName.value === "" || bookNumber.value === "") {
        alert("Enter all the fields")
    }
    else {
        const li = document.createElement("li");
        li.className = "books bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition duration-200 grid grid-cols-1 md:grid-cols-4 gap-3 items-center";

        //Creating the Book Span :-
        const bookSpan = document.createElement("span");
        bookSpan.className = "text-gray-800 font-semibold";
        bookSpan.textContent = bookName.value;
        li.appendChild(bookSpan);

        //Creating the Author Span :-
        const authorSpan = document.createElement("span");
        authorSpan.className = "text-gray-600";
        authorSpan.textContent = authorName.value;
        li.appendChild(authorSpan);

        //Creating the Book Number Span :-
        const bookNumberSpan = document.createElement("span");
        bookNumberSpan.className = "text-indigo-600 font-medium";
        bookNumberSpan.textContent = `ID: ${bookNumber.value}`;
        li.appendChild(bookNumberSpan);

        //Creating the Delete Button :-
        const deleteBtnSpan = document.createElement("span");
        deleteBtnSpan.className = "flex justify-end md:justify-center";
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 active:bg-red-700 transition duration-200 shadow-sm hover:shadow-md";
        deleteBtn.id = "delete-books";
        deleteBtnSpan.appendChild(deleteBtn);
        li.appendChild(deleteBtnSpan);

        bookCollection.appendChild(li);

        //Clear all the Input Fields :-
        bookName.value = "";
        bookNumber.value = "";
        authorName.value = "";
    }
}


