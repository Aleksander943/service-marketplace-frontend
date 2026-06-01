import { api } from "./api";

export const detalheServices = (id: string) => {
    return api.get(`/services/${id}`);
};