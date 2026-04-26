import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Informacao_basica } from "./informacaoBasica/Informacao_Basica";
import { Precificacao } from "./Precificacao/precificacao";
import { Disponibilidade } from "./disponibilidade/Disponibilidade";
import { PreVizualicaoo } from "./PreVizualizacao/PreVizualizacao";
import { Imagem } from "./imagens/imagens";
import { Estagios } from "./estagios/Estagios";
import { createServiceCardClass } from "./cardStyles";

export function CreateServiceView() {
  return (
    <div className="mx-2 space-y-5 pb-10">
      <Card className={`${createServiceCardClass} py-4 md:py-6`}>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#8a8a82]">
            <span>Minha conta</span>
            <span>›</span>
            <span>Meus servicos</span>
            <span>›</span>
            <span className="text-[#1a1a18]">Criar novo servico</span>
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#1a1a18] [font-family:Fraunces,serif]">
              Criar novo servico
            </h1>
            <p className="mt-1.5 text-sm leading-relaxed text-[#8a8a82]">
              Preencha as informacoes abaixo para publicar seu servico na
              plataforma.
            </p>
          </div>

          <Estagios />

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-5">
              <Informacao_basica />

              <Precificacao />

              <Disponibilidade />

              <Imagem />

              <div className="flex flex-col gap-3 border-t border-[#dedad0] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-xl border-[#dedad0] bg-transparent text-[#4a4a44] hover:bg-[#efece3] hover:text-[#1a1a18]"
                  >
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-xl border-[#dedad0] bg-[#efece3] text-[#4a4a44] hover:bg-[#e8e4d8] hover:text-[#1a1a18]"
                  >
                    Salvar rascunho
                  </Button>
                </div>
                <Button
                  type="button"
                  className="rounded-xl bg-[#1a1a18] font-semibold text-[#fdfcf8] hover:-translate-y-0.5 hover:bg-[#333333]"
                >
                  Continuar para revisao
                </Button>
              </div>
            </div>

            <PreVizualicaoo />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
