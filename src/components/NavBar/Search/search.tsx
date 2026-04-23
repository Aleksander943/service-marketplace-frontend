import { Search as SearchIcon } from "lucide-react";

export function Search() {
  return (
    <div className="relative">
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#7e7e74]" />
      <input
        type="search"
        placeholder="O que você precisa? Ex: pintor, faxineira..."
        className="h-[38px] w-full rounded-md border border-[#cecec6] bg-[#e7e7e1] pl-9 pr-3 text-sm text-[#1a1a18] outline-none placeholder:text-[#9a9a90] focus:border-[#1a1a18]"
      />
    </div>
  );
}

