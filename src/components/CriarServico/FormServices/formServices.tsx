import { useForm } from "react-hook-form";
import { Card, CardContent } from "../../ui/card";
import {
  createServiceCardClass,
  createServiceCardContentClass,
} from "../cardStyles";
import { Input } from "@/components/ui/input";
import { CreateService } from "@/services/sevices";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { CadastroServicesSchema } from "./schema/Data";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { PreVisualizacao } from "../PreVizualizacao/PreVisualizacao";

type CadastroServicesTypes = z.infer<typeof CadastroServicesSchema>;

export const FormServices = () => {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(CadastroServicesSchema),
  });
  const navigate = useNavigate();

  const enviar = async (data: CadastroServicesTypes) => {
    try {
      const payload = {
        title: data.titulo,
        description: data.descricao,
        price: Number(data.valor),
        category: data.categoria,
      };
      await CreateService(payload);
      navigate("/servicos/publicar");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  const campos = [
    watch("titulo"),
    watch("descricao"),
    watch("valor"),
    watch("categoria"),
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-space">
      <form onSubmit={handleSubmit(enviar)} className="flex-1 w-full">
        <Card className={createServiceCardClass}>
          <CardContent className={createServiceCardContentClass}>
            <div>
              <div className="mb-1.5 flex items-end justify-between">
                <label className="text-sm font-medium text-[#4a4a44]">
                  Titulo do servico
                </label>
                <span className="text-[11px] text-[#8a8a82]">0 / 60</span>
              </div>
              <input
                id="titulo"
                {...register("titulo")}
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
                <label className="text-sm font-medium text-[#4a4a44]">
                  Descricao detalhada
                </label>
                <span className="text-[11px] text-[#8a8a82]">0 / 400</span>
              </div>
              <textarea
                id="descricao"
                {...register("descricao")}
                placeholder="Descreva o que voce oferece, diferenciais, materiais incluidos e tempo de execucao."
                className="min-h-28 w-full rounded-xl border border-[#dedad0] bg-[#efece3] px-3 py-2.5 text-sm text-[#1a1a18] outline-none transition placeholder:text-[#8a8a82] focus:border-[#1a1a18]"
              />
            </div>
          </CardContent>
        </Card>

        <Card className={createServiceCardClass}>
          <CardContent className={createServiceCardContentClass}>
            <h3 className="mb-4 text-lg font-semibold text-[#1a1a18]">
              Precificacao
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">
                  Valor
                </label>
                <div className="flex h-10 overflow-hidden rounded-xl border border-[#dedad0] bg-[#efece3] focus-within:border-[#1a1a18]">
                  <span className="inline-flex items-center border-r border-[#dedad0] bg-[#f5f2eb] px-3 text-xs font-semibold text-[#8a8a82]">
                    R$
                  </span>
                  <Input
                    id="valor"
                    type="number"
                    placeholder="0,00"
                    className="h-10 rounded-none border-0 bg-transparent text-[#1a1a18] shadow-none focus-visible:ring-0"
                    {...register("valor")}
                  />
                  <span className="inline-flex items-center border-l border-[#dedad0] bg-[#f5f2eb] px-3 text-xs font-semibold text-[#8a8a82]">
                    BRL
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#4a4a44]">
                  Categoria
                </label>
                <select
                  id="categoria"
                  className="h-10 w-full rounded-xl border border-[#dedad0] bg-[#efece3] px-3 text-sm text-[#1a1a18] outline-none focus:border-[#1a1a18]"
                  {...register("categoria")}
                >
                  <option value="">Selecione a categoria</option>

                  {/* Manutenção e Reformas */}
                  <option value="eletrica">Elétrica</option>
                  <option value="hidraulica">Hidráulica</option>
                  <option value="pintura">Pintura</option>
                  <option value="alvenaria">Alvenaria/Pedreiro</option>
                  <option value="marcenaria">Marcenaria</option>
                  <option value="gesso">Gesso e Drywall</option>

                  {/* Serviços Domésticos */}
                  <option value="limpeza">Limpeza/Faxina</option>
                  <option value="passadeira">Passadeira</option>
                  <option value="cozinheira">Cozinheira</option>
                  <option value="jardinagem">Jardinagem</option>

                  {/* Montagem e Instalação */}
                  <option value="montagem">Montagem de Móveis</option>
                  <option value="ar-condicionado">Ar Condicionado</option>
                  <option value="seguranca-eletronica">
                    Segurança Eletrônica
                  </option>

                  {/* Assistência Técnica */}
                  <option value="informatica">Informática</option>
                  <option value="eletrodomesticos">Eletrodomésticos</option>
                  <option value="celulares">Assistência de Celular</option>

                  <option value="outros">Outros Serviços</option>
                </select>
              </div>
            </div>

            <p className="text-xs text-[#8a8a82]">
              O campo providerId e preenchido automaticamente com o usuario
              autenticado.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3  border-[#dedad0] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="rounded-xl border-[#dedad0] bg-transparent text-[#4a4a44] hover:bg-[#efece3] hover:text-[#1a1a18]"
          >
            Voltar
          </Button>
          <Button
            type="submit"
            className="rounded-xl bg-[#1a1a18] font-semibold text-[#fdfcf8] hover:-translate-y-0.5 hover:bg-[#333333]"
          >
            Criar outro serviço
          </Button>
        </div>
      </form>
      <div className="w-[350px] sticky top-4">
        <PreVisualizacao campos={campos} />
      </div>
    </div>
  );
};
