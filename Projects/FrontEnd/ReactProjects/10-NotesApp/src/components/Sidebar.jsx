import { NavLink } from "react-router-dom"
import { MdNotificationImportant } from "react-icons/md";
import { IoHome, IoArchive, IoTrashBin } from "react-icons/io5";

const Sidebar = () => {

    const link = [
        { id: 1, to: "/", name: "Home", icon: <IoHome /> },
        { id: 2, to: "/archive", name: "Archive", icon: <IoArchive /> },
        { id: 3, to: "/important", name: "Important", icon: <MdNotificationImportant /> },
        { id: 4, to: "/bin", name: "Bin", icon: <IoTrashBin /> },
    ]

    const getStyles = ({ isActive }) =>
        `flex items-center gap-1 hover:bg-indigo-800 hover:text-white rounded-tr-full rounded-br-full ${isActive ? "bg-indigo-800 text-white" : ""
        }`

    return (
        <>
            <aside className="flex flex-col w-37.5 p-3 border-r-2">
                {
                    link.map(link => (
                        <NavLink
                            to={link.to}
                            key={link.id}
                            className={getStyles}
                        >
                            <span>
                                {link.icon}
                            </span>
                            <span>
                                {link.name}
                            </span>
                        </NavLink>
                    ))
                }
            </aside>
        </>
    )
}

export default Sidebar