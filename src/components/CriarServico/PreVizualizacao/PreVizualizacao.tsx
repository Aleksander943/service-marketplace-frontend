import { Card, CardContent } from "@/components/ui/card"
import { createServiceCardClass } from "../cardStyles"

export const PreVizualicaoo = () =>{
    return (
             <aside className="xl:sticky xl:top-20 xl:self-start">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a8a82]">
                Pre-visualizacao do card
              </p>
              <Card className={`${createServiceCardClass} overflow-hidden`}>
                <div className="flex h-32 items-center justify-center bg-[#faf5d0] text-4xl">⚡</div>
                <CardContent className="space-y-2 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#2350d4]">Categoria</p>
                  <h3 className="text-base font-semibold text-[#1a1a18] [font-family:Fraunces,serif]">Titulo do seu servico</h3>
                  <p className="text-xs leading-relaxed text-[#8a8a82]">
                    A descricao aparecera aqui conforme voce preenche o formulario ao lado.
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#4a4a44]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2350d4] text-[10px] font-bold text-[#fdfcf8]">
                      PR
                    </span>
                    <span>Prestador</span>
                    <span className="rounded-full border border-[#1a6e3c]/20 bg-[#e8f5ee] px-2 py-0.5 text-[10px] font-bold text-[#1a6e3c]">
                      verificado
                    </span>
                  </div>

                  <div className="flex items-end justify-between pt-1">
                    <span className="text-xs text-[#d4a017]">★★★★★ <span className="text-[#8a8a82]">(novo)</span></span>
                    <span className="text-lg font-bold text-[#1a1a18]">R$0,00 <span className="text-xs font-normal text-[#8a8a82]">/ servico</span></span>
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-2 rounded-xl border border-[#dedad0] bg-[#f8f6ef] p-2.5">
                    <div className="rounded-lg border border-[#dedad0] bg-[#fdfcf8] px-2 py-1.5">
                      <p className="text-[10px] uppercase tracking-[0.1em] text-[#8a8a82]">Criado em</p>
                      <p className="mt-0.5 text-xs font-semibold text-[#1a1a18]">automatico</p>
                    </div>
                    <div className="rounded-lg border border-[#dedad0] bg-[#fdfcf8] px-2 py-1.5">
                      <p className="text-[10px] uppercase tracking-[0.1em] text-[#8a8a82]">Atualizado</p>
                      <p className="mt-0.5 text-xs font-semibold text-[#1a1a18]">automatico</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${createServiceCardClass} mt-4 rounded-xl`}>
                <CardContent className="pt-4 text-xs leading-relaxed text-[#8a8a82]">
                  <span className="font-semibold text-[#1a1a18]">Dica</span> Servicos com foto tem
                  <span className="font-semibold text-[#2350d4]"> 3x mais</span> cliques. Adicione ao menos uma imagem para aumentar suas contratacoes.
                </CardContent>
              </Card>
            </aside>
    )
};