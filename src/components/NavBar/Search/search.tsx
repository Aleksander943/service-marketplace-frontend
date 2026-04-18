import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="flex h-10 min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-[#2a2a2a] px-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <span className="size-2.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
      <Input
        type="search"
        placeholder="O que você precisa? Ex: pintor, faxineira..."
        className="h-full border-0 bg-transparent px-0 text-sm text-white placeholder:text-white/40 focus-visible:ring-0"
      />
      <Button
        variant="ghost"
        size="icon"
        className="size-7 rounded-lg bg-transparent text-white/60 hover:bg-white/5 hover:text-white"
        aria-label="Pesquisar"
      >
        <span className="text-base leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        </span>
      </Button>
    </div>
  )
}
