# Book Management App 📚

A fully-featured library management system built with vanilla JavaScript, ES6 classes, and local storage. This application demonstrates Object-Oriented Programming principles, CRUD operations, and data persistence.

![Complexity](https://img.shields.io/badge/Complexity-Advanced-red)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Status](https://img.shields.io/badge/Status-Complete-green)

## 📋 Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Key Concepts](#key-concepts)
- [API Reference](#api-reference)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

### Core Functionality
- ✅ **Add Books** - Create new book entries with name, author, and ISBN
- ✅ **Display Books** - View all books in a responsive grid layout
- ✅ **Delete Books** - Remove individual books with confirmation dialog
- ✅ **Persistent Storage** - LocalStorage integration for data persistence across sessions
- ✅ **Duplicate Prevention** - ISBN validation to prevent duplicate entries
- ✅ **Form Validation** - All fields required before submission
- ✅ **Auto-load** - Books automatically loaded when page opens

### User Experience
- 🎨 Modern, responsive UI with Tailwind CSS
- 🎨 Hover effects and smooth transitions
- 🎨 Color-coded information display
- 🎨 Confirmation dialogs for destructive actions
- 🎨 Auto-clear form after successful submission
- 🎨 Responsive grid (1-4 columns based on screen size)

---

## 🎥 Demo

### Add a Book
1. Enter book name, author name, and ISBN
2. Click "Add Book" button
3. Book appears in the collection instantly
4. Form clears automatically

### Delete a Book
1. Click "Delete" button on any book
2. Confirm deletion in dialog
3. Book removed from display and storage

### Data Persistence
1. Add books to the collection
2. Refresh the page
3. All books remain in the collection

---

## 🛠️ Technologies

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **Tailwind CSS** | Modern, utility-first styling |
| **JavaScript ES6+** | Logic, classes, and functionality |
| **LocalStorage API** | Client-side data persistence |

---

## 🏗️ Architecture

### Object-Oriented Design

The application follows OOP principles with three main classes:

```
┌─────────────────────────────────────────┐
│           Application Flow              │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────┐  ┌──────┐  ┌────────────┐ │
│  │  Book   │  │  UI  │  │ StoreBook  │ │
│  │  Class  │  │Class │  │   ToLS     │ │
│  └────┬────┘  └───┬──┘  └─────┬──────┘ │
│       │           │            │        │
│       └───────────┴────────────┘        │
│              User Actions               │
└─────────────────────────────────────────┘
```

### Class Responsibilities

#### 1. **Book Class** (Data Model)
```javascript
class Book {
  constructor(bookName, authorName, isbn)
}
```
- Represents a single book entity
- Stores book properties
- Data container for book information

#### 2. **UI Class** (View Layer)
```javascript
class UI {
  addBook(book)        // Display book in UI
  clearFields()        // Clear input form
  removeBooks(target)  // Remove book from display
}
```
- Handles all DOM manipulations
- Creates and removes HTML elements
- Manages user interface updates

#### 3. **StoreBookToLS Class** (Data Layer)
```javascript
class StoreBookToLS {
  static getBooks()            // Retrieve all books
  static addBookToLS(book)     // Add book to storage
  static removeBooksToLS(isbn) // Remove by ISBN
  static displayBookFromLS()   // Load on page start
  static checkISBN(isbn)       // Check for duplicates
}
```
- Manages LocalStorage operations
- Uses static methods (no instantiation needed)
- CRUD operations for persistent data

---

## 📦 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Text editor (optional, for viewing code)

### Steps

1. **Download the files**
   ```
   BookManagementApp/
   ├── index.html
   └── script.js
   ```

2. **Open in browser**
   - Double-click `index.html`, or
   - Right-click → Open with → Browser, or
   - Use Live Server in VS Code

3. **Start managing books!**
   - No build process required
   - No dependencies to install
   - Works offline after first load

---

## 📖 Usage

### Adding a Book

1. **Fill in the form:**
   - Book Name: Title of the book
   - Author Name: Author's full name
   - Book ID: Unique ISBN number

2. **Click "Add Book"**
   - Book appears in collection
   - Form clears automatically
   - Data saved to LocalStorage

### Validation Rules

- ✅ All fields are required (no empty submissions)
- ✅ ISBN must be unique (no duplicates)
- ✅ Whitespace is trimmed from inputs

### Deleting a Book

1. **Locate the book** in the collection
2. **Click "Delete" button**
3. **Confirm deletion** in dialog
4. Book removed from UI and storage

---

## 💻 Code Structure

### Event Management
```javascript
function loadAllEvents() {
  // Load books when page loads
  document.addEventListener("DOMContentLoaded", 
    StoreBookToLS.displayBookFromLS
  );
  
  // Add book on form submit
  addBooksBtn.addEventListener("submit", addBooksFunc);
  
  // Delete book on button click (Event Delegation)
  bookCollection.addEventListener("click", removeBooks);
}
```

### Adding a Book (Full Flow)
```javascript
function addBooksFunc(e) {
  e.preventDefault();
  
  // 1. Get form values
  const bookName = document.querySelector("#bookName").value;
  const authorName = document.querySelector("#authorName").value;
  const isbn = document.querySelector("#bookNumber").value;
  
  // 2. Validate inputs
  if (bookName.trim() === "" || authorName.trim() === "" || isbn.trim() === "") {
    alert("Enter the required Fields");
    return;
  }
  
  // 3. Check for duplicate ISBN
  if (StoreBookToLS.checkISBN(isbn)) {
    alert("ISBN already exists. Please enter a unique ISBN.");
    return;
  }
  
  // 4. Create Book object
  const bookData = new Book(bookName, authorName, isbn);
  
  // 5. Create UI instance
  const ui = new UI(bookData);
  
  // 6. Add to display
  ui.addBook(bookData);
  
  // 7. Save to LocalStorage
  StoreBookToLS.addBookToLS(bookData);
  
  // 8. Clear form
  ui.clearFields();
}
```

### LocalStorage Operations

#### Retrieve Books
```javascript
static getBooks() {
  let bookContainer;
  if (localStorage.getItem("books") === null) {
    bookContainer = [];
  } else {
    bookContainer = JSON.parse(localStorage.getItem("books"));
  }
  return bookContainer;
}
```

#### Add Book
```javascript
static addBookToLS(book) {
  const bookContainer = StoreBookToLS.getBooks();
  bookContainer.push(book);
  localStorage.setItem("books", JSON.stringify(bookContainer));
}
```

#### Remove Book
```javascript
static removeBooksToLS(isbn) {
  const bookContainer = StoreBookToLS.getBooks();
  bookContainer.forEach((book, index) => {
    if (book.isbn === isbn) {
      bookContainer.splice(index, 1);
    }
  });
  localStorage.setItem("books", JSON.stringify(bookContainer));
}
```

#### Check Duplicate ISBN
```javascript
static checkISBN(isbn) {
  const bookContainer = StoreBookToLS.getBooks();
  return bookContainer.some(book => book.isbn === isbn);
}
```

---

## 🎓 Key Concepts

### 1. ES6 Classes
- **Constructor functions** for object initialization
- **Instance methods** for UI operations
- **Static methods** for utility functions
- **Encapsulation** of related functionality

### 2. Separation of Concerns
- **Book** - Data model
- **UI** - View/Display logic
- **StoreBookToLS** - Data persistence
- Each class has single responsibility

### 3. Event Delegation
```javascript
// Instead of adding listener to each delete button:
bookCollection.addEventListener("click", removeBooks);

// Check if delete button was clicked:
if (targetElement.classList.contains("deleteSpan")) {
  // Handle deletion
}
```

**Benefits:**
- Works with dynamically created elements
- Better performance (single listener)
- Less memory usage

### 4. LocalStorage Persistence
- Data survives page refreshes
- JSON serialization for complex objects
- Synchronous API (blocking)
- Limited to ~5-10MB storage

### 5. Form Validation
- Required field checking
- Whitespace trimming
- Duplicate prevention
- User feedback with alerts

---

## 📚 API Reference

### Book Class

```javascript
constructor(bookName, authorName, isbn)
```
**Parameters:**
- `bookName` (string) - Title of the book
- `authorName` (string) - Author's name
- `isbn` (string) - Unique ISBN identifier

---

### UI Class

#### `addBook(book)`
Display a book in the UI
- **Parameter:** `book` (Book object)
- **Returns:** void
- **Side effects:** Creates DOM elements, appends to list

#### `clearFields()`
Clear all input fields in the form
- **Parameters:** None
- **Returns:** void
- **Side effects:** Resets form values to empty strings

#### `removeBooks(targetElement)`
Remove a book from display
- **Parameter:** `targetElement` (HTMLElement)
- **Returns:** void
- **Side effects:** Removes element from DOM after confirmation

---

### StoreBookToLS Class (Static Methods)

#### `getBooks()`
Retrieve all books from LocalStorage
- **Parameters:** None
- **Returns:** Array of book objects
- **Default:** Empty array if no books found

#### `addBookToLS(book)`
Add a book to LocalStorage
- **Parameter:** `book` (Book object)
- **Returns:** void
- **Side effects:** Updates LocalStorage

#### `removeBooksToLS(isbn)`
Remove a book by ISBN
- **Parameter:** `isbn` (string)
- **Returns:** void
- **Side effects:** Updates LocalStorage

#### `displayBookFromLS()`
Load and display all books on page load
- **Parameters:** None
- **Returns:** void
- **Side effects:** Creates UI for all stored books

#### `checkISBN(isbn)`
Check if ISBN already exists
- **Parameter:** `isbn` (string)
- **Returns:** boolean (true if exists)
- **Use:** Prevent duplicate entries

---

## 🎨 UI Components

### Form Layout
```html
<form id="form">
  <input type="text" id="bookName" placeholder="Book Name">
  <input type="text" id="authorName" placeholder="Author Name">
  <input type="number" id="bookNumber" placeholder="Book ID">
  <input type="submit" value="Add Book">
</form>
```

### Book Card Structure
```html
<li class="books">
  <span>Book Name</span>
  <span>Author Name</span>
  <span>ISBN: 12345</span>
  <span class="deleteSpan">
    <button id="delete-books">Delete</button>
  </span>
</li>
```

### Tailwind CSS Classes Used
- **Layout:** `grid`, `grid-cols-1`, `md:grid-cols-4`, `gap-3`
- **Spacing:** `p-4`, `px-4`, `py-2`
- **Colors:** `bg-gray-50`, `text-indigo-600`, `bg-red-500`
- **Effects:** `hover:bg-gray-100`, `transition`, `shadow-md`
- **Typography:** `font-semibold`, `font-medium`

---

## 🔍 Browser Console

### View LocalStorage Data

```javascript
// In browser console (F12)
localStorage.getItem("books")

// Parsed data
JSON.parse(localStorage.getItem("books"))

// Clear all books
localStorage.removeItem("books")
```

---

## 🚀 Future Enhancements

### Potential Features
- [ ] **Edit Books** - Update existing book information
- [ ] **Search** - Filter books by name, author, or ISBN
- [ ] **Sort** - Order by name, author, or date added
- [ ] **Categories** - Genre classification
- [ ] **Book Covers** - Image upload/URL
- [ ] **Read Status** - Mark books as read/unread
- [ ] **Rating System** - Star ratings for books
- [ ] **Export/Import** - JSON or CSV format
- [ ] **Dark Mode** - Toggle theme
- [ ] **Pagination** - For large collections

### Technical Improvements
- [ ] **IndexedDB** - Better storage for large datasets
- [ ] **Backend Integration** - Save to database
- [ ] **User Authentication** - Multiple user accounts
- [ ] **Cloud Sync** - Cross-device synchronization
- [ ] **Drag & Drop** - Reorder books
- [ ] **Undo/Redo** - Action history
- [ ] **Keyboard Shortcuts** - Power user features
- [ ] **Data Validation** - ISBN format checking
- [ ] **Toast Notifications** - Better user feedback
- [ ] **Loading States** - Visual feedback for operations

---

## 🐛 Troubleshooting

### Books Don't Persist
**Problem:** Books disappear after refresh  
**Solution:** Check if LocalStorage is enabled in browser settings

### Duplicate ISBN Not Detected
**Problem:** Same ISBN can be added twice  
**Solution:** Ensure `checkISBN()` is called before adding

### Delete Button Not Working
**Problem:** Click on delete button does nothing  
**Solution:** Check if event delegation is set up on parent container

---

## 📖 Learning Outcomes

After studying this project, you'll understand:

✅ **Object-Oriented Programming** in JavaScript  
✅ **ES6 Class** syntax and usage  
✅ **Static methods** vs instance methods  
✅ **LocalStorage API** for data persistence  
✅ **Event delegation** pattern  
✅ **DOM manipulation** techniques  
✅ **Form validation** strategies  
✅ **CRUD operations** (Create, Read, Update, Delete)  
✅ **JSON** serialization/deserialization  
✅ **Responsive design** with Tailwind CSS  

---

## 📄 File Information

- **Lines of Code:** 191
- **Classes:** 3 (Book, UI, StoreBookToLS)
- **Functions:** 2 (addBooksFunc, removeBooks)
- **Event Listeners:** 3
- **Storage:** LocalStorage

---

## 🤝 Contributing

Suggestions for improvements:
1. Fork the project
2. Add your enhancements
3. Test thoroughly
4. Share your improvements

---

## 📝 License

This project is for educational purposes. Free to use and modify.

---

**Built with ❤️ using Vanilla JavaScript and ES6 Classes**

**Last Updated:** December 23, 2025
