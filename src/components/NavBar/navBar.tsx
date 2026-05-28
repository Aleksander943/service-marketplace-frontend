import { Link, useNavigate } from "react-router";
import { Search } from "./Search/search";
import { AvatarDropdown } from "./Dropdown/dropdown";

export function NavBar( ) {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const anuncio = user.role;
    
    return (
        <div className="sticky top-0 z-50">
            <div className="h-[56px] border-b-[0.5px] border-[rgba(0,0,0,0.12)] bg-white px-[24px]">
                <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between gap-5">
                    <Link to ="/dashboard" className="shrink-0 text-[18px] leading-none font-[500] text-[#1a1a1a]">
                        serviços<span className="font-normal text-[#2563EB]">já</span>
                    </Link>

                    <div className="min-w-0 max-w-[500px] flex-1">
                        <Search />
                    </div>

                    <div className="ml-auto flex items-center gap-[12px]">

                        {anuncio ==="PRESTADOR" ? (
                            <button
                            onClick={() => navigate("/servicos/novo") }
                            className="cursor-pointer rounded-[8px] border-none bg-[#111] px-[14px] py-[7px] text-[13px] font-normal text-white"
                            >
                                Publicar serviço
                            </button> 
                        ): (<></>)}

                        <div className="flex cursor-pointer items-center gap-2.5">
                          <AvatarDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
