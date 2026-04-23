import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const sectionClass = "rounded-2xl border border-white/10 bg-[#1f1f1f] p-6";
const fieldClass =
  "h-10 rounded-xl border-white/12 bg-[#2a2a2a] text-white placeholder:text-white/40 focus-visible:border-sky-400";

function SectionTitle({ title }: { title: string }) {
  return <h2 className="mb-4 text-lg font-semibold text-white">{title}</h2>;
}

export const Precificacao = () => {
  return (
    <Card className={sectionClass}>
      <SectionTitle title="Precificacao" />
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label className="mb-1.5 block text-sm font-medium text-white/80">
              Valor
            </Label>
            <div className="flex h-10 overflow-hidden rounded-xl border border-white/12 bg-[#2a2a2a] focus-within:border-sky-400">
              <span className="inline-flex items-center border-r border-white/12 bg-[#242424] px-3 text-xs font-semibold text-white/45">
                R$
              </span>
              <Input
                type="number"
                placeholder="0,00"
                className="h-10 rounded-none border-0 bg-transparent text-white shadow-none focus-visible:ring-0"
              />
              <select className="min-w-24 border-l border-white/12 bg-[#242424] px-2 text-xs text-white/60 outline-none">
                <option>/ hora</option>
                <option>/ visita</option>
                <option>/ m2</option>
                <option>/ servico</option>
              </select>
            </div>
          </div>

          <div>
            <Label className="mb-1.5 block text-sm font-medium text-white/80">
              Regiao de atendimento
            </Label>
            <select className="h-10 w-full rounded-xl border border-white/12 bg-[#2a2a2a] px-3 text-sm text-white outline-none focus:border-sky-400">
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
            <Label className="mb-1.5 block text-sm font-medium text-white/80">
              Tempo estimado
            </Label>
            <Input
              type="text"
              placeholder="Ex: 2 a 4 horas"
              className={fieldClass}
            />
          </div>
          <div>
            <Label className="mb-1.5 block text-sm font-medium text-white/80">
              Prazo de garantia
            </Label>
            <Input
              type="text"
              placeholder="Ex: 30 dias"
              className={fieldClass}
            />
          </div>
          <div>
            <Label className="mb-1.5 block text-sm font-medium text-white/80">
              Deslocamento incluso?
            </Label>
            <select className="h-10 w-full rounded-xl border border-white/12 bg-[#2a2a2a] px-3 text-sm text-white outline-none focus:border-sky-400">
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
