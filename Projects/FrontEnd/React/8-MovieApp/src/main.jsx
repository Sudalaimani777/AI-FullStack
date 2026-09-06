import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { movieStore } from './Store/movieStore.js';


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={movieStore}>
      <App />
    </Provider>
  </BrowserRouter>
)
