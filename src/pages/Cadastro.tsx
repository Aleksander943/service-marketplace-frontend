import { Button } from "@/components/ui/button";
import {
Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const fieldClass =
  "h-10 w-full rounded-xl border border-zinc-200 bg-white/70 px-3 text-sm outline-none transition focus:border-zinc-900";

export function Cadastro() {
  const [verificarTipoUser, setVerificarTipoUser] = useState<string>("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <Card className="w-full max-w-sm rounded-2xl border-zinc-200 bg-gradient-to-b from-white to-zinc-50 shadow-xl">
        <CardHeader className="mb-4 border-b border-zinc-200">
          <CardTitle className="text-center text-xl font-semibold tracking-tight">
            Cadastro
          </CardTitle>
        </CardHeader>

        <div className="mx-6 mb-5 grid grid-cols-2 rounded-xl bg-zinc-100 p-1 text-sm">
          <button className="rounded-lg bg-white py-2 shadow-sm transition">
            Cliente
          </button>
          <button className="rounded-lg py-2 text-zinc-500 transition hover:text-zinc-800">
            Prestador
          </button>
        </div>

        <CardContent>
          <form>
            <div className="flex flex-col gap-3">
              <input
                id="name"
                type="text"
                placeholder="Nome"
                required
                value = {form.nome}
                className={fieldClass}
              />
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                required
                value={form.email}
                className={fieldClass}
              />
              <input
                id="password"
                type="password"
                placeholder="Senha"
                required
                value={form.password}
                className={fieldClass}
              />
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirmação da Senha"
                required
                value={form.confirmPassword}
                className={fieldClass}
              />
              <Button
                type="submit"
                className="h-10 w-full rounded-xl bg-zinc-900 hover:bg-zinc-800"
              >
                Cadastrar-se
              </Button>
            </div>
          </form>
        </CardContent>
        <Button variant="link" className="text-zinc-600">
          Já tem conta?
        </Button>
      </Card>
    </div>
  );
}
