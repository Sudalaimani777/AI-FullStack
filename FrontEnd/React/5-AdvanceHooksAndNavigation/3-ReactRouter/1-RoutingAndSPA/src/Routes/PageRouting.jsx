import { Link, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"


const PageRouting = () => {

    const link = [
        { to: "/", name: "Home" },
        { to: "/about", name: "About" },
        { to: "/contact", name: "Contact" },
    ]

    const pageRoute = [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> }
    ]

    return (
        <>
            {
                link?.map(link => (
                    <Link
                        to={link.to}
                        key={link.to}
                    >
                        {link.name}
                    </Link>
                ))
            }

            <Routes>
                {
                    pageRoute?.map(link => (
                        <Route
                            path={link.path}
                            element={link.element}
                            key={link.path}
                        />
                    ))
                }
            </Routes>
        </>
    )
}

export default PageRouting