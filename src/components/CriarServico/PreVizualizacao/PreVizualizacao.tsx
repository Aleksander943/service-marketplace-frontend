import { Card, CardContent } from "@/components/ui/card"

export const PreVizualicaoo = () =>{
    return (
             <aside className="xl:sticky xl:top-20 xl:self-start">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                Pre-visualizacao do card
              </p>
              <Card className="overflow-hidden rounded-2xl border border-white/10 bg-[#232323] py-0 text-white">
                <div className="flex h-32 items-center justify-center bg-[#faf5d0] text-4xl">⚡</div>
                <CardContent className="space-y-2 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-sky-300">Eletrica</p>
                  <h3 className="text-base font-semibold text-white">Titulo do seu servico</h3>
                  <p className="text-xs leading-relaxed text-white/65">
                    A descricao aparecera aqui conforme voce preenche o formulario ao lado.
                  </p>

                  <div className="flex items-center gap-2 text-xs text-white/75">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/90 text-[10px] font-bold text-white">
                      JD
                    </span>
                    <span>John Dfghg</span>
                    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/12 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      verificado
                    </span>
                  </div>

                  <div className="flex items-end justify-between pt-1">
                    <span className="text-xs text-yellow-300">★★★★★ <span className="text-white/45">(novo)</span></span>
                    <span className="text-lg font-bold text-white">R$0 <span className="text-xs font-normal text-white/45">/ hora</span></span>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4 rounded-xl border border-white/10 bg-[#232323] py-0 text-white">
                <CardContent className="pt-4 text-xs leading-relaxed text-white/65">
                  <span className="font-semibold text-white">Dica:</span> Servicos com foto tem
                  <span className="font-semibold text-sky-300"> 3x mais</span> cliques. Adicione ao menos uma imagem para aumentar suas contratacoes.
                </CardContent>
              </Card>
            </aside>
    )
};