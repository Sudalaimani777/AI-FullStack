import { NavLink, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Contact from "../Pages/Contact/Contact"
import About from "../Pages/About/About"


const PageRouting = () => {

 const links = [
    {to:"/", navTitle:"Home"},
    {to:"/about", navTitle:"About"},
    {to:"/contact", navTitle:"Contact"},
 ]

 const routing = [
    {path:"/", element: <Home/>},
    {path:"/about", element: <About/>},
    {path:"/contact", element: <Contact/>},
 ]

 const handleColor = ({isActive}) => {
    return{
        color: isActive ? "red" : "black"
    }
 }

  return (
    <>
        {
            links?.map(link =>(
                <NavLink 
                    key={link.to} 
                    to={link.to}
                    style={handleColor}
                >
                    {link.navTitle}
                </NavLink>
            ))
        }

        <Routes>
            {
                routing?.map(path => (
                    <Route
                        path={path.path}
                        element={path.element}
                        key={path.path}
                    />
                ))
            }
        </Routes>
    </>
  )
}

export default PageRouting