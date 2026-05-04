import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { FeedbackProvider } from './Context/FeedbackContext.jsx';


createRoot(document.getElementById('root')).render(
    <FeedbackProvider>
        <App />
    </FeedbackProvider>


)
