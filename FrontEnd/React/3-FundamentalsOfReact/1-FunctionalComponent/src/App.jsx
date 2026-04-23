import './App.css'

//JSX - JavaScript XML, it is a syntax extension for JavaScript, it allows us to write HTML-like code in our JavaScript files. It is used to describe the UI of our application. It is not a string or HTML, it is a syntax that gets transformed into JavaScript objects. It is used to create React elements, which are the building blocks of React applications. It allows us to write HTML-like code in our JavaScript files, which makes it easier to create and understand the structure of our UI.Simply the JSX is a function that returns the HTML element.

function App() {

  const name = "Harish" //With dynamic data.

  const element = <h1>Hii</h1>

  //REACT -> Declarative in nature (We only need to tell what to do).
  //JavaScript -> Imperative in nature (We need to tell what to do and how to do it).

  // {} -> It is used to embed the js code inside the JSX. It allows to perform js operations

  // <></> -> This is known as React Fragment, it is used to wrap the entire html elements without adding the extra node to the DOM

  //In React, all the tags should be closed, even the self-closing tags like <img>, <input>, etc. should be written as <img /> and <input /> respectively. This is because JSX is a syntax extension for JavaScript, and it follows the rules of XML, which requires all tags to be closed.

  return (
    //Markup - it is the HTML-like code that we write in our JSX. It is used to describe the structure of our UI. It is not a string or HTML, it is a syntax that gets transformed into JavaScript objects. It is used to create React elements, which are the building blocks of React applications. It allows us to write HTML-like code in our JavaScript files, which makes it easier to create and understand the structure of our UI.
    <>
      <header>
        {/* Without dynamic data. */}
        <h1>Hello my name is Sudalaimani</h1>
        {/* JSX */}
        <h2>Here, the name is dynamically set : {name}</h2>

        {element}
      </header>
    </>
  )
}

export default App
