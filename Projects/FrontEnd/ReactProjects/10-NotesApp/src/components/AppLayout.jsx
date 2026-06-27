import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <section className="flex-1 p-4">
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default AppLayout
