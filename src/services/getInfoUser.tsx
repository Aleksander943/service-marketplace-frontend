import { api } from "./api";

export const GetInfoUser = () => {
  return api.get("/perfil")
};