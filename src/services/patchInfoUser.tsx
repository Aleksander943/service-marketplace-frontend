import { api } from "./api";

export const PatchInfoUser = () =>{
  return api.patch('/perfil')
};