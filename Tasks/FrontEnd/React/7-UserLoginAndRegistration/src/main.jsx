import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserRegisterProvider } from "./context/UserRegisterContext.jsx"
import { UserLoginProvider } from "./context/UserLoginContext.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserRegisterProvider>
      <UserLoginProvider>
        <App />
      </UserLoginProvider>
    </UserRegisterProvider>
  </BrowserRouter>,
)
