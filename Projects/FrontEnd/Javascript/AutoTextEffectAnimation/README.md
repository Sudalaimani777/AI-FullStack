# Auto Text Effect Animation

A simple and elegant typing animation that displays different career titles with a smooth character-by-character reveal effect.

## 🎯 What It Does

This project displays text that types itself automatically, showing different careers one letter at a time:
- Web Developer
- Artist
- Gamer
- Freelancer

The animation loops continuously through all careers with a smooth typing effect.

## 🚀 Features

- **Smooth typing animation** - Characters appear one by one
- **Auto-looping** - Cycles through all careers automatically
- **Responsive design** - Works on all screen sizes
- **Modern UI** - Beautiful gradient background with glass-morphism effect
- **Tailwind CSS** - Styled with utility-first CSS framework

## 📁 Files

- `index.html` - Main HTML structure with Tailwind CSS styling
- `script.js` - JavaScript logic for the typing animation

## 🎨 How It Works

1. The script starts with a list of career titles
2. It displays one character at a time every 400 milliseconds
3. When a career is fully typed, it moves to the next one
4. After all careers are shown, it loops back to the first one

## 💻 How to Use

1. Open `index.html` in your web browser
2. Watch the typing animation!

Or use a local server:
```bash
# Using Live Server extension in VS Code
# Right-click index.html and select "Open with Live Server"
```

## 🛠️ Technologies Used

- HTML5
- JavaScript (ES6)
- Tailwind CSS (CDN)

## 📝 Customization

Want to change the careers? Edit the `careerArray` in `script.js`:
```javascript
const careerArray = ["Your Job", "Another Job", "Cool Title", "Dream Career"];
```

Want to change the typing speed? Modify the timeout value (in milliseconds):
```javascript
setTimeout(updateUI, 400)  // Change 400 to your preferred speed
```

---

**Enjoy the smooth typing animation! ✨**
