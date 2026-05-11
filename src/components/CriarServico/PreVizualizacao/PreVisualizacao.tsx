import { Card, CardContent } from "@/components/ui/card";
import { createServiceCardClass } from "../cardStyles";

interface Props {
  campos: [
    titulo?: string,
    desricao?: string,
    valor?: string,
    categoria?: string,
  ];
}
export const PreVisualizacao = ({ campos }: Props) => {
  const [titulo, descricao, valor, categoria] = campos;

  console.log(campos);
  return (
    <div className="xl:sticky xl:top-20 xl:self-start py-20">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a8a82]">
        Pré-visualização do card
      </p>
      <Card className={`${createServiceCardClass} overflow-hidden pb-5`}>
        <div className="flex h-32 items-center justify-center bg-[#faf5d0] text-4xl">
          ⚡
        </div>
        <CardContent className="space-y-2 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#2350d4]">
            {categoria || "Categoria"}
          </p>
          <h3 className="text-base font-semibold text-[#1a1a18] [font-family:Fraunces,serif]">
            {titulo || "Título do seu serviço"}
          </h3>
          <p className="text-xs leading-relaxed text-[#8a8a82]">
            {descricao ||
              "A descrição aparecerá aqui conforme você preenche o formulário ao lado."}
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
            <span className="text-xs text-[#d4a017]">
              ★★★★★ <span className="text-[#8a8a82]">(novo)</span>
            </span>
            <span className="text-lg font-bold text-[#1a1a18]">
              {valor || "R$40"}
              <span className="text-xs font-normal text-[#8a8a82]">
                / serviço
              </span>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
