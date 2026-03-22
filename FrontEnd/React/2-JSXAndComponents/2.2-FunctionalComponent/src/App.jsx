import Card from "./Components/Card"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

//JSX - JavaScript XML (Syntax extension for JavaScript)

//Functional Component - A JavaScript function that returns JSX. the functional component becomes when it returns the html

//Rules for JSX
//1. JSX must have only one parent element (can be a div, section, article, etc. or a React Fragment <> </>)
//2. JSX elements must be closed (e.g. <img /> instead of <img>)
//3. JavaScript expressions can be used inside JSX by wrapping them in curly braces (e.g. {expression})
//4. JSX attributes are written in camelCase (e.g. className instead of class)

//Rules of Functional Components
//1. A functional component must start with a capital letter (e.g. App, Header, Card)
//2. A functional component must return JSX (or null if it doesn't render anything)
//3. A functional component can accept props as an argument (e.g. function Card(props) { ... })
//4. A functional component can use hooks to manage state and side effects (e.g. useState, useEffect)

const App = () => {
  //Markup - HTML like syntax
  return (
    <>
      <section>
        <ul>
          
        </ul>
      </section>
    </>
  )
}

export default App