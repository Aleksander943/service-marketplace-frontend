export const Estagios = () =>{
    return (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-400/10 text-xs font-semibold text-emerald-300">
                ✓
              </span>
              <span className="text-xs font-medium text-emerald-300">
                Perfil
              </span>
            </div>
            <span className="h-px w-10 shrink-0 bg-emerald-400/35" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/40 bg-sky-400/12 text-xs font-semibold text-sky-300">
                2
              </span>
              <span className="text-xs font-medium text-sky-300">Servico</span>
            </div>
            <span className="h-px w-10 shrink-0 bg-sky-400/30" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-[#2a2a2a] text-xs font-semibold text-white/45">
                3
              </span>
              <span className="text-xs font-medium text-white/45">Revisao</span>
            </div>
            <span className="h-px w-10 shrink-0 bg-white/12" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-[#2a2a2a] text-xs font-semibold text-white/45">
                4
              </span>
              <span className="text-xs font-medium text-white/45">
                Publicar
              </span>
            </div>
          </div>
    )
    }