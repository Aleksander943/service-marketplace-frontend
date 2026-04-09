import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fieldClass =
  "h-10 w-full rounded-xl border border-zinc-200 bg-white/70 px-3 text-sm outline-none transition focus:border-zinc-900";

export function Cadastro() {
  return (
    <div className="flex items-center justify-center min-h-screen">
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
                className={fieldClass}
              />
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                required
                className={fieldClass}
              />
              <input
                id="password"
                type="password"
                placeholder="Senha"
                required
                className={fieldClass}
              />
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirmação da Senha"
                required
                className={fieldClass}
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <CardAction>
            <Button variant="link" className="text-zinc-600">
              Já tem conta?
            </Button>
          </CardAction>
          <Button
            type="submit"
            className="h-10 w-full rounded-xl bg-zinc-900 hover:bg-zinc-800"
          >
            Cadastrar-se
          </Button>
          <Button
            variant="outline"
            className="h-10 w-full rounded-xl border-zinc-300"
          >
            Cadastrar com Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
