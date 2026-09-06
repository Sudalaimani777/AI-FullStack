# Currency Converter

A modern, responsive currency converter application that provides real-time exchange rates for major world currencies.

## Features

- **Real-time Exchange Rates**: Fetches live currency conversion rates from ExchangeRate-API
- **Multiple Currencies**: Supports 7 major currencies:
  - AUD (Australian Dollar)
  - CAD (Canadian Dollar)
  - EUR (Euro)
  - GBP (British Pound)
  - INR (Indian Rupee)
  - JPY (Japanese Yen)
  - USD (US Dollar)
- **Live Conversion**: Automatically updates conversion as you type
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Modern UI**: Beautiful gradient background with smooth transitions and hover effects
- **Accessible**: Proper focus states and disabled input styling

## Technologies Used

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **JavaScript (ES6+)**: Async/await for API calls and DOM manipulation
- **ExchangeRate-API**: Third-party API for real-time exchange rates

## Project Structure

```
CurrencyConverter/
├── index.html      # Main HTML file with Tailwind styling
├── script.js       # JavaScript logic for currency conversion
└── README.md       # Project documentation
```

## How It Works

1. **Select Source Currency**: Choose the currency you want to convert from
2. **Enter Amount**: Type the amount you want to convert
3. **Select Target Currency**: Choose the currency you want to convert to
4. **View Result**: The converted amount and exchange rate are automatically displayed

## API Integration

The application uses the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch real-time conversion rates:

```javascript
API_URL: https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/{CURRENCY}
```

## Setup Instructions

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process or dependencies required - it works out of the box!

## Usage

Simply open the `index.html` file in any modern web browser. The application will:
- Load with USD as the source currency
- Show INR as the target currency by default
- Display the current exchange rate
- Update conversions in real-time as you interact with it

## Code Highlights

### Event Listeners
The app listens for changes on:
- Source currency selection
- Target currency selection
- Amount input field

### Async API Calls
Uses modern async/await syntax for clean, readable asynchronous code:

```javascript
async function updateRate() {
    const response = await fetch(`${API_URL}/${firstCurrencyCountry.value}`);
    const data = await response.json();
    const rate = data.conversion_rates[secondCurrencyCountry.value];
    // Update UI with conversion results
}
```

### Responsive Design
Built with Tailwind CSS utility classes:
- Mobile-first approach with stacked layout
- Flexbox for horizontal layout on larger screens
- Smooth transitions and hover effects
- Beautiful gradient background

## Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript features (async/await, arrow functions)
- Fetch API
- CSS Grid and Flexbox

## Future Enhancements

Potential improvements for the project:
- [ ] Add currency swap button
- [ ] Show currency symbols (₹, $, €, £, etc.)
- [ ] Add historical exchange rate charts
- [ ] Implement favorite currency pairs
- [ ] Add offline support with cached rates
- [ ] Include more currencies
- [ ] Add currency flags for visual identification

## License

This project is open source and available for educational purposes.

## Author

Created as part of the AI-FullStack learning journey.
