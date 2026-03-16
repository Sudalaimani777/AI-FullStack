import "./App.css";
import { userOne, userThree, userTwo } from "./Components/UserCard"
import UserCard from "./Components/UserCard/UserCard"

function App() {


  return (
    <main className="app">
      <h1 className="app__title">User Profile Cards</h1>
      <section className="app__cards">
        <UserCard userData={userOne} />
        <UserCard userData={userTwo} />
        <UserCard userData={userThree} />
      </section>
    </main>
  )
}

export default App
