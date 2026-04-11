import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const fieldClass =
  "h-10 w-full rounded-xl border border-zinc-200 bg-white/70 px-3 text-sm outline-none transition focus:border-zinc-900";

export function Login() {
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <Card className="w-full max-w-sm rounded-2xl border-zinc-200 bg-gradient-to-b from-white to-zinc-50 shadow-xl">
        <CardHeader className="mb-4 border-b border-zinc-200">
          <CardTitle className="text-center text-xl font-semibold tracking-tight">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-3">
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
              <Button
                type="submit"
                className="h-10 w-full rounded-xl bg-zinc-900 hover:bg-zinc-800"
              >
                Fazer login
              </Button>
            </div>
          </form>
        </CardContent>
        <Button variant="link" className="text-zinc-600">
          Ainda não tem conta ?
        </Button>
      </Card>
    </div>
  );
}
