import { useState, useEffect } from "react"
import axios from "axios";
const App = () => {

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => console.log("Hii"), []) //Empty Dependency Array;
  useEffect(() => console.log("The dependency array has the state variable count"), [count]); //Dependency Array with count as a dependency;



  useEffect(() => {
    const url = "https://dummyjson.com/products/";
    const getData = async (url) => {
      try {
        const { data: { products } } = await axios.get(url);
        console.log(products);
        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    };
    getData(url);
  }, []);

  return (
    <>
      <section>
        <h1>Learning UseEffect</h1>
        <h3>{count}</h3>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </section>

      <section>
        {
          products?.map(product => <p key={product.id}>{product.title}</p>)
        }
      </section>
    </>
  )
}

export default App