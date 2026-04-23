import { Card, CardContent } from "@/components/ui/card";

const sectionClass = "rounded-2xl border border-white/10 bg-[#1f1f1f] p-6";

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="mb-4 text-base font-semibold text-white">{title}</h3>
);

export const Imagem = () => {
  return (
    <Card className={sectionClass}>
      <SectionTitle title="Fotos do servico" />
      <CardContent>
        <button
          type="button"
          className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#2a2a2a] px-4 py-8 text-center transition hover:border-sky-400/60 hover:bg-sky-500/8"
        >
          <span className="text-2xl opacity-65">🖼️</span>
          <p className="mt-2 text-sm text-white/75">
            Arraste fotos aqui ou{" "}
            <span className="font-semibold text-sky-300">
              clique para selecionar
            </span>
          </p>
          <p className="mt-1 text-xs text-white/45">
            JPG, PNG ou WEBP · Max. 5 fotos · 5MB cada
          </p>
        </button>
      </CardContent>
    </Card>
  );
};
