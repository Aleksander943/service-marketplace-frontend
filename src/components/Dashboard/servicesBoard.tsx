import { listService } from "@/services/listServices";
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
    <section className="px-7 pb-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-center gap-3 border-b border-[#dedad0] bg-[#efece3] px-0 py-2.5">
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

        <div className="grid grid-cols-1 gap-4 pt-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="overflow-hidden rounded-[10px] border border-[#dedad0] bg-[#fdfcf8] transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:border-[#1a1a18] hover:shadow-[4px_4px_0_#1a1a18]"
            >
              <div
                className={[
                  "relative flex h-[148px] items-center justify-center overflow-hidden",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-[-10px] bg-gray-400" />

                <span className="absolute left-[11px] top-[11px] z-10 rounded-[3px] border border-[#dedad0] bg-[#fdfcf8] px-[9px] py-[3px] text-[10px] font-medium uppercase tracking-[0.6px] text-[#4a4a44]">
                  {service.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-[17px] font-semibold leading-[1.25] tracking-[-0.2px] text-[#1a1a18] [font-family:Fraunces,serif]">
                  {service.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-[13px] leading-[1.55] text-[#8a8a82]">
                  {service.description}
                </p>
                <div className="mb-3 flex items-center gap-2 border-b border-[#dedad0] pb-3">
                  <span className="flex size-6 items-center justify-center rounded-full border border-[#dedad0] bg-[#e8e4d8] text-[9px] font-semibold text-[#4a4a44] [font-family:Fraunces,serif]">
                    {service.provider.name.split("")[0]}
                  </span>
                  <span className="flex-1 text-[13px] font-medium text-[#4a4a44]">{service.provider.name}</span>
                  {service.badge ? (
                    <span className="rounded-[3px] bg-[#e8f5ee] px-[7px] py-[2px] text-[10.5px] font-medium text-[#1a6e3c]">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-[#8a8a82]">
                      <strong className="font-semibold text-[#1a1a18]">
                        {service.rating} 
                      </strong>{" "}
                      ({service.reviews} avaliações)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[22px] leading-none font-bold tracking-[-0.5px] text-[#1a1a18] [font-family:Fraunces,serif]">
                   R$ {service.price}
                  </p>
                  <p className="mt-0.5 text-[11.5px] text-[#8a8a82]">
                    {service.unit}
                  </p>
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


