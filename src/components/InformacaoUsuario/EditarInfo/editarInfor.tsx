import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Props {
  isOpen: boolean;
  setIsOpen: () => { void: any };
}

export const ModalEditor = ({ isOpen, setIsOpen }: Props) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="sm:max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Editar Perfil</AlertDialogTitle>

          <AlertDialogDescription>
            Atualize suas informações abaixo.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex w-full flex-col gap-4 py-4">
          <input
            type="text"
            placeholder="Nome"
            className="h-12 w-full rounded-2xl border border-[#d8d4ca] bg-[#f5f2ea] px-4 text-sm text-[#1a1a18] shadow-sm outline-none transition-all duration-200 placeholder:text-[#8a8a82] focus:border-[#1a1a18] focus:bg-white focus:ring-2 focus:ring-[#1a1a18]/10"
          />

          <input
            type="text"
            placeholder="Endereço"
            className="h-12 w-full rounded-2xl border border-[#d8d4ca] bg-[#f5f2ea] px-4 text-sm text-[#1a1a18] shadow-sm outline-none transition-all duration-200 placeholder:text-[#8a8a82] focus:border-[#1a1a18] focus:bg-white focus:ring-2 focus:ring-[#1a1a18]/10"
          />

          <input
            type="text"
            placeholder="Profissão"
            className="h-12 w-full rounded-2xl border border-[#d8d4ca] bg-[#f5f2ea] px-4 text-sm text-[#1a1a18] shadow-sm outline-none transition-all duration-200 placeholder:text-[#8a8a82] focus:border-[#1a1a18] focus:bg-white focus:ring-2 focus:ring-[#1a1a18]/10"
          />

          <textarea
            placeholder="Bio"
            className="min-h-[120px] w-full resize-none rounded-2xl border border-[#d8d4ca] bg-[#f5f2ea] px-4 py-3 text-sm text-[#1a1a18] shadow-sm outline-none transition-all duration-200 placeholder:text-[#8a8a82] focus:border-[#1a1a18] focus:bg-white focus:ring-2 focus:ring-[#1a1a18]/10"
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Salvar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
