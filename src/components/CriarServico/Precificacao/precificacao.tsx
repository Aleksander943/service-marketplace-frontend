import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createServiceCardClass,
  createServiceCardContentClass,
  createServiceSectionTitleClass,
} from "../cardStyles";

function SectionTitle({ title }: { title: string }) {
  return <h2 className={createServiceSectionTitleClass}>{title}</h2>;
}

export const Precificacao = () => {
  return (
    <Card className={createServiceCardClass}>
      <CardContent className={createServiceCardContentClass}>
        <SectionTitle title="Precificacao" />
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
              <span className="inline-flex items-center border-l border-[#dedad0] bg-[#f5f2eb] px-3 text-xs font-semibold text-[#8a8a82]">
                BRL
              </span>
            </div>
          </div>

          <div>
            <Label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">
              Categoria
            </Label>
            <select
              className="h-10 w-full rounded-xl border border-[#dedad0] bg-[#efece3] px-3 text-sm text-[#1a1a18] outline-none focus:border-[#1a1a18]"
            >
              <option>Selecione a categoria</option>
              <option>Eletrica</option>
              <option>Hidraulica</option>
              <option>Pintura</option>
              <option>Limpeza</option>
              <option>Montagem</option>
            </select>
          </div>
        </div>
        <p className="text-xs text-[#8a8a82]">
          O campo providerId e preenchido automaticamente com o usuario autenticado.
        </p>
      </CardContent>
    </Card>
  );
};
