import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
//import ArticleHeader from "@/components/ui/articleheader"
//import Article from "./components/article"
import TitlePage from "./components/home-page"
import PageHeader from "./components/ui/pageheader"

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        {children}

        <TitlePage></TitlePage>
      </main>
    </SidebarProvider>
  )
}
