import { FormCadastro } from "@/components/Cadastro/FormCadastro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Cadastro() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#171717] p-4">
      <Card className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#1f1f1f] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <CardHeader className="mb-4 border-b border-white/10">
          <CardTitle className="text-center text-xl font-semibold tracking-tight text-white">
            Cadastro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormCadastro />
        </CardContent>
      </Card>
    </div>
  );
}
