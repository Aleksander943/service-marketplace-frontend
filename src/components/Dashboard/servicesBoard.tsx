import { servicesData } from "./servicesData"

export function ServicesBoard() {
  return (
    <section className="mx-2 rounded-2xl border border-white/10 bg-[#1f1f1f] p-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold text-white/70">Ordenar:</label>
          <select className="h-10 w-full rounded-md border border-white/12 bg-[#2a2a2a] px-3 text-sm font-medium text-white outline-none focus:border-white/30">
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Melhor avaliação</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-white/70">Região:</label>
          <select className="h-10 w-full rounded-md border border-white/12 bg-[#2a2a2a] px-3 text-sm font-medium text-white outline-none focus:border-white/30">
            <option>Zona Norte</option>
            <option>Zona Sul</option>
            <option>Zona Oeste</option>
            <option>Centro</option>
          </select>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end border-b border-white/10 pb-3 text-sm font-semibold text-white/70">
        5 serviços encontrados
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service) => (
          <article
            key={service.title}
            className="overflow-hidden rounded-2xl border border-white/15 bg-[#262626]"
          >
            <div className={["flex h-28 items-center justify-center text-4xl", service.cover].join(" ")}>
              {service.icon}
            </div>

            <div className="space-y-2 p-3">
              <div className="text-xs font-bold text-[#6d77ff]">{service.category}</div>
              <h3 className="text-lg font-semibold leading-tight text-white">{service.title}</h3>
              <p className="text-xs leading-relaxed text-white/65">{service.description}</p>

              <div className="flex items-center gap-2 text-xs text-white/75">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-sky-500/90 text-[10px] font-bold text-white">
                  {service.providerInitials}
                </span>
                <span>{service.provider}</span>
                {service.badge ? (
                  <span className="rounded-full bg-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    {service.badge}
                  </span>
                ) : null}
              </div>

              <div className="flex items-end justify-between pt-1">
                <div className="text-xs font-semibold text-white/80">★★★★★ {service.rating} ({service.reviews})</div>
                <div className="text-right">
                  <span className="text-xl font-bold text-white">{service.price}</span>
                  <span className="text-sm text-white/55">{service.unit}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
