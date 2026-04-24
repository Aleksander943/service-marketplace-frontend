import { Link } from "react-router";
import { ServiceFilter } from "./Filter/serviceFilter";
import { Search } from "./Search/search";

export function NavBar() {

        
    return (
        <header className="sticky top-0 z-50">
            <div className="h-[58px] border-b-2 border-[#1a1a18] bg-[#f4f4f1] px-7">
                <div className="mx-auto flex h-full max-w-[1280px] items-center gap-5">
                    <Link to ="/dashboard" className="shrink-0 text-[22px] leading-none font-bold tracking-[-0.5px] text-[#1a1a18] [font-family:Fraunces,serif]">
                        serviços<span className="italic text-[#2350d4]">já</span>
                    </Link>

                    <div className="min-w-0 max-w-[500px] flex-1">
                        <Search />
                    </div>

                    <div className="ml-auto flex items-center gap-3">
                        <Link to="/servicos/novo" className="h-8 rounded-md bg-[#1a1a18] px-4 text-[13.5px] font-medium text-[#fdfcf8] transition hover:bg-[#333333]">
                            Publicar serviço
                        </Link>

                        <div className="flex cursor-pointer items-center gap-2.5">
                            <div className="flex size-8 items-center justify-center rounded-full border border-[#cecec6] bg-[#ddddd6] text-xs font-semibold text-[#4a4a44] [font-family:Fraunces,serif]">
                                JD
                            </div>
                            <span className="text-[13.5px] font-medium text-[#4a4a44]">John Dfghg</span>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceFilter />
        </header>
    );
}
