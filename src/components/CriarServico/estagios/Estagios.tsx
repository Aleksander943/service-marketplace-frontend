export const Estagios = () =>{
    return (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#1a6e3c]/35 bg-[#e8f5ee] text-xs font-semibold text-[#1a6e3c]">
                ✓
              </span>
              <span className="text-xs font-medium text-[#1a6e3c]">
                Perfil
              </span>
            </div>
            <span className="h-px w-10 shrink-0 bg-[#1a6e3c]/35" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#2350d4]/40 bg-[#eef1fc] text-xs font-semibold text-[#2350d4]">
                2
              </span>
              <span className="text-xs font-medium text-[#2350d4]">Servico</span>
            </div>
            <span className="h-px w-10 shrink-0 bg-[#2350d4]/30" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#dedad0] bg-[#efece3] text-xs font-semibold text-[#8a8a82]">
                3
              </span>
              <span className="text-xs font-medium text-[#8a8a82]">Revisao</span>
            </div>
            <span className="h-px w-10 shrink-0 bg-[#dedad0]" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#dedad0] bg-[#efece3] text-xs font-semibold text-[#8a8a82]">
                4
              </span>
              <span className="text-xs font-medium text-[#8a8a82]">
                Publicar
              </span>
            </div>
          </div>
    )
    }