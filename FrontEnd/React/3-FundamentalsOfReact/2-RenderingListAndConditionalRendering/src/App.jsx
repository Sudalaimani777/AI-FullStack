
import './App.css'

function App() {

  //The Conditional Rendering is the proces the rendering the elements based on the condition.It handles the node elements dynamically

  const isAdmin = true;

  //Rendering a List :-
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
    { id: 4, name: 'Headphones', price: 200 },
    { id: 5, name: 'Smartwatch', price: 150 },
    { id: 6, name: 'Camera', price: 800 },
  ];


  return (
    <>
      {isAdmin ? <h1>Welcome Admin</h1> : <h1>Welcome User</h1>}

      <ul>
        {products && products.map(product => (
          <li className={product.id % 2 === 0 ? "bg-green" : "bg-gray"} key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </>
  )
}

export default App
