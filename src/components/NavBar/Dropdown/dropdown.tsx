"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export function AvatarDropdown() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const navegate = useNavigate();
  
useEffect(() => {
  
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token) {
      navigate("/");
    } else {
      setUser(JSON.parse(storedUser || "{}"));
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/"; 
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-9 gap-2 rounded-full border border-[#cecec6] bg-[#ddddd6] px-3 text-[#4a4a44] shadow-sm transition-colors hover:border-[#bbbbae] hover:bg-[#d5d5cd] hover:text-[#1f1f1a]"
        >
          <Avatar className="size-6 border border-[#bfbfb3] bg-[#ecece5]">
            <AvatarFallback className="bg-transparent text-[11px] font-semibold text-[#4a4a44]">
              {user?.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <span className="max-w-[140px] truncate text-[13.5px] font-medium">
            {user?.name || "Minha conta"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 bg-[#1f1f1f] border border-white/10 text-white">
        <DropdownMenuGroup>
          <DropdownMenuItem
          onClick={() => navegate("/perfil")}
          >Perfil</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Configurações</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem 
          variant="destructive"
          onClick={logout}
          >Sair</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
