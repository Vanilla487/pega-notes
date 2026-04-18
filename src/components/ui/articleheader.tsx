export default function ArticleHeader() {
  return (
    <header className="flex h-16 w-full items-center pl-4 md:pr-12">
      <div className="flex w-full justify-end">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold tracking-tight text-brand-dark">
            PEGA
          </span>
          <span className="text-xl font-extralight text-brand-muted opacity-60">
            NOTES
          </span>
        </div>
      </div>
    </header>
  )
}
