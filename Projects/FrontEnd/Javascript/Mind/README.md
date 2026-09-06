# 🧠 MindVault

A simple and elegant thought-capturing application built with vanilla JavaScript. MindVault helps you organize your ideas, learnings, and bugs in one place with full CRUD functionality.

## ✨ Features

- **Create Thoughts** - Capture ideas, learnings, and bugs quickly
- **Read Thoughts** - View all your thoughts in a clean, organized list
- **Update Thoughts** - Edit existing thoughts directly from the UI
- **Delete Thoughts** - Remove thoughts you no longer need
- **Persistent Storage** - All data is stored via MockAPI
- **Loading States** - Visual feedback during API operations
- **Responsive Design** - Works seamlessly on all devices
- **Type Categorization** - Organize thoughts by type (💡 Idea, 📘 Learning, 🐞 Bug)

## 🚀 Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3 / Tailwind CSS** - Modern styling via CDN
- **JavaScript (ES6+)** - Modular architecture with ES6 modules
- **Fetch API** - Asynchronous HTTP requests
- **MockAPI** - RESTful API backend for data persistence

## 📁 Project Structure

```
Mind/
├── index.html          # Main HTML file
├── script.js           # Main application logic and event handlers
├── api.js              # API service (CRUD operations)
├── thought.js          # Thought constructor and prototype methods
├── ui.js               # UI rendering and DOM manipulation
├── storage.js          # Local storage utilities (if needed)
├── vault.js            # Additional vault functionality
├── style.css           # Additional custom styles
└── README.md           # Project documentation
```

## 🛠️ Setup and Installation

1. **Clone or Download** the project files

2. **No build process required!** Simply open the project in your browser:
   ```
   Open index.html in your browser
   ```

3. **For development**, you can use Live Server or any local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Or use VS Code Live Server extension
   ```

## 📝 Usage

### Adding a Thought
1. Type your thought in the input field
2. Select the type (Idea, Learning, or Bug)
3. Click **Save**

### Editing a Thought
1. Click the **✏️ Edit** button on any thought
2. The thought data will populate the form
3. Make your changes
4. Click **Update** to save changes
5. Click **Cancel** to abort editing

### Deleting a Thought
1. Click the **x Delete** button on any thought
2. The thought will be removed from the list and API

## 🔧 API Integration

The application uses MockAPI for backend operations. The API endpoint is configured in `api.js`:

```javascript
const API = "https://69948a24fade7a9ec0f5aecc.mockapi.io/api/v1/mind";
```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/v1/mind` | Fetch all thoughts |
| POST   | `/api/v1/mind` | Create a new thought |
| PUT    | `/api/v1/mind/:id` | Update a thought |
| DELETE | `/api/v1/mind/:id` | Delete a thought |

## 📊 Data Model

Each thought object has the following structure:

```javascript
{
  id: String,           // Unique identifier
  content: String,      // Thought content
  type: String,         // "idea" | "learning" | "bug"
  createdAt: String     // ISO timestamp
}
```

## 🎨 UI Components

- **Loader** - Displays during API operations
- **Form** - Input field, type selector, and action buttons
- **Thought Cards** - Individual cards displaying each thought
- **Action Buttons** - Edit and Delete buttons for each thought

## 🔑 Key Functions

### script.js
- `loadThoughts()` - Fetch and display all thoughts
- `handelAddThoughts()` - Create a new thought
- `handleDeleteThoughts()` - Delete a thought by ID
- `handleUpdateThought()` - Populate form for editing
- `showLoader() / hideLoader()` - Toggle loading state

### api.js
- `getThoughts()` - GET all thoughts
- `createThought()` - POST new thought
- `updateThought()` - PUT updated thought
- `deleteThought()` - DELETE thought by ID

### ui.js
- `renderThought()` - Render thoughts to the DOM

## 🌟 Future Enhancements

- [ ] Search and filter functionality
- [ ] Sort by date or type
- [ ] Tag system for better organization
- [ ] Export thoughts to JSON/CSV
- [ ] Dark/Light theme toggle
- [ ] Markdown support for thought content
- [ ] Offline support with Service Workers
- [ ] User authentication
- [ ] Rich text editor

## 🐛 Known Issues

- Mixed data formats from API (some entries use `title/body`, others use `content/type`)
- No confirmation dialog for delete operations

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as part of the AI-FullStack learning journey.

---

**Happy Thinking! 🧠✨**
