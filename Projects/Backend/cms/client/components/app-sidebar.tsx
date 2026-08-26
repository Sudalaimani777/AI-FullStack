import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { File, LucideIcon, PenTool } from "lucide-react"
import Link from "next/link"

interface Nav {
  id: number,
  title: string,
  icon: LucideIcon,
  url: string
}

const navLinks: Nav[] = [
  { id: 1, title: "Dashboard", icon: File, url: "/" },
  { id: 2, title: "Blogs", icon: File, url: "/blog" },
  { id: 3, title: "Draft", icon: PenTool, url: "/draft" },
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