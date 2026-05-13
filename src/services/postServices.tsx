import { api } from "./api";

export const CreateService = (data: { title: string, description: string,  price: number, category: string }) => {
    return api.post("/servicos", data);
};