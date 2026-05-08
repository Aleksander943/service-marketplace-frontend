import { Check } from "lucide-react";

interface Props{
  certo: boolean
}

export const Estagios = ({certo}: Props) => {
  console.log(certo)
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#2350d4]/40 bg-[#eef1fc] text-xs font-semibold text-[#2350d4]">
          { certo ? <Check className="w-4 h-4"/> : 1}
        </span>
        <span className="text-xs font-medium text-[#2350d4]">Servico</span>
      </div>
      <span className="h-px w-10 shrink-0 bg-[#2350d4]/30" />
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#dedad0] bg-[#efece3] text-xs font-semibold text-[#8a8a82]">
          2
        </span>
        <span className="text-xs font-medium text-[#8a8a82]">Publicar</span>
      </div>
    </div>
  );
};
