import Card from "./Components/Card"
import Header from "./Components/Header"

const navData = {
  home: "Home",
  about: "About",
  contact: "Contact"
}

const App = () => {
  return (
    <>
      <section>
        <Header navData={navData} />
        <Card />
      </section>
    </>
  )
}

export default App