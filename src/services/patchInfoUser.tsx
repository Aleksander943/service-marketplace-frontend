import { api } from "./api";

interface payload {
  regiao: string 
  profissao: string
  bio: string
}

export const PatchInfoUser = (data: payload) => {
  return api.patch('/perfil', data)
}