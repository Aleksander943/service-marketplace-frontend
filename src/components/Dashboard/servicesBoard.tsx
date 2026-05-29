import { listService } from "@/services/getListServices";
import { useEffect, useState } from "react";

export function ServicesBoard() {
  const [services, setServices] = useState<any[]>([]);


  useEffect(() => {
    const getList = async () => {
      try {
        const response = await listService();
        setServices(response.data ?? []);
      } catch (error) {
        console.log(error);
      }
    };

    getList();
  }, []);

  return (
    <section className="pb-8">
      <div>
        <div className="flex flex-wrap items-center gap-3 border-b border-[#d8d4c9] bg-[#fcfbf7] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-[12.5px] text-[#8a8a82]">Ordenar:</span>
            <select className="h-8 rounded-[5px] border border-[#dedad0] bg-[#fdfcf8] px-2.5 text-[13px] text-[#1a1a18] outline-none focus:border-[#1a1a18]">
              <option>Menor preço</option>
              <option>Maior avaliação</option>
              <option>Mais contratados</option>
              <option>Mais recentes</option>
            </select>
          </div>

          <div className="mx-1 h-4 w-px bg-[#dedad0]" />

          <div className="flex items-center gap-2">
            <span className="text-[12.5px] text-[#8a8a82]">Região:</span>
            <select className="h-8 rounded-[5px] border border-[#dedad0] bg-[#fdfcf8] px-2.5 text-[13px] text-[#1a1a18] outline-none focus:border-[#1a1a18]">
              <option>Zona Norte</option>
              <option>Zona Sul</option>
              <option>Zona Leste</option>
              <option>Zona Oeste</option>
              <option>Centro</option>
              <option>Barra da Tijuca</option>
              <option>Toda a cidade</option>
            </select>
          </div>

          <span className="ml-auto text-sm text-[#8a8a82]">
            {" "}
            Serviços encontrados: {services.length ||"0"}
          </span>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 pt-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="overflow-hidden rounded-xl border border-[#d9d5ca] bg-[#fdfcf8] transition-shadow duration-200 hover:shadow-md"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[#d2d7df]">
                <span className="absolute left-3 top-3 z-10 rounded border border-[#dedad0] bg-[#fdfcf8] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.6px] text-[#4a4a44]">
                  {service.category}
                </span>
                <span className="text-sm font-medium text-white/80">Sem imagem</span>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-[17px] font-semibold leading-tight tracking-[-0.2px] text-[#1a1a18] font-[Fraunces,serif]">
                  {service.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-[13px] leading-[1.55] text-[#8a8a82]">
                  {service.description}
                </p>
                <div className="mb-3 flex items-center gap-2 border-b border-[#dedad0] pb-3">
                  <span className="flex size-6 items-center justify-center rounded-full border border-[#dedad0] bg-[#e8e4d8] text-[9px] font-semibold text-[#4a4a44] font-[Fraunces,serif]">
                    {service.provider.name.split("")[0]}
                  </span>
                  <span className="flex-1 text-[13px] font-medium text-[#4a4a44]">{service.provider.name}</span>
                  {service.badge ? (
                    <span className="rounded-[3px] bg-[#e8f5ee] px-1.5 py-0.5 text-[10.5px] font-medium text-[#1a6e3c]">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
                <div className="flex items-end justify-between gap-3">
                  <span className="text-xs text-[#8a8a82]">
                    <strong className="font-semibold text-[#1a1a18]">{service.rating}</strong> ({service.reviews} avaliacoes)
                  </span>
                  <div className="text-right">
                    <p className="text-[22px] leading-none font-bold tracking-[-0.5px] text-[#1a1a18] font-[Fraunces,serif]">
                      R$ {service.price}
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-[#8a8a82]">{service.unit}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>
        {
          "@keyframes up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }"
        }
      </style>
    </section>
  );
}


