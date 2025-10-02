import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, User, Code2, Briefcase, Mail } from "lucide-react"

const menuItems = [
  { title: "Home", icon: Home, href: "#home" },
  { title: "About", icon: User, href: "#about" },
  { title: "Skills", icon: Code2, href: "#skills" },
  { title: "Projects", icon: Briefcase, href: "#projects" },
  { title: "Contact", icon: Mail, href: "#contact" },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-8">
          <h2 className="text-lg font-bold">Lawrence</h2>
          <p className="text-xs text-muted-foreground">Portfolio</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lawrence
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}