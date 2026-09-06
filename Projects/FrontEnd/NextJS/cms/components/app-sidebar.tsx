import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { File, Inbox, LucideIcon, Pencil, Search } from "lucide-react"
import Link from "next/link"

interface Nav {
  id: number,
  title: string,
  icon: LucideIcon,
  url: string
}

const navLinks: Nav[] = [
  { id: 1, title: "Dashboard", icon: File, url: "/" },
  { id: 2, title: "Blogs", icon: Inbox, url: "/blogs" },
  { id: 3, title: "Draft", icon: Pencil, url: "/draft" },
  { id: 4, title: "Search", icon: Search, url: "/search" },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          {
            navLinks.map(nav => {
              const IconComponent = nav.icon
              return (
                <Link href={nav.url} key={nav.id}>
                  <nav className="flex gap-2 items-center justify-start">
                    <span><IconComponent /></span>
                    <h3>{nav.title}</h3>
                  </nav>
                </Link>
              )
            })
          }
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}