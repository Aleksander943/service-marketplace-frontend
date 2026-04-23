import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const sectionClass = "rounded-2xl border border-[#dedad0] bg-[#fdfcf8] p-6";
const fieldClass =
  "h-10 rounded-xl border-[#dedad0] bg-[#efece3] text-[#1a1a18] placeholder:text-[#8a8a82] focus-visible:border-[#1a1a18]";

function SectionTitle({ title }: { title: string }) {
  return <h2 className="mb-4 text-lg font-semibold text-[#1a1a18] [font-family:Fraunces,serif]">{title}</h2>;
}

export const Precificacao = () => {
  return (
    <Card className={sectionClass}>
      <SectionTitle title="Precificacao" />
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">
              Valor
            </Label>
            <div className="flex h-10 overflow-hidden rounded-xl border border-[#dedad0] bg-[#efece3] focus-within:border-[#1a1a18]">
              <span className="inline-flex items-center border-r border-[#dedad0] bg-[#f5f2eb] px-3 text-xs font-semibold text-[#8a8a82]">
                R$
              </span>
              <Input
                type="number"
                placeholder="0,00"
                className="h-10 rounded-none border-0 bg-transparent text-[#1a1a18] shadow-none focus-visible:ring-0"
              />
              <select className="min-w-24 border-l border-[#dedad0] bg-[#f5f2eb] px-2 text-xs text-[#4a4a44] outline-none">
                <option>/ hora</option>
                <option>/ visita</option>
                <option>/ m2</option>
                <option>/ servico</option>
              </select>
            </div>
          </div>

          <div>
            <Label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">
              Regiao de atendimento
            </Label>
            <select className="h-10 w-full rounded-xl border border-[#dedad0] bg-[#efece3] px-3 text-sm text-[#1a1a18] outline-none focus:border-[#1a1a18]">
              <option>Selecione a regiao</option>
              <option>Zona Norte</option>
              <option>Zona Sul</option>
              <option>Zona Leste</option>
              <option>Zona Oeste</option>
              <option>Centro</option>
            </select>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <Label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">
              Tempo estimado
            </Label>
            <Input
              type="text"
              placeholder="Ex: 2 a 4 horas"
              className={fieldClass}
            />
          </div>
          <div>
            <Label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">
              Prazo de garantia
            </Label>
            <Input
              type="text"
              placeholder="Ex: 30 dias"
              className={fieldClass}
            />
          </div>
          <div>
            <Label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">
              Deslocamento incluso?
            </Label>
            <select className="h-10 w-full rounded-xl border border-[#dedad0] bg-[#efece3] px-3 text-sm text-[#1a1a18] outline-none focus:border-[#1a1a18]">
              <option>Sim, gratuito</option>
              <option>Cobrado a parte</option>
              <option>Nao atendo presencial</option>
            </select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
