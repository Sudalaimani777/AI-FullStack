import "./App.css";
import ProductList from "./Components/Product/ProductList";
// import { userOne, userThree, userTwo } from "./Components/UserCard"
import UserCard from "./Components/UserCard/UserCard"
import { product } from "./data/product";

function App() {


  return (
    <main className="app">
      {/* <h1 className="app__title">User Profile Cards</h1>
      <section className="app__cards">
        <UserCard userData={userOne} />
        <UserCard userData={userTwo} />
        <UserCard userData={userThree} />
      </section> */}

      <section>
        <h2>Product List</h2>
        <ProductList productList = {product}/>
      </section>
    </main>
  )
}

export default App
