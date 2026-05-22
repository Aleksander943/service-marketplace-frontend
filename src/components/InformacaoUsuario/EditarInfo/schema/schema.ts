import z from "zod";

export const atualizarInfor = z.object({
  regiao: z
      .string()
      .min(5, "O título deve ter no mínimo 5 caracteres")
      .max(60, "O título deve ter no máximo 60 caracteres"),
  profissao: z
      .string()
      .min(5, "O título deve ter no mínimo 5 caracteres")
      .max(60, "O título deve ter no máximo 60 caracteres"),
  bio: z
      .string()
      .min(5, "O título deve ter no mínimo 5 caracteres")
      .max(60, "O título deve ter no máximo 60 caracteres"),
});