import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardCadastro() {
  return (
 
      

      <Card className="w-full max-w-sm">
        <CardHeader className="border-b mb-4">
          <CardTitle>Cadastro</CardTitle>
        </CardHeader>

         <div className="flex justify-between border-b mb-4 mx-25 p-4 rounded-lg bg-gray-100">
        <button className="cursor-pointer">Cliente</button>
        <button className="cursor-pointer">Prestador</button>
      </div> 

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <input
                id="name"
                type="text"
                placeholder="Nome"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />

              <input
                id="email"
                type="email"
                placeholder="E-mail"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />

              <input
                id="password"
                type="password"
                placeholder="Senha"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
              <input
                id="password"
                type="password"
                placeholder="Confirmação da Senha"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />

              <select
                id="role"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option value="">Selecione tipo de serviço</option>
                <option value="user">Faxina</option>
                <option value="admin">
                  Edição de <video src=""></video>
                </option>
              </select>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 justify-center">
          <CardAction >
            <Button variant="link">Já tem conta?</Button>
          </CardAction>
          <Button type="submit" className="w-full">
            Cadastrar-se
          </Button>
          <Button variant="outline" className="w-full">
            Cadastrar com Google
          </Button>
        </CardFooter>
      </Card>
    
  );
}
