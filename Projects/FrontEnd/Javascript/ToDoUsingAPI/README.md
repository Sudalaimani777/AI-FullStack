# ToDo Using API 🌐

A modern task management application integrating RESTful API operations with MockAPI backend. Features ES6 modules, static methods, and full CRUD functionality.

![Complexity](https://img.shields.io/badge/Complexity-Advanced-red)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%20Modules-yellow)
![API](https://img.shields.io/badge/API-RESTful-blue)
![Status](https://img.shields.io/badge/Status-Complete-green)

## 📋 Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [API Integration](#api-integration)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Key Concepts](#key-concepts)
- [Error Prevention Guide](#error-prevention-guide)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

### Core Functionality
- ✅ **Fetch Tasks** - GET request on page load
- ✅ **Create Tasks** - POST new tasks to API
- ✅ **Delete Tasks** - DELETE with confirmation
- ✅ **Dynamic UI** - Real-time updates without refresh
- ✅ **Data Attributes** - Track task IDs for API calls
- ✅ **Error Handling** - Proper error catching

### Technical Features
- 🔷 **ES6 Modules** - Modern modular architecture
- 🔷 **Static Methods** - Utility class pattern
- 🔷 **Fetch API** - Promise-based HTTP requests
- 🔷 **MockAPI Backend** - RESTful API simulation
- 🔷 **Async Operations** - .then() chaining
- 🔷 **Tailwind CSS** - Modern responsive design

---

## 🎥 Demo

### Fetch Tasks on Load
```
Page loads → GET request → Display all tasks
```

### Add New Task
```
1. User types: "Buy milk"
2. Click submit
3. POST request sends data
4. API returns task with ID
5. Task appears in UI
```

### Delete Task
```
1. Click "Delete" button
2. Confirmation dialog
3. DELETE request with task ID
4. Task removed from UI
```

---

## 🛠️ Technologies

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure |
| **Tailwind CSS** | Styling |
| **JavaScript ES6+** | Logic and modules |
| **Fetch API** | HTTP requests |
| **MockAPI** | Backend simulation |
| **Promises** | Async operations |

---

## 🌐 API Integration

### MockAPI Configuration

**Base URL:**
```
https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user
```

**Endpoints:**

| Method | Endpoint | Purpose | Returns |
|--------|----------|---------|---------|
| GET | `/user` | Fetch all tasks | Array of tasks |
| POST | `/user` | Create task | New task with ID |
| DELETE | `/user/:id` | Delete task | Deleted task |

### API Response Format

**GET Response:**
```json
[
  {
    "id": "1",
    "userTask": "Buy groceries"
  },
  {
    "id": "2",
    "userTask": "Clean house"
  }
]
```

**POST Request:**
```json
{
  "userTask": "New task"
}
```

**POST Response:**
```json
{
  "id": "3",
  "userTask": "New task"
}
```

---

## 📦 Installation

### Prerequisites
- Modern web browser
- Internet connection (for API)
- ES6 module support

### Steps

1. **Download files**
   ```
   ToDoUsingAPI/
   ├── index.html
   ├── script.js
   ├── library.js
   └── errorToPrevent.txt
   ```

2. **Important: HTML Setup**
   ```html
   <!-- MUST include type="module" -->
   <script type="module" src="./script.js"></script>
   ```

3. **Open in browser**
   - Use Live Server (VS Code), or
   - Host on local server
   - Direct file:// may have CORS issues

---

## 📖 Usage

### Adding Tasks

1. **Type task** in input field
2. **Click submit** or press Enter
3. **Validation:** Empty tasks rejected
4. **POST request** sends to API
5. **Task appears** with Delete button

### Deleting Tasks

1. **Click "Delete"** button
2. **Confirm deletion** in dialog
3. **DELETE request** sent to API
4. **Task removed** from UI

### How It Works

```
┌─────────────────────┐
│   Page Loads        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   GET Request       │
│   Fetch all tasks   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Display Tasks     │
└─────────────────────┘

┌─────────────────────┐
│   User Adds Task    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   POST Request      │
│   Create new task   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Add to UI         │
└─────────────────────┘

┌─────────────────────┐
│   User Deletes      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   DELETE Request    │
│   Remove task       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Remove from UI    │
└─────────────────────┘
```

---

## 💻 Code Structure

### Main Application (script.js)

```javascript
import UserTaskLibrary from "./library.js";

const userInputField = document.querySelector("#userTaskField");
const taskForm = document.querySelector("#taskForm");
const userTaskContainer = document.querySelector("#userTasks");

function loadAllEvent() {
  document.addEventListener("DOMContentLoaded", fetchTaskFromAPI);
  taskForm.addEventListener("submit", addTask);
  userTaskContainer.addEventListener("click", removeTaskFromAPI);
}
loadAllEvent();
```

#### 1. Fetch Tasks (GET)
```javascript
function fetchTaskFromAPI() {
  UserTaskLibrary.get("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user")
    .then(userTask => {
      userTask.forEach(userTaskItem => {
        showTaskUI(userTaskItem);
      });
    });
}
```

#### 2. Add Task (POST)
```javascript
function addTask(e) {
  e.preventDefault();
  
  const userEnteredTask = {
    userTask: userInputField.value
  };
  
  if (userInputField.value.trim() === "") {
    alert("Enter the valid task");
  } else {
    const userTaskFromAPI = UserTaskLibrary.post(
      "https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user",
      userEnteredTask
    );
    
    userTaskFromAPI
      .then(userTaskData => showTaskUI(userTaskData))
      .catch(err => console.log(err));
    
    userInputField.value = "";
  }
}
```

#### 3. Display Task in UI
```javascript
function showTaskUI(task) {
  const p = document.createElement("p");
  p.className = "flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-100 transition duration-200";
  p.textContent = task.userTask;
  p.setAttribute("data-id", task.id);  // Store API ID
  
  const span = document.createElement("span");
  span.className = "deleteBtnWrapper ml-3";
  
  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.className = "px-4 py-1 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition duration-200";
  deleteTaskBtn.innerText = "Delete";
  
  span.appendChild(deleteTaskBtn);
  p.appendChild(span);
  userTasks.appendChild(p);
}
```

#### 4. Delete Task (DELETE)
```javascript
function removeTaskFromAPI(e) {
  if (e.target.parentElement.classList.contains("deleteBtnWrapper")) {
    if (confirm("Are you sure to delete this task?")) {
      const taskElement = e.target.parentElement.parentElement;
      const taskID = taskElement.getAttribute("data-id");

      // Remove from API
      UserTaskLibrary.delete(
        `https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user/${taskID}`
      ).then(() => {
        taskElement.remove();
      });
    }
  }
}
```

---

### API Library (library.js)

```javascript
class UserTaskLibrary {
  // GET Request
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // POST Request
  static post(url, userTask) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userTask)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // DELETE Request
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
}

export default UserTaskLibrary;
```

---

## 🎓 Key Concepts

### 1. ES6 Modules

**Export (library.js):**
```javascript
export default UserTaskLibrary;
```

**Import (script.js):**
```javascript
import UserTaskLibrary from "./library.js";
```

**HTML Requirement:**
```html
<script type="module" src="./script.js"></script>
```

**Benefits:**
- Code organization
- Reusability
- Namespace management
- Dependency clarity

### 2. Static Methods

**Definition:**
```javascript
class UserTaskLibrary {
  static get(url) { ... }
  static post(url, data) { ... }
  static delete(url) { ... }
}
```

**Usage:**
```javascript
// ✅ Correct - Call on class
UserTaskLibrary.get(url);

// ❌ Wrong - Don't instantiate
const lib = new UserTaskLibrary();
lib.get(url);  // Error!
```

**Why Static?**
- No instance needed
- Utility functions
- Cleaner API
- Better for HTTP methods

### 3. Fetch API

**Basic Structure:**
```javascript
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**GET Request:**
```javascript
fetch(url)  // Default method is GET
```

**POST Request:**
```javascript
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
```

**DELETE Request:**
```javascript
fetch(url, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  }
})
```

### 4. Promises

**Creating Promises:**
```javascript
return new Promise((resolve, reject) => {
  if (success) {
    resolve(data);
  } else {
    reject(error);
  }
});
```

**Consuming Promises:**
```javascript
promise
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**Chaining:**
```javascript
fetch(url)
  .then(response => response.json())
  .then(data => processData(data))
  .then(result => displayResult(result))
  .catch(error => handleError(error));
```

### 5. Data Attributes

**Setting:**
```javascript
element.setAttribute("data-id", "123");
```

**Getting:**
```javascript
const id = element.getAttribute("data-id");
```

**Why Use?**
- Store custom data on elements
- Associate DOM with API data
- Enable proper DELETE operations

---

## 🚨 Error Prevention Guide

### Common Errors (from errorToPrevent.txt)

#### Error 1: Module Import
```javascript
// ❌ Error: Cannot use import statement outside a module
import UserTaskLibrary from "./library.js";
```

**Solution:**
```html
<!-- Add type="module" -->
<script type="module" src="./script.js"></script>
```

#### Error 2: Static Method Call
```javascript
// ❌ Error: Library.post is not a function
const lib = new Library();
lib.post(url, data);
```

**Solution:**
```javascript
// ✅ Call static method on class
Library.post(url, data);
```

#### Error 3: Class Invocation
```javascript
// ❌ Error: Class constructor cannot be invoked without 'new'
Library().post(url, data);
```

**Solution:**
```javascript
// ✅ Use class name directly
Library.post(url, data);
```

### Key Rules

**Static Methods:**
- Called on class name
- Syntax: `ClassName.methodName()`
- Cannot be called on instances

**Instance Methods:**
- Called on instances
- Syntax: `new ClassName().methodName()`
- Need instantiation with `new`

**When to Use:**
- **Static:** Utility functions, no state needed
- **Instance:** Object-specific operations, maintain state

---

## 🐛 Troubleshooting

### Tasks Not Loading

**Problem:** Page loads but no tasks appear  
**Solutions:**
- Check internet connection
- Verify API URL is correct
- Check browser console for errors
- Ensure CORS is allowed

### Module Import Error

**Problem:** "Cannot use import statement"  
**Solution:** Add `type="module"` to script tag

### API Request Fails

**Problem:** Fetch returns error  
**Solutions:**
- Check network tab in DevTools
- Verify API endpoint exists
- Test API with Postman
- Check for CORS issues

### Delete Not Working

**Problem:** Click delete but nothing happens  
**Solutions:**
- Check if data-id is set correctly
- Verify event delegation
- Inspect API response
- Check console for errors

---

## 📚 Additional Documentation

### errorToPrevent.txt

Comprehensive guide covering:
- ✅ Static vs instance methods
- ✅ Module import requirements
- ✅ Common error messages
- ✅ Correct usage patterns
- ✅ When to use each approach

---

## 🚀 Future Enhancements

### Feature Ideas

- [ ] **Edit Tasks** - UPDATE operation (PUT/PATCH)
- [ ] **Task Status** - Mark complete/incomplete
- [ ] **Categories** - Group tasks
- [ ] **Search/Filter** - Real-time filtering
- [ ] **Pagination** - Handle many tasks
- [ ] **Loading States** - Show spinner during API calls
- [ ] **Error Messages** - User-friendly error display
- [ ] **Offline Support** - Service workers
- [ ] **Optimistic UI** - Update UI before API response
- [ ] **Undo Delete** - Temporarily hold deleted tasks

### Technical Improvements

- [ ] **Async/Await** - Replace .then() chains
- [ ] **Error Boundaries** - Better error handling
- [ ] **Request Debouncing** - Prevent spam
- [ ] **Caching** - Store API responses
- [ ] **TypeScript** - Type safety
- [ ] **Unit Tests** - Test API library
- [ ] **State Management** - Redux/Context
- [ ] **WebSockets** - Real-time updates

---

## 📖 Learning Outcomes

After studying this project, you'll master:

✅ **ES6 module system** (import/export)  
✅ **Static class methods**  
✅ **Fetch API** (GET, POST, DELETE)  
✅ **Promises** and .then() chaining  
✅ **RESTful API** principles  
✅ **HTTP methods** and headers  
✅ **JSON** data handling  
✅ **Data attributes** for DOM-data linking  
✅ **Event delegation**  
✅ **Async operations**  

---

## 📊 Project Stats

- **Lines of Code:** 98 (script.js + library.js)
- **script.js:** 63 lines
- **library.js:** 35 lines
- **Functions:** 6 (4 main + 2 utility)
- **API Methods:** 3 (GET, POST, DELETE)
- **Event Listeners:** 3

---

## 🔗 API Documentation

### MockAPI Features

**What is MockAPI?**
- Fake REST API for testing
- No backend setup needed
- Full CRUD support
- Auto-generated IDs

**Free Tier:**
- 100 resources per project
- Unlimited requests
- Custom schemas
- No credit card required

**Alternative APIs:**
- JSONPlaceholder
- ReqRes
- JSON Server

---

## 💡 Best Practices

### ✅ Do's
- Use ES6 modules for organization
- Implement error handling
- Validate user input
- Use data attributes for IDs
- Provide user feedback
- Use static methods for utilities

### ❌ Don'ts
- Don't forget type="module"
- Don't mix static and instance calls
- Don't ignore promise errors
- Don't expose API keys (use environment variables)
- Don't forget to clean up event listeners

---

## 🤝 Contributing

Enhancement suggestions:
1. Add UPDATE operation (edit tasks)
2. Implement loading spinners
3. Add error toast notifications
4. Create task categories
5. Add search functionality

---

## 📝 License

Free to use for learning and personal projects.

---

**Master API Integration with ES6! 🎓**

**Built with ❤️ using ES6 Modules and Fetch API**

**Last Updated:** December 23, 2025
