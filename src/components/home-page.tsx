import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button"
import { MoveRight } from "lucide-react"

const articles = [
  {
    title: "Error Handling inside Data Flows",
    description:
      "How to properly report an error during processing Activities/Data Transforms within Data Flows",
    category: "·Best Practices",
  },
  {
    title: "How to index from a Data Flow",
    description:
      "How to ensure indexing is completed for cases created from a data flow",
    category: "·Technical Hurdles",
  },
  {
    title: "Updating the Product Rule for Deployment",
    description:
      "How to properly update the product rule to deploy data instances",
    category: "·Deployments",
  },
  {
    title: "Enabling Reporting from Embedded Pages",
    description: "How to enable reporting for embedded pages",
    category: "·Technical Hurdles",
  },
]

export default function TitlePage() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-8 py-20">
      <header className="mb-6">
        <p className="font-mono text-xs tracking-widest text-brand-light">
          ·Notes and Learnings from a Senior System Architect
        </p>
        <div className="flex">
          <h1 className="text-7xl font-bold tracking-tighter text-brand-dark">
            PEGA
          </h1>
          <h1 className="text-7xl font-bold tracking-tighter text-brand-muted">
            NOTES
          </h1>
        </div>
      </header>
      <h2 className="mt-12 mb-2 font-mono font-medium text-brand-muted">
        Recent Articles
      </h2>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {articles.map((item) => (
          <Card className="flex h-full min-h-[250px] flex-col bg-brand-card">
            <div className="mr-10 ml-6 flex-1 py-4">
              <p className="font-mono text-xs text-brand-light">
                {item.category}
              </p>
              <CardTitle className="mt-2 text-4xl font-bold tracking-tighter text-brand-dark">
                {item.title}
              </CardTitle>
              <CardDescription className="font-inter mt-2 font-medium text-brand-muted">
                {item.description}
              </CardDescription>
            </div>
            <CardFooter className="ms-auto mt-auto flex">
              <Button size="lg">
                <MoveRight
                  className="text-background"
                  size={32}
                  strokeWidth={3}
                />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}
