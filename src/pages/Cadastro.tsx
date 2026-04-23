import { FormCadastro } from "@/components/Cadastro/FormCadastro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Cadastro() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ececea] p-4">
      <Card className="w-full max-w-sm rounded-2xl border border-[#cecec6] bg-[#f4f4f1] text-[#1a1a18] shadow-[0_10px_30px_rgba(26,26,24,0.08)]">
        <CardHeader className="mb-4 border-b border-[#cecec6]">
          <CardTitle className="text-center text-2xl font-semibold tracking-tight text-[#1a1a18]">
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
