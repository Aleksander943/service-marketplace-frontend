import { Card, CardContent } from "../../ui/card"
import {
  createServiceCardClass,
  createServiceCardContentClass,
} from "../cardStyles"

export const Informacao_basica = () => {
  return (  
        <Card className={createServiceCardClass}>
          <CardContent className={createServiceCardContentClass}>
            <div>
              <div className="mb-1.5 flex items-end justify-between">
                <label className="text-sm font-medium text-[#4a4a44]">Titulo do servico</label>
                <span className="text-[11px] text-[#8a8a82]">0 / 60</span>
              </div>
              <input
                type="text"
                placeholder="Ex: Instalador de piso porcelanato e vinilico"
                className="min-h-11 w-full rounded-xl border border-[#dedad0] bg-[#efece3] px-3 py-2.5 text-sm text-[#1a1a18] outline-none transition placeholder:text-[#8a8a82] focus:border-[#1a1a18]"
              />
              <p className="mt-1.5 text-xs text-[#8a8a82]">
                Um titulo claro aumenta suas chances de ser encontrado.
              </p>
            </div>

            <div>
              <div className="mb-1.5 flex items-end justify-between">
                <label className="text-sm font-medium text-[#4a4a44]">Descricao detalhada</label>
                <span className="text-[11px] text-[#8a8a82]">0 / 400</span>
              </div>
              <textarea
                placeholder="Descreva o que voce oferece, diferenciais, materiais incluidos e tempo de execucao."
                className="min-h-28 w-full rounded-xl border border-[#dedad0] bg-[#efece3] px-3 py-2.5 text-sm text-[#1a1a18] outline-none transition placeholder:text-[#8a8a82] focus:border-[#1a1a18]"
              />
            </div>
          </CardContent>
        </Card>
  )
}