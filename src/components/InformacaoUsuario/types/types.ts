export type Usuario = {
  id: number;
  name: string;
  role: string;
  bio: string | null;
  regiao: string | null;
  profissao: string | null;
  avatar: string | null;
  skills: Array<{ id: number; name: string }>;
  services: Array<{
    id: number;
    title: string;
    description?: string | null;
    price: string | number;
    category?: string | null;
  }>;
};