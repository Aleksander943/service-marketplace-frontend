import { api } from "./api";

export const PatchInfoUser = () =>{
  return api.post('/perfil')
};