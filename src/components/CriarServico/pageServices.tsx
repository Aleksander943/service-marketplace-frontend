import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Informacao_basica } from "./informacaoBasica/Informacao_Basica";
import { Precificacao } from "./Precificacao/precificacao";
import { Disponibilidade } from "./disponibilidade/Disponibilidade";
import { PreVizualicaoo } from "./PreVizualizacao/PreVizualizacao";
import { Imagem } from "./imagens/imagens";
import { Estagios } from "./estagios/Estagios";

export function CreateServiceView() {
  return (
    <div className="mx-2 space-y-5 pb-10">
      <Card className="rounded-2xl border border-white/10 bg-[#1f1f1f] py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:py-6">
        <CardContent className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/45">
            <span>Minha conta</span>
            <span>›</span>
            <span>Meus servicos</span>
            <span>›</span>
            <span className="text-white/75">Criar novo servico</span>
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Criar novo servico
            </h1>
            <p className="mt-1.5 text-sm leading-relaxed text-white/65">
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

              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-xl border-white/12 bg-transparent text-white/75 hover:bg-white/8 hover:text-white"
                  >
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-xl border-white/12 bg-[#2a2a2a] text-white/75 hover:bg-[#313131] hover:text-white"
                  >
                    Salvar rascunho
                  </Button>
                </div>
                <Button
                  type="button"
                  className="rounded-xl bg-sky-500 font-semibold text-zinc-950 hover:-translate-y-0.5 hover:bg-sky-400"
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
