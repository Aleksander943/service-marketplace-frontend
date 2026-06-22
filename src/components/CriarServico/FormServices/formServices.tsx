import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "../../ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreateService } from "@/services/postServices";
import { PreVisualizacao } from "../PreVizualizacao/PreVisualizacao";
import { CadastroServicesSchema } from "./schema/Data";
import {
  createServiceCardClass,
  createServiceCardContentClass,
} from "../cardStyles";

type CadastroServicesTypes = z.infer<typeof CadastroServicesSchema>;

export const FormServices = () => {
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { register, handleSubmit, watch } = useForm<CadastroServicesTypes>({
    resolver: zodResolver(CadastroServicesSchema),
  });

  const titulo = watch("titulo") || "";
  const descricao = watch("descricao") || "";
  const image = watch("image");

  useEffect(() => {
    if (image?.[0]) {
      const url = URL.createObjectURL(image[0]);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(null);
  }, [image]);

  const enviar = async (data: CadastroServicesTypes) => {
    try {
      const formData = new FormData();
      formData.append("title", data.titulo);
      formData.append("description", data.descricao);
      formData.append("price", String(data.valor));
      formData.append("category", data.categoria);

      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
      }

      await CreateService(formData);
      navigate("/servicos/publicar");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  const campos = [titulo, descricao, watch("valor"), watch("categoria"), image];

  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-space">
      <form onSubmit={handleSubmit(enviar)} className="flex-1 w-full">
        <Card className={createServiceCardClass}>
          <CardContent className={createServiceCardContentClass}>
            <div>
              <div className="mb-1.5 flex items-end justify-between">
                <label className="text-sm font-medium text-[#4a4a44]">
                  Título do serviço
                </label>
                <span className="text-[11px] text-[#8a8a82]">
                  {titulo.length} / 60
                </span>
              </div>
              <input
                id="titulo"
                {...register("titulo")}
                type="text"
                placeholder="Ex: Instalador de piso porcelanato e vinílico"
                className="min-h-11 w-full rounded-xl border border-[#dedad0] bg-[#efece3] px-3 py-2.5 text-sm text-[#1a1a18] outline-none transition placeholder:text-[#8a8a82] focus:border-[#1a1a18]"
              />
              <p className="mt-1.5 text-xs text-[#8a8a82]">
                Um título claro aumenta suas chances de ser encontrado.
              </p>
            </div>

            <div>
              <div className="mb-1.5 flex items-end justify-between">
                <label className="text-sm font-medium text-[#4a4a44]">
                  Descrição detalhada
                </label>
                <span className="text-[11px] text-[#8a8a82]">
                  {descricao.length} / 400
                </span>
              </div>
              <textarea
                id="descricao"
                {...register("descricao")}
                placeholder="Descreva o que você oferece, diferenciais, materiais incluídos e tempo de execução."
                className="min-h-28 w-full rounded-xl border border-[#dedad0] bg-[#efece3] px-3 py-2.5 text-sm text-[#1a1a18] outline-none transition placeholder:text-[#8a8a82] focus:border-[#1a1a18]"
              />
            </div>
          </CardContent>
        </Card>

        <Card className={createServiceCardClass}>
          <CardContent className={createServiceCardContentClass}>
            <h3 className="mb-4 text-lg font-semibold text-[#1a1a18]">
              Precificação
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
                  <option value="eletrica">Elétrica</option>
                  <option value="hidraulica">Hidráulica</option>
                  <option value="pintura">Pintura</option>
                  <option value="alvenaria">Alvenaria/Pedreiro</option>
                  <option value="marcenaria">Marcenaria</option>
                  <option value="gesso">Gesso e Drywall</option>
                  <option value="limpeza">Limpeza/Faxina</option>
                  <option value="passadeira">Passadeira</option>
                  <option value="cozinheira">Cozinheira</option>
                  <option value="jardinagem">Jardinagem</option>
                  <option value="montagem">Montagem de Móveis</option>
                  <option value="ar-condicionado">Ar Condicionado</option>
                  <option value="seguranca-eletronica">Segurança Eletrônica</option>
                  <option value="informatica">Informática</option>
                  <option value="eletrodomesticos">Eletrodomésticos</option>
                  <option value="celulares">Assistência de Celular</option>
                  <option value="outros">Outros Serviços</option>
                </select>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#8a8a82]">
              O campo providerId é preenchido automaticamente com o usuário autenticado.
            </p>
          </CardContent>
        </Card>

        <Card className={createServiceCardClass}>
          <CardContent className={createServiceCardContentClass}>
            <h1 className="mb-4 text-lg font-semibold text-[#1a1a18]">
              Fotos do serviço
            </h1>
            <input
              id="image"
              type="file"
              accept="image/*"
              className="hidden"
              {...register("image")}
            />
            <label
              htmlFor="image"
              className="flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#dedad0] bg-[#efece3] px-4 py-8 text-center transition hover:border-[#2350d4]/60 hover:bg-[#eef1fc]"
            >
              <span className="text-2xl opacity-65">🖼️</span>
              <p className="mt-2 text-sm text-[#4a4a44]">
                Clique para selecionar uma imagem
              </p>
              <p className="mt-1 text-xs text-[#8a8a82]">
                JPG, PNG ou WEBP · Máj. 5MB
              </p>
            </label>

            {previewUrl && (
              <div className="mt-4">
                <img
                  src={previewUrl}
                  alt="Pré-visualização"
                  className="h-48 w-full rounded-xl object-cover"
                />
                <p className="mt-2 text-sm text-[#4a4a44]">
                  {image[0].name}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3 border-[#dedad0] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
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