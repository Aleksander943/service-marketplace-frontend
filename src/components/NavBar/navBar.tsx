import { AvatarDropdown } from "./Dropdown/dropdown";
import { ServiceFilter } from "./Filter/serviceFilter";
import { Search } from "./Search/search";

export function NavBar(){
    return(
        <header className="w-full px-2 py-2">
            <div className="rounded-2xl border border-white/10 bg-[#1f1f1f] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="flex items-center gap-3 px-3 py-2">
                    <h1 className="shrink-0 text-[1.05rem] font-semibold tracking-tight text-white">
                        <span className="text-white/90">serviços</span>
                        <span className="text-sky-400">já</span>
                    </h1>
                    <div className="min-w-0 flex-1">
                        <Search />
                    </div>
                    <div>

                        <AvatarDropdown  />
                    </div>
                </div>
                <div className="border-t border-white/8 bg-[#232323] ">
                    <ServiceFilter />
                </div>
            </div>
        </header>
    );
};
