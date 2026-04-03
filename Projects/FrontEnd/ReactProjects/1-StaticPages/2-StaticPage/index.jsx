import { createRoot } from "react-dom/client"
import Header from "./Components/Header"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"

const root = createRoot(document.getElementById("root"))

/**
 * Challenge:
 * 
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
 */







function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
