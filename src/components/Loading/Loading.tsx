import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function BadgeWithSpinner() {
  return (
    <div className="flex h-full items-center justify-center">
      {/* <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        Deleting
      </Badge> */}
      <Badge className="border-0 bg-transparent text-zinc-950 shadow-none hover:bg-transparent">
        carregando
        <Spinner data-icon="inline-end" />
      </Badge>
    </div>
  )
}
