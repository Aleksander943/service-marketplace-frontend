import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Search, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  setIsOpen: () => { void: any };
}

export const AdicionarHabilidade = ({ isOpen, setIsOpen }: Props) => {
  const fieldClass =
    "w-full rounded-[8px] border border-[#c8c7c0] bg-white px-3 py-2 text-sm text-[#1a1a18] outline-none transition-all duration-150 placeholder:text-[#b4b2a9] focus:border-[#378ADD] focus:ring-3 focus:ring-[#378ADD]/12";

  const labelClass =
    "mb-1 text-[11px] font-medium uppercase tracking-[0.05em] text-[#888780]";

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="overflow-hidden border border-[#e0dfd8] bg-white p-0 shadow-[0_16px_40px_rgba(26,26,24,0.10)] sm:max-w-[460px]">
         <AlertDialogHeader className="items-start gap-1.5 px-6 pt-5 text-left flex justify-between">
        <AlertDialogTitle className="font-heading text-xl font-semibold tracking-tight text-[#1a1a18]">
            Adicionar habilidade
          </AlertDialogTitle>
          <AlertDialogCancel className="size-8 rounded-md border-0 bg-transparent p-0 text-[#888780] hover:bg-[#f1efe8] hover:text-[#1a1a18] flex items-center">
            <X className="w-4 h-4" />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <div className="flex flex-col gap-4 px-5 pt-3">
          <div>
            <p className={labelClass}>Buscar habilidade</p>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#888780] w-4 h-4" />
              <input
                type="text"
                placeholder="Ex: Elétrica, Pintura, Hidráulica..."
                className={`${fieldClass} pl-10`}
              />
            </div>
          </div>

          <div>
            <p className={labelClass}>Sugestões</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Limpeza",
                "Hidráulica",
                "Marcenaria",
                "Jardinagem",
                "Alvenaria",
                "Serralheria",
              ].map((skill) => (
                <button
                  key={skill}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#d3d1c7] bg-[#f1efe8] px-3 py-1.5 text-[13px] text-[#444441] transition-colors hover:border-[#b4b2a9] hover:bg-[#e8e6df]"
                >
                  <Plus className="w-4 h-4"/>
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        <AlertDialogFooter className="justify-end gap-2 border-t border-[#e8e7e0] bg-[#f8f7f2] px-5 py-3.5">
          <AlertDialogCancel className="h-9 rounded-[8px] border border-[#c8c7c0] bg-transparent px-5 text-sm text-[#5f5e5a] hover:bg-[#eeece5] hover:text-[#5f5e5a]">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction className="h-9 rounded-[8px] bg-[#185FA5] px-5 text-sm text-white hover:bg-[#0C447C]">
            Salvar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
