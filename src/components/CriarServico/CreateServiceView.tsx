import { Card, CardContent } from "@/components/ui/card";
import { PreVisualizacao } from "./PreVizualizacao/PreVisualizacao";
import { Estagios } from "./estagios/Estagios";
import { createServiceCardClass } from "./cardStyles";
import { Informacao_basica } from "./informacaoBasica/Informacao_Basica";
import { Precificacao } from "./Precificacao/precificacao";
import { Disponibilidade } from "./disponibilidade/Disponibilidade";
import { Imagem } from "./imagens/imagens";
import { useState } from "react";

export function CreateServiceView() {
  const [informacao, setInformacao] = useState({
    titulo: "",
    descricao: "",
    valor: 0,
    categoria: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setInformacao((prev) => ({
      ...prev,
      [name]: name === "valor" ? Number(value) : value,
    }));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 space-y-6 pt-6">
      <Card className={`${createServiceCardClass} py-6 md:py-8`}>
        <CardContent className="space-y-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#1a1a18] [font-family:Fraunces,serif]">
              Criar novo serviço
            </h1>
            <p className="mt-1.5 text-sm leading-relaxed text-[#8a8a82]">
              Preencha as informações abaixo para publicar seu serviço na plataforma.
            </p>
          </div>

          <Estagios />

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6 md:space-y-8">
              <Informacao_basica informacao={informacao} onChange={handleChange} />
              <Precificacao informacao={informacao} onChange={handleChange} />
              <Disponibilidade />
              <Imagem />

              <div className="flex flex-col gap-3 border-t border-[#dedad0] pt-5 sm:flex-row sm:items-center sm:justify-between">
                {/* actions can be added here when integrated with submit flow */}
              </div>
            </div>

            <PreVisualizacao />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}