"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GetInfoUser } from "@/services/getInfoUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function AvatarDropdown() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const navegate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const storedUser = async () => {
      const response = await GetInfoUser();
      setUser(response);
    };

    if (!token) {
      navigate("/");
    } else {
      storedUser();
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-[8px] rounded-[20px] border-[0.5px] border-[rgba(0,0,0,0.15)] bg-white px-[12px] py-[5px] pl-[6px] text-[13px] font-normal text-[#1a1a1a]"
          >
            <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-[0.5px] border-[rgba(0,0,0,0.12)] bg-[#f0efeb] text-[11px] font-[500] text-[#666]">
              {user?.data?.name?.charAt(0) || "U"}
            </div>
            <span className="max-w-[140px] truncate text-[13px] font-normal">
              {user?.data?.name || "Minha conta"}
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50 bg-[#1f1f1f] border border-white/10 text-white">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => navegate("/perfil")}>
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Configurações</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive" onClick={logout}>
              Sair
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>   
    </>
  );
}
