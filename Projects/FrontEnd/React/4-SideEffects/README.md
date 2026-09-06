# ⚡ React Side-Effects & API Integration Suite

Welcome to the **React Side-Effects & API Integration Suite**, a project module demonstrating `useEffect` for asynchronous API data fetching, controlled form state management, dynamic object key updates, and external service communication.

---

## 📂 Repository Architecture

```text
4-SideEffects/
└── 📁 1-MemeGenerator/                 # Dynamic Meme Generator powered by Imgflip API & useEffect
    ├── 📁 components/                  # Header & Main meme form components
    ├── 📁 images/                      # Header troll face logo
    ├── 📄 App.jsx                      # App root component
    ├── 📄 index.css                    # Meme text overlay styling & grid form layout
    └── 📄 index.jsx                    # React DOM entry point
```

---

## 🚀 Featured Project: 🖼️ Meme Generator (`1-MemeGenerator`)

An interactive Meme Generator application that fetches a live catalog of popular meme templates from the **Imgflip API** (`https://api.imgflip.com/get_memes`), allowing users to dynamically customize top and bottom text overlays.

### 🛠️ Key Concepts & Architecture

#### 1. Fetching External Data (`useEffect`)
```jsx
const [fetchMeme, setFetchMeme] = useState([]);

// Runs ONCE on initial mount to retrieve meme templates
useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setFetchMeme(data.data.memes));
}, []);
```

#### 2. Controlled Input Form State
Dynamic handler managing both `topText` and `bottomText` state fields using computed property names (`[name]: value`):

```jsx
const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
});

const handleChange = e => {
    const { name, value } = e.currentTarget;
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }));
};
```

#### 3. Random Template Generation
Selecting a random meme template from the fetched API array:

```jsx
const handleGetMemeImage = () => {
    if (!fetchMeme.length) return;
    const randomNumber = Math.floor(Math.random() * fetchMeme.length);
    const memeUrl = fetchMeme[randomNumber].url;
    setMeme(prevMeme => ({
        ...prevMeme,
        imageUrl: memeUrl
    }));
};
```

---

## 🛠️ Quickstart Guide

To run the Meme Generator application:

```bash
# Navigate to the Meme Generator directory
cd 1-MemeGenerator

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React Projects Suite.*
