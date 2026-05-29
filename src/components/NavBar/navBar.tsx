import { Link, useNavigate } from "react-router";
import { AvatarDropdown } from "./Dropdown/dropdown";

export function NavBar( ) {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const anuncio = user.role;
    
    return (
        <div className="sticky top-0 z-50">
            <div className="h-[56px] border-b border-[#e5e5e5] bg-white px-6">
                <div className="flex h-full w-full items-center justify-between">
                    <Link to ="/dashboard" className="text-[20px] font-bold leading-none text-[#111]">
                        serviços<span className="text-[#4f46e5]">já</span>
                    </Link>

                    <div className="flex items-center gap-3">

                        {anuncio ==="PRESTADOR" ? (
                            <button
                            onClick={() => navigate("/servicos/novo") }
                            className="cursor-pointer rounded-lg border-none bg-[#1a1a1a] px-4 py-2 text-[13px] font-medium text-white"
                            >
                                Publicar serviço
                            </button> 
                        ): (<></>)}

                        <div className="flex items-center">
                          <AvatarDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
