import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import Info from "./Components/Info/Info"
import Interest from "./Components/Interest/Interest"

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#23252C] px-4 py-8">
      <div className="w-[317px] overflow-hidden rounded-xl bg-[#1A1B21] shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </main>
  )
}

export default App
