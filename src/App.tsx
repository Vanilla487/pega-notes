import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import ArticleHeader from "@/components/ui/articleheader"
import Article from "./components/article"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        {children}
        <ArticleHeader />
        <Article />
      </main>
    </SidebarProvider>
  )
}
