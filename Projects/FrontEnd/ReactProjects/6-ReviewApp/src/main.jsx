import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { FeedbackProvider } from './Context/FeedbackContext.jsx';
import { ThemeProvider } from './Context/ThemeContext.jsx';
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeProvider>
            <FeedbackProvider>
                <App />
            </FeedbackProvider>
        </ThemeProvider>
    </BrowserRouter>


)
