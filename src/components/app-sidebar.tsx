import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import myLogo from "../assets/PEGA.png"

const menuItems = [
    {title: "Home", url:"#"},
    {title: "About", url:"#"},
    {title: "Search", url:"#"},
    {title: "Download", url:"#"}
]

const contentItems = [
    {title: "Best Practices", 
     url:"#",
    items:[
        {title:"Error Handling within Data Flows",},
        {title:"Which Commit to use and when",},
    ],
    },
    {title: "Technical Hurdles", url:"#"},
    {title: "Deployments", url:"#"},
]





export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-row border-b">   
      <img src={myLogo} alt="Logo" className="h-12 w-12 object-contain pl-1" />
      <SidebarTrigger className="ms-auto h-12 w-12" />
        </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
            <SidebarMenu>
                {menuItems.map((item) => (
                    <SidebarMenuButton className="text-primary" key={item.title} asChild>
                        <a href={item.url}>
                            <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                    ))}
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarMenu>
                {contentItems.map((item) => (
                    <SidebarMenuButton className="text-primary" key={item.title} asChild>
                        <a href={item.url}>
                            <span>{item.title}</span>
                        </a>
                    
                    </SidebarMenuButton>
                    ))}
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t h-12" />
    </Sidebar>
  )
}