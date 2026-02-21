# Basic Calculator

A simple, responsive calculator built with HTML, Tailwind CSS, and vanilla JavaScript.

## Features

- ✨ Clean and modern UI with gradient background
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Color-coded buttons for better UX
- ⚡ Real-time calculations
- 🔢 Supports basic arithmetic operations (+, -, *, /)
- 🎯 Clear (C) functionality to reset calculations

## Technologies Used

- **HTML5** - Structure
- **Tailwind CSS** - Styling and responsiveness
- **JavaScript** - Calculator logic and event handling

## File Structure

```
Calculator/
├── index.html      # Main HTML structure
├── script.js       # Calculator functionality
└── README.md       # Project documentation
```

## How to Use

1. Open `index.html` in your web browser
2. Click number buttons to input values
3. Click operator buttons (+, -, *, /) to perform operations
4. Click "=" to calculate the result
5. Click "C" to clear the display

## Calculator Layout

The calculator follows a standard 4-column grid layout:

| C (Clear) | / | * | - |
|-----------|---|---|---|
| 7 | 8 | 9 | + |
| 4 | 5 | 6 | = |
| 1 | 2 | 3 | - |
| 0 (wide) | . | - | - |

## Color Scheme

- **Red** - Clear button (C)
- **Orange** - Operator buttons (/, *, -, +)
- **Green** - Equals button (=)
- **Gray** - Number buttons (0-9, .)
- **Dark gradient** - Background

## Responsive Breakpoints

- **Mobile** - Base styles (< 640px)
- **Tablet** - `sm:` breakpoint (≥ 640px)
- **Desktop** - `lg:` breakpoint (≥ 1024px)

## JavaScript Functionality

The calculator uses event listeners on all buttons to:
- Append numbers and operators to the display
- Clear the display when "C" is clicked
- Evaluate expressions when "=" is clicked using `eval()`

## Future Enhancements

- [ ] Add keyboard support
- [ ] Add backspace/delete functionality
- [ ] Add memory functions (M+, M-, MR, MC)
- [ ] Add scientific calculator mode
- [ ] Add calculation history
- [ ] Improve error handling

## License

Free to use for educational purposes.

---

**Made with ❤️**
