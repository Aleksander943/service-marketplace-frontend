import { api } from "./api";

export const listService = () => { 
    return api.get("/services")
};