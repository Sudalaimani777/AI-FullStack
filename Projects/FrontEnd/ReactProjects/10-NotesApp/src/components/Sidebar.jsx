import { NavLink } from "react-router-dom"
import { MdNotificationImportant } from "react-icons/md"
import { IoArchive, IoHome, IoTrashBin } from "react-icons/io5"

const Sidebar = () => {
  const links = [
    { id: 1, to: "/", name: "Home", icon: <IoHome className="text-xl" /> },
    { id: 2, to: "/archive", name: "Archive", icon: <IoArchive className="text-xl" /> },
    { id: 3, to: "/important", name: "Important", icon: <MdNotificationImportant className="text-xl" /> },
    { id: 4, to: "/bin", name: "Bin", icon: <IoTrashBin className="text-xl" /> },
  ]

  const getStyles = ({ isActive }) =>
    `flex min-w-fit items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition md:justify-start md:px-4 ${
      isActive
        ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
        : "bg-white text-slate-600 hover:bg-amber-50 hover:text-slate-900"
    }`

  return (
    <aside className="w-full border-b border-amber-100 bg-white/70 px-4 py-4 backdrop-blur md:sticky md:top-22.25 md:h-[calc(100vh-89px)] md:w-72 md:shrink-0 md:border-b-0 md:border-r md:px-5 md:py-6">
      <nav className="flex gap-3 overflow-x-auto pb-1 md:flex-col md:overflow-visible">
        {links.map((link) => (
          <NavLink to={link.to} key={link.id} className={getStyles}>
            <span className="shrink-0">{link.icon}</span>
            <span className="whitespace-nowrap">{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
