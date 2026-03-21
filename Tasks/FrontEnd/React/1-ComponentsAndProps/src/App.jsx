import "./App.css";
import { comments } from "./Components/Comment";
import CommentList from "./Components/Comment/CommentList";
// import { product } from "./data/product";

function App() {


  return (
    <main className="app">
      {/* <h1 className="app__title">User Profile Cards</h1>
      <section className="app__cards">
        <UserCard userData={userOne} />
        <UserCard userData={userTwo} />
        <UserCard userData={userThree} />
      </section> */}

      {/* <section>
        <h2>Product List</h2>
        <ProductList productList = {product}/>
      </section> */}

      <section>
        <CommentList comments={comments} postTitle="Props Flow Practice Post" />
      </section>
    </main>
  )
}

export default App
