import { Card, CardContent } from "@/components/ui/card";
import {
  createServiceCardClass,
  createServiceCardContentClass,
  createServiceSectionTitleClass,
} from "../cardStyles";

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className={createServiceSectionTitleClass}>{title}</h3>
);

export const Imagem = () => {
  return (
    <Card className={createServiceCardClass}>
      <CardContent className={createServiceCardContentClass}>
        <SectionTitle title="Fotos do servico" />
        <button
          type="button"
          className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#dedad0] bg-[#efece3] px-4 py-8 text-center transition hover:border-[#2350d4]/60 hover:bg-[#eef1fc]"
        >
          <span className="text-2xl opacity-65">🖼️</span>
          <p className="mt-2 text-sm text-[#4a4a44]">
            Arraste fotos aqui ou{" "}
            <span className="font-semibold text-[#2350d4]">
              clique para selecionar
            </span>
          </p>
          <p className="mt-1 text-xs text-[#8a8a82]">
            JPG, PNG ou WEBP · Max. 5 fotos · 5MB cada
          </p>
        </button>
      </CardContent>
    </Card>
  );
};
