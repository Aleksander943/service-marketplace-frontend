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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { atualizarInfor } from "../schema/schema";
import type z from "zod";
import { Button } from "@/components/ui/button";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onSuccess?: () => void;
}

type EditarInformacao = z.infer<typeof atualizarInfor>

export const ModalEditor = ({ isOpen, setIsOpen, onSuccess }: Props) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(atualizarInfor)
  });

  const fieldClass =
    "h-12 w-full rounded-xl border border-[#d7d2c8] bg-[#f7f5f0] px-4 text-sm text-[#1a1a18] outline-none transition-all duration-200 placeholder:text-[#8a8a82] focus:border-[#1a1a18] focus:bg-white focus:ring-1 focus:ring-[#1a1a18]/10";


  const EditarPerfil = async (data: EditarInformacao) => {
  const payload = {
  regiao: data.regiao,
  profissao: data.profissao,
  bio: data.bio,
}
    try {
      await PatchInfoUser(payload);
      onSuccess?.();
      
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
            className={`${fieldClass} min-h-28 resize-none py-3`}
          />
          <AlertDialogFooter className="border-t border-[#eee7dc] px-6 py-3.5 sm:gap-3">
            <AlertDialogCancel className="h-10 rounded-xl border-[#d7d2c8] bg-white text-[#1a1a18] hover:bg-[#f7f5f0] hover:text-[#1a1a18] sm:min-w-28">
              Cancelar
            </AlertDialogCancel>
            <Button
              type="submit"
              className="h-10 rounded-xl bg-[#1a1a18] text-[#fdfcf8] hover:bg-[#2f2f2d] sm:min-w-28"
            >
              Salvar
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
