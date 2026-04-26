import { Card, CardContent } from "@/components/ui/card"

export const PreVizualicaoo = () =>{
    return (
             <aside className="xl:sticky xl:top-20 xl:self-start">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a8a82]">
                Pre-visualizacao do card
              </p>
              <Card className="overflow-hidden rounded-2xl border border-[#dedad0] bg-[#fdfcf8] py-0 text-[#1a1a18]">
                <div className="flex h-32 items-center justify-center bg-[#faf5d0] text-4xl">⚡</div>
                <CardContent className="space-y-2 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#2350d4]">Eletrica</p>
                  <h3 className="text-base font-semibold text-[#1a1a18] [font-family:Fraunces,serif]">Titulo do seu servico</h3>
                  <p className="text-xs leading-relaxed text-[#8a8a82]">
                    A descricao aparecera aqui conforme voce preenche o formulario ao lado.
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#4a4a44]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2350d4] text-[10px] font-bold text-[#fdfcf8]">
                      JD
                    </span>
                    <span>John Dfghg</span>
                    <span className="rounded-full border border-[#1a6e3c]/20 bg-[#e8f5ee] px-2 py-0.5 text-[10px] font-bold text-[#1a6e3c]">
                      verificado
                    </span>
                  </div>

                  <div className="flex items-end justify-between pt-1">
                    <span className="text-xs text-[#d4a017]">★★★★★ <span className="text-[#8a8a82]">(novo)</span></span>
                    <span className="text-lg font-bold text-[#1a1a18]">R$0 <span className="text-xs font-normal text-[#8a8a82]">/ hora</span></span>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4 rounded-xl border border-[#dedad0] bg-[#fdfcf8] py-0 text-[#1a1a18]">
                <CardContent className="pt-4 text-xs leading-relaxed text-[#8a8a82]">
                  <span className="font-semibold text-[#1a1a18]">Dica</span> Servicos com foto tem
                  <span className="font-semibold text-[#2350d4]"> 3x mais</span> cliques. Adicione ao menos uma imagem para aumentar suas contratacoes.
                </CardContent>
              </Card>
            </aside>
    )
};