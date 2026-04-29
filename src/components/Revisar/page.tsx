import { Estagios } from "@/components/CriarServico/estagios/Estagios";
import { Card, CardContent } from "@/components/ui/card";
import { createServiceCardClass } from "@/components/CriarServico/cardStyles";
import { useNavigate } from "react-router";
import Field from "./Field";
import Badge from "./Badge";
import ReviewCard from "./ReviewCard";
import WarningMessage from "./WarningMessage";
import Checklist from "./Checklist";
import PageHeader from "./PageHeader";
import { PreVizualicaoo } from "@/components/CriarServico/PreVizualizacao/PreVizualizacao";
import FooterButtons from "./FooterButtons";

export default function RevisarServico() {
  const navigator = useNavigate();

  const checklistItems = [
    { label: "Titulo preenchido", ok: true },
    { label: "Descricao adicionada", ok: true },
    { label: "Preco definido", ok: true },
    { label: "Categoria selecionada", ok: true },
    { label: "Foto do servico", ok: false },
  ];

  return (
    <div className="min-h-screen bg-[#ececea] pb-6">
      <div className="mx-2 space-y-5 pb-10">
        <Card className={`${createServiceCardClass} py-4 md:py-6`}>
          <CardContent className="space-y-6">
            <PageHeader
              title="Revisar servico"
              description="Confira os dados antes de enviar seu servico para publicacao."
            />

            <Estagios />

            <WarningMessage message="Revise as informacoes com atencao. Depois da publicacao, alguns campos podem exigir moderacao para edicao." />

            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-4">
                <ReviewCard title="Informacoes do servico" onEdit={() => navigator("/servicos/criar")}>
                  <Field label="Titulo">Instalador de piso porcelanato e vinilico</Field>
                  <Field label="Descricao">
                    <span className="text-[#4a4a44]">
                      Servico profissional de instalacao de piso porcelanato e vinilico. Atendo residencias e comercios, com mao de obra qualificada, ferramentas proprias e acabamento impecavel.
                    </span>
                  </Field>
                </ReviewCard>

                <ReviewCard title="Precificacao e categoria" onEdit={() => navigator("/servicos/criar")}>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Valor">
                      <span className="text-xl font-bold text-[#1a6e3c]">R$ 120,00</span>
                      <span className="ml-1 text-xs text-[#8a8a82]">/ servico</span>
                    </Field>
                    <Field label="Categoria">
                      <Badge color="blue">Reformas</Badge>
                    </Field>
                    <Field label="Moeda">BRL</Field>
                  </div>
                </ReviewCard>

                <ReviewCard title="Perfil do prestador" onEdit={() => navigator("/servicos/criar")}>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Nome">Aleksander</Field>
                    <Field label="Status">
                      <Badge color="green">Verificado</Badge>
                    </Field>
                    <Field label="Avaliacao">
                      <span className="text-[#d08d14]">★★★★★</span>
                      <span className="ml-1 text-xs text-[#8a8a82]">(novo)</span>
                    </Field>
                  </div>
                </ReviewCard>

                <div className="rounded-xl border border-[#dedad0] bg-[#f8f6f1] p-3.5">
                  <div className="mb-2 text-sm font-semibold text-[#1a1a18]">Checklist de publicacao</div>
                  <Checklist items={checklistItems} />
                </div>
              </div>

              <div>
                <PreVizualicaoo
                  informacao={{
                    titulo: "Instalador de piso porcelanato e vinilico",
                    descricao: "Servico profissional com ferramentas proprias e acabamento impecavel...",
                    valor: 120,
                    categoria: "Reformas",
                  }}
                />

              </div>
            </div>

            <FooterButtons />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
