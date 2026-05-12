import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { postStore } from './Store/postStore.js';

createRoot(document.getElementById('root')).render(
  <Provider store={postStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
