//We are importing the createRoot method from the react-dom/client package. This method is used to create a root element for rendering our React application.
import { createRoot } from 'react-dom/client'
//We importing the App component from the App.jsx file. This component is the main component of our React application and will be rendered to the DOM.
import App from './App.jsx'

//The createRoot method is used to create a root element for rendering the React application. It takes a DOM element as an argument, which is typically the element with the id 'root' in the HTML file. The render method is then called on the created root, passing the App component as an argument to render it on the page.
createRoot(document.getElementById('root')).render(
    // The App component is being rendered inside the root element created by createRoot. This means that the content defined in the App component will be displayed on the webpage where the root element is located.
    <App />
)
