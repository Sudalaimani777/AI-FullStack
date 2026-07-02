import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto flex w-full max-w-[1600px] flex-col md:flex-row">
        <Sidebar />
        <section className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default AppLayout