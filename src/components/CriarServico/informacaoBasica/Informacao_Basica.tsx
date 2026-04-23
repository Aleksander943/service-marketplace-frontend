import { Card, CardContent } from "../../ui/card"

export const Informacao_basica = () => {
  return (  
        <Card className="rounded-2xl border border-white/10 bg-[#1f1f1f] py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:py-6 ">
          <CardContent className="space-y-4">
            <div>
              <div className="mb-1.5 flex items-end justify-between">
                <label className="text-sm font-medium text-white/80">Titulo do servico</label>
                <span className="text-[11px] text-white/45">0 / 60</span>
              </div>
              <input
                type="text"
                placeholder="Ex: Instalador de piso porcelanato e vinilico"
                className="min-h-11 w-full rounded-xl border border-white/12 bg-[#2a2a2a] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-sky-400"
              />
              <p className="mt-1.5 text-xs text-white/45">
                Um titulo claro aumenta suas chances de ser encontrado.
              </p>
            </div>

            <div>
              <div className="mb-1.5 flex items-end justify-between">
                <label className="text-sm font-medium text-white/80">Descricao detalhada</label>
                <span className="text-[11px] text-white/45">0 / 400</span>
              </div>
              <textarea
                placeholder="Descreva o que voce oferece, diferenciais, materiais incluidos e tempo de execucao."
                className="min-h-28 w-full rounded-xl border border-white/12 bg-[#2a2a2a] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-sky-400"
              />
            </div>
          </CardContent>
        </Card>
  )
}