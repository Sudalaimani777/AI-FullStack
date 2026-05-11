import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import { customerStore } from './Store/customerStore.js'

createRoot(document.getElementById('root')).render(
  <Provider store={customerStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
