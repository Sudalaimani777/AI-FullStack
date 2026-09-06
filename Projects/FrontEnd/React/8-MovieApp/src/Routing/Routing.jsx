import Home from "../Pages/Home/Home"
import { Routes, Route } from "react-router-dom"

const Routing = () => {

    const routes = [
        { to: '/', name: 'Home', element: <Home /> },
    ]

    return (
        <>
            <Routes>
                {
                    routes?.map(route => (
                        <Route key={route.to} path={route.to} element={route.element} />
                    ))
                }
            </Routes>
        </>
    )
}

export default Routing