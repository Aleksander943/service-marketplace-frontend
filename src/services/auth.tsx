import { api } from "./api";

export const loginRequest = (data: { email: string; password: string }) => {
    return api.post("login", data)
};
