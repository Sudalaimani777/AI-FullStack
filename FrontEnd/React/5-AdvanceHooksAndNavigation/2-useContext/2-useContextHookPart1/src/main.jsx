import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CounterProvider } from './Context/CounterContext.jsx'


createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <App />
  </CounterProvider>

)
