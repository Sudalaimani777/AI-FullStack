import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { FeedbackProvider } from './Context/FeedbackContext.jsx';
import { ThemeProvider } from './Context/ThemeContext.jsx';



createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <FeedbackProvider>
            <App />
        </FeedbackProvider>
    </ThemeProvider>


)
