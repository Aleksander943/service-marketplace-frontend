import { Card, CardContent } from "@/components/ui/card";
import { PreVisualizacao } from "./PreVizualizacao/PreVisualizacao";
import { Estagios } from "./estagios/Estagios";
import { createServiceCardClass } from "./cardStyles";
import { FormServices } from "./formCadastro/FormServices";

export function CreateServiceView() {
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
              <FormServices />

              <div className="flex flex-col gap-3 border-t border-[#dedad0] pt-5 sm:flex-row sm:items-center sm:justify-between">
                {/* actions are inside FormServices via ButtonFooter */}
              </div>
            </div>

            <PreVisualizacao />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}