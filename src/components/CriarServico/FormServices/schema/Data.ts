import { z } from "zod";

export const CadastroServicesSchema = z.object({
  titulo: z
    .string()
    .min(5, "O título deve ter no mínimo 5 caracteres")
    .max(60, "O título deve ter no máximo 60 caracteres"),
  descricao: z
    .string()
    .min(5, "A descrição deve ter no mínimo 5 caracteres")
    .max(400, "A descrição deve ter no máximo 400 caracteres"),
  valor: z.coerce
    .number("Informe um valor numérico")
    .min(1, "O valor mínimo é R$ 1,00"),
  categoria: z.string().min(1, "Selecione uma categoria válida"),
});
