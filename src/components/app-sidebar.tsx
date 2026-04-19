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
import { ChevronDown, ChevronRight } from "lucide-react"

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
    items: [{ title: "Error Handling inside Data Flows" }, { title: "Commit" }],
  },
  {
    title: "Technical Hurdles",
    url: "#",
    items: [
      { title: "How to index from a Data Flow" },
      { title: "Enabling Reporting from Embedded Pages" },
    ],
  },
  {
    title: "Deployments",
    url: "#",
    items: [{ title: "Updating the Product Rule for Deployment" }],
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
                className="font-inter font-medium text-brand-dark hover:bg-transparent"
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
          <SidebarGroupLabel className="font-mono font-medium text-primary">
            Content Categories
          </SidebarGroupLabel>
          <SidebarMenu>
            {contentItems.map((item) => (
              <Collapsible key={item.title} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="text-secondary hover:bg-transparent">
                      {item.title}
                      {""}
                      <ChevronRight className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <ChevronDown className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              className="font-mono text-secondary-foreground hover:bg-transparent"
                              asChild
                            >
                              <a>- {item.title}</a>
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
      <SidebarFooter
        className={
          state === "collapsed"
            ? "hidden"
            : "justify-content block flex h-12 border-t font-mono text-brand-light"
        }
      >
        <p className="ml-2">@lewischristie</p>
      </SidebarFooter>
    </Sidebar>
  )
}
