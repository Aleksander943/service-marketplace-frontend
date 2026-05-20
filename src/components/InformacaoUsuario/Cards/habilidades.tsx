import { useState } from "react";
import { AdicionarHabilidade } from "../EditarInfo/adicionarHabilidade/adicionarHabilidade";
import { Plus } from "lucide-react";

export const HabilidadesUser = ({ skillCount, usuario }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  type skillsTypes = { id: number; name: string };
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#aaa]">
          Habilidades
        </p>
        <button
        onClick={() => setIsOpen(true)}
        >
          <Plus className="w-4 h-4 cursor-pointer"/>
        </button>
      </div>

      {skillCount === 0 ? (
        <>
          <div className="rounded-xl border border-dashed border-[#dedad0] bg-[#f4f4f1] p-4 text-center text-sm text-[#8a8a82]">
            <div className="text-2xl">🔧</div>
            <div className="mt-2">Nenhuma habilidade cadastrada</div>
          </div>
          <div className="mt-3 opacity-50 flex flex-wrap gap-2">
            {["+ Elétrica", "+ Pintura", "+ Limpeza"].map((s) => (
              <span
                key={s}
                className="text-sm text-[#aaa] bg-[#f5f5f5] border border-dashed border-[#ccc] px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-wrap gap-2">
          {usuario?.skills.map((skill: skillsTypes) => (
            <span
              key={skill.id}
              className="text-sm text-[#3c3489] bg-[#eeedfe] px-3 py-1 rounded-full"
            >
              {skill.name}
            </span>
          ))}
        </div>
      )}
      <AdicionarHabilidade isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};
