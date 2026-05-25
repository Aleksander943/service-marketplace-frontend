import { api } from "./api";

export interface payload {
  regiao?: string;
  profissao?: string;
  bio?: string;
  skills?: string[];
}

export const PatchInfoUser = (data: payload) => {
  return api.patch("/perfil", data);
};