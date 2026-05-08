import PrivateRoute from "../Components/PrivateRoute"
import About from "../Pages/About/About"
import Cart from "../Pages/Cart/Cart"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import { NavLink, Routes, Route } from 'react-router-dom'

const PageRouting = () => {

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Cart', path: '/cart' },
        { name: 'Login', path: '/login' },
    ]

    const routes = [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/cart', element: <PrivateRoute><Cart /> </PrivateRoute> },
        { path: '/login', element: <Login /> },
    ]

    const handleNav = ({ isActive }) => {
        return {
            color: isActive ? 'red' : 'black',
            fontSize: isActive ? '20px' : '16px',
        }
    }

    return (
        <>
            {
                links?.map(link => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        style={handleNav}
                    >
                        {link.name}
                    </NavLink>
                ))
            }

            <Routes>
                {routes?.map(route => (
                    <Route 
                        key={route.path} 
                        path={route.path} 
                        element={route.element} 
                    />
                ))}
            </Routes>
        </>
    )
}

export default PageRouting