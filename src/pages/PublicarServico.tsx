import { Estagios } from "@/components/CriarServico/estagios/Estagios";
import { createServiceCardClass } from "@/components/CriarServico/cardStyles";
import { NavBar } from "@/components/NavBar/navBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router";

export default function PublicarServico() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#ececea] pb-6">
      <NavBar />

      <div className="mx-2 space-y-5 pb-10">
        <Card className={`${createServiceCardClass} py-4 md:py-6`}>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#8a8a82]">
              <span>Minha conta</span>
              <span>›</span>
              <span>Meus servicos</span>
              <span>›</span>
              <span className="text-[#1a1a18]">Publicar servico</span>
            </div>

            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#1a1a18] [font-family:Fraunces,serif]">
                Servico publicado
              </h1>
              <p className="mt-1.5 text-sm leading-relaxed text-[#8a8a82]">
                Seu servico ja esta visivel para clientes na plataforma.
              </p>
            </div>

            <Estagios />

            <div className="flex items-start gap-3 rounded-xl border border-[#9fd8b7] bg-[#eaf7ef] p-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1a6e3c] text-white">
                ✓
              </div>
              <div>
                <div className="text-sm font-semibold text-[#13552f]">Tudo certo, seu servico esta no ar.</div>
                <div className="mt-1 text-xs text-[#1a6e3c]">Publicado agora · Instalador de piso porcelanato e vinilico · Reformas</div>
              </div>
            </div>

            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-4">
                <section className="rounded-xl border border-[#dedad0] bg-white p-5">
                  <div className="mb-3 border-b border-[#efeadf] pb-3 text-sm font-semibold text-[#1a1a18]">Desempenho do anuncio</div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg bg-[#f8f6f1] p-3.5">
                      <div className="text-[11px] uppercase tracking-wider text-[#8a8a82]">Visualizacoes</div>
                      <div className="mt-1 text-2xl font-semibold text-[#2350d4]">0</div>
                    </div>
                    <div className="rounded-lg bg-[#f8f6f1] p-3.5">
                      <div className="text-[11px] uppercase tracking-wider text-[#8a8a82]">Contatos recebidos</div>
                      <div className="mt-1 text-2xl font-semibold text-[#1a1a18]">0</div>
                    </div>
                    <div className="rounded-lg bg-[#f8f6f1] p-3.5">
                      <div className="text-[11px] uppercase tracking-wider text-[#8a8a82]">Receita gerada</div>
                      <div className="mt-1 text-2xl font-semibold text-[#1a6e3c]">R$ 0</div>
                    </div>
                  </div>
                </section>

                <section className="rounded-xl border border-[#dedad0] bg-white p-5">
                  <div className="mb-3 border-b border-[#efeadf] pb-3 text-sm font-semibold text-[#1a1a18]">Compartilhar servico</div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <div className="flex-1 rounded-lg border border-[#dedad0] bg-[#f8f6f1] px-3 py-2 text-xs text-[#6a6a62]">
                      servicosja.com.br/s/aleksander-piso-porcelanato
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-xl border-[#dedad0] bg-transparent text-[#4a4a44] hover:bg-[#efece3] hover:text-[#1a1a18]"
                    >
                      Copiar link
                    </Button>
                    <Button type="button" className="rounded-xl bg-[#1a6e3c] text-[#fdfcf8] hover:bg-[#13552f]">
                      WhatsApp
                    </Button>
                  </div>
                </section>

                <section className="rounded-xl border border-[#dedad0] bg-white p-5">
                  <div className="mb-3 border-b border-[#efeadf] pb-3 text-sm font-semibold text-[#1a1a18]">Proximos passos</div>
                  <div className="space-y-2.5">
                    <div className="rounded-lg border border-[#efeadf] bg-[#fdfcf8] p-4">
                      <div className="text-sm font-semibold text-[#1a1a18]">1. Adicione fotos do seu trabalho</div>
                      <div className="mt-1 text-xs leading-relaxed text-[#6a6a62]">Servicos com fotos recebem mais contatos. Va em Meus servicos para adicionar imagens.</div>
                    </div>
                    <div className="rounded-lg border border-[#efeadf] bg-[#fdfcf8] p-4">
                      <div className="text-sm font-semibold text-[#1a1a18]">2. Responda rapido aos clientes</div>
                      <div className="mt-1 text-xs leading-relaxed text-[#6a6a62]">Perfis com resposta rapida tendem a aparecer melhor posicionados nos resultados.</div>
                    </div>
                    <div className="rounded-lg border border-[#efeadf] bg-[#fdfcf8] p-4">
                      <div className="text-sm font-semibold text-[#1a1a18]">3. Peca avaliacoes apos cada servico</div>
                      <div className="mt-1 text-xs leading-relaxed text-[#6a6a62]">Boas avaliacoes aumentam sua credibilidade e melhoram a conversao.</div>
                    </div>
                  </div>
                </section>
              </div>

              <aside className="space-y-3">
                <div className="rounded-xl border border-[#dedad0] bg-white overflow-hidden">
                  <div className="relative flex h-[92px] items-center justify-center bg-[#efece3] text-3xl">
                    ⚡
                    <span className="absolute right-2 top-2 rounded-full bg-[#1a6e3c] px-2 py-1 text-[10px] font-semibold text-white">
                      ao vivo
                    </span>
                  </div>
                  <div className="space-y-2 p-3.5">
                    <div className="text-[10px] uppercase tracking-wider text-[#8a8a82]">Reformas</div>
                    <div className="text-sm font-semibold text-[#1a1a18]">Instalador de piso porcelanato e vinilico</div>
                    <div className="text-xs leading-relaxed text-[#6a6a62]">Servico profissional com ferramentas proprias e acabamento impecavel...</div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="text-[#d08d14]">★★★★★ <span className="text-[#8a8a82]">(novo)</span></div>
                      <div className="font-semibold text-[#1a1a18]">R$120,00</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#f2cd69] bg-[#fff6d9] p-3 text-xs leading-relaxed text-[#875b09]">
                  <strong className="block text-[#6f4a09]">Dica</strong>
                  Adicione uma foto para aumentar suas chances de contato.
                </div>
              </aside>
            </div>

            <div className="flex flex-col gap-3 border-t border-[#dedad0] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="button"
                variant="outline"
                className="rounded-xl border-[#dedad0] bg-transparent text-[#4a4a44] hover:bg-[#efece3] hover:text-[#1a1a18]"
                onClick={() => navigate("/dashboard")}
              >
                Ver meus servicos
              </Button>
              <Button
                type="button"
                className="rounded-xl bg-[#1a1a18] font-semibold text-[#fdfcf8] hover:-translate-y-0.5 hover:bg-[#333333]"
                onClick={() => navigate("/servicos/criar")}
              >
                Criar outro servico
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

