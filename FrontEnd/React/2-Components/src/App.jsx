import Card from "./Components/Card"
import Footer from "./Components/Footer"
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
        <Footer/>
      </section>
    </>
  )
}

export default App