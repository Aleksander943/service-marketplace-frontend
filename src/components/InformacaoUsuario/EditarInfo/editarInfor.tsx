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
import { PatchInfoUser } from "@/services/patchInfoUser";
import { useForm } from "react-hook-form";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface payload {
  regiao: string;
  profissao: string;
  bio: string;
}
export const ModalEditor = ({ isOpen, setIsOpen }: Props) => {
  const { register, handleSubmit } = useForm<payload>();

  const fieldClass =
    "h-12 w-full rounded-xl border border-[#d7d2c8] bg-[#f7f5f0] px-4 text-sm text-[#1a1a18] outline-none transition-all duration-200 placeholder:text-[#8a8a82] focus:border-[#1a1a18] focus:bg-white focus:ring-1 focus:ring-[#1a1a18]/10";


  const EditarPerfil = async (data: payload) => {
    try {
      await PatchInfoUser(data);
      console.log("tudo certo");
    } catch (error) {
      console.log("Ocorreu um erro durante a requisição", error);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="border border-[#e3ddd2] bg-[#fcfbf7] p-0 shadow-[0_16px_40px_rgba(26,26,24,0.10)] sm:max-w-2xl">
        <AlertDialogHeader className="items-start gap-1.5 px-6 pt-5 text-left">
          <AlertDialogTitle className="font-heading text-xl font-semibold tracking-tight text-[#1a1a18]">
            Editar Perfil
          </AlertDialogTitle>

          <AlertDialogDescription className="max-w-xl text-sm leading-6 text-[#7e7e74]">
            Ajuste seus dados para manter seu perfil alinhado com o restante da
            plataforma.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form
          onSubmit={handleSubmit(EditarPerfil)}
          className="grid gap-3 px-6 py-5"
        >
          <input
            type="text"
            placeholder="Endereço"
            {...register("regiao")}
            className={fieldClass}
          />

          <input
            type="text"
            placeholder="Profissão"
            {...register("profissao")}
            className={fieldClass}
          />

          <textarea
            placeholder="Bio"
            {...register("bio")}
            className={`${fieldClass} min-h-[112px] resize-none py-3`}
          />
          <AlertDialogFooter className="border-t border-[#eee7dc] px-6 py-3.5 sm:gap-3">
            <AlertDialogCancel className="h-10 rounded-xl border-[#d7d2c8] bg-white text-[#1a1a18] hover:bg-[#f7f5f0] hover:text-[#1a1a18] sm:min-w-28">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              type="submit"
              className="h-10 rounded-xl bg-[#1a1a18] text-[#fdfcf8] hover:bg-[#2f2f2d] sm:min-w-28"
            >
              Salvar
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
