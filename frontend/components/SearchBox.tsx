import { Search } from "lucide-react"
import { Input } from "./ui/input"

export default function SearchBox() {
  return (
    <div className="relative w-full group">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-hover:text-primary" />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-9 text-center w-full transition-all duration-300 ease-in-out
          hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
          focus:shadow-[0_0_20px_rgba(255,255,255,0.5)]
          dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
          dark:focus:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
      />
    </div>
  )
} 