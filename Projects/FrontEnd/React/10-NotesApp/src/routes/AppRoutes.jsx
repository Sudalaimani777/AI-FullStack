import { Routes, Route } from "react-router-dom"
import { AppLayout } from "../components"
import { Archive, Bin, Home, Important } from "../pages/index"

const AppRoutes = () => {
  const route = [
    { id: 1, path: "/", element: <Home /> },
    { id: 2, path: "/archive", element: <Archive /> },
    { id: 3, path: "/important", element: <Important /> },
    { id: 4, path: "/bin", element: <Bin /> }
  ]

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          {
            route.map(route => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))
          }
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes
