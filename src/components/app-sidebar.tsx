import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroupLabel,
  useSidebar,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import myLogo from "../assets/PEGA.png"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Minus, Plus } from "lucide-react"

const menuItems = [
  { title: "Home", url: "#" },
  { title: "About", url: "#" },
  { title: "Search", url: "#" },
  { title: "Download", url: "#" },
]

const contentItems = [
  {
    title: "Best Practices",
    url: "#",
    items: [{ title: "Error Handling" }, { title: "Commit" }],
  },
  {
    title: "Technical Hurdles",
    url: "#",
    items: [{ title: "Error Handling" }, { title: "Commit" }],
  },
  {
    title: "Deployments",
    url: "#",
    items: [{ title: "Error Handling" }, { title: "Commit" }],
  },
]

export function AppSidebar() {
  const { state } = useSidebar()

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="drop-shadow-sm">
      <SidebarHeader
        className={
          state === "collapsed"
            ? "flex flex-row items-center justify-center border-b"
            : "flex flex-row items-center border-b"
        }
      >
        <img
          src={myLogo}
          alt="Logo"
          className={
            state === "collapsed"
              ? "hidden"
              : "block h-12 w-12 object-contain pl-1"
          }
        />
        <SidebarTrigger
          className={
            state === "collapsed"
              ? "text-brand-light"
              : "ml-auto text-brand-light"
          }
        />
      </SidebarHeader>

      <SidebarContent className={state === "collapsed" ? "hidden" : "block"}>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuButton
                className="text-primary hover:bg-transparent"
                key={item.title}
                asChild
              >
                <a href={item.url}>
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary">
            Recently Viewed
          </SidebarGroupLabel>
          <SidebarMenu>
            {contentItems.map((item) => (
              <Collapsible key={item.title} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="text-secondary">
                      {item.title}
                      {""}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              className="text-secondary-foreground"
                              asChild
                            >
                              <a>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="h-12" />
    </Sidebar>
  )
}
