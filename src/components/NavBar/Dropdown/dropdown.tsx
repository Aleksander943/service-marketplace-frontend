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
            className="flex cursor-pointer items-center gap-3 border-none bg-transparent p-0"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5e5e5] text-[13px] font-semibold text-[#444]">
              {user?.data?.name?.charAt(0) || "U"}
            </div>
            <span className="max-w-45 truncate text-[14px] text-[#333]">
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
