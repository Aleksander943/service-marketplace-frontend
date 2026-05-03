export function DashboardShowcase() {
  return (
    <div className="px-7 pb-14 pt-6">
      <div className="mx-auto max-w-[1280px]">
        <section className="mb-6 overflow-hidden rounded-lg border border-[#1a1a18]/20 bg-white">
          <div className="relative h-[120px] bg-[linear-gradient(135deg,#5a5a9b_0%,#4338ca_100%)]">
            <div className="absolute bottom-[-32px] left-7">
              <div className="flex size-16 items-center justify-center rounded-full border-[3px] border-white bg-[#e8e5ff] text-[22px] font-medium text-[#5a5a9b] shadow-[0_10px_32px_rgba(0,0,0,0.15)] [font-family:Fraunces,serif]">
                A
              </div>
            </div>
          </div>

          <div className="px-7 pb-6 pt-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-[600px]">
                  <h1 className="mb-2 text-[24px] font-semibold leading-tight tracking-[-0.3px] text-[#1a1a18]">
                    Aleksander
                  </h1>

                  <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[#555]">
                    <span className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#5a5a9b]" />
                      Desenvolvedor Web
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#5a5a9b]" />
                      Zona Norte, Rio de Janeiro
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-[#f59e0b]">★★★★★</span>
                      <span className="text-[#666]">5.0 (3 avaliações)</span>
                    </span>
                  </div>

                  <p className="mb-4 max-w-[600px] text-[14px] leading-[1.65] text-[#555]">
                    Desenvolvedor web especializado em React e tecnologias modernas. Crio sites rápidos,
                    responsivos e com excelente experiência de usuário. Atendo de forma ágil e entrego
                    com qualidade garantida.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "JavaScript",
                      "UI/UX",
                      "Sites Responsivos",
                      "SEO",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#ddd2f5] bg-[#e8e5ff] px-3.5 py-1.5 text-[12px] font-medium text-[#5a5a9b]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-2 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-[#5a5a9b] px-6 text-[13px] font-semibold text-white transition hover:bg-[#4a4a7b] md:mt-0">
                  Entrar em contato
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex min-w-fit flex-col items-center rounded-md bg-[#f9f9f7] px-5 py-3 text-center">
                  <div className="text-[22px] font-semibold leading-none text-[#1a1a18]">3</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.6px] text-[#888]">
                    Anúncios
                  </div>
                </div>
                <div className="flex min-w-fit flex-col items-center rounded-md bg-[#f9f9f7] px-5 py-3 text-center">
                  <div className="text-[22px] font-semibold leading-none text-[#1a1a18]">100%</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.6px] text-[#888]">
                    Resposta
                  </div>
                </div>
                <div className="flex min-w-fit flex-col items-center rounded-md bg-[#f9f9f7] px-5 py-3 text-center">
                  <div className="text-[22px] font-semibold leading-none text-[#1a1a18]">12</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.6px] text-[#888]">
                    Projetos
                  </div>
                </div>
                <div className="flex min-w-fit flex-col items-center rounded-md bg-[#f9f9f7] px-5 py-3 text-center">
                  <div className="text-[22px] font-semibold leading-none text-[#1a1a18]">2 anos</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.6px] text-[#888]">
                    Na plataforma
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h2 className="mb-4 text-[16px] font-semibold text-[#1a1a18]">Anúncios de Aleksander</h2>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article className="overflow-hidden rounded-lg border border-[#1a1a18]/20 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition duration-200 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
            <div className="relative flex h-[140px] items-center justify-center overflow-hidden bg-[#7a8fa8]">
              <div className="absolute inset-0 opacity-30" style={{backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)"}} />
              <div className="absolute left-3 top-3 z-10 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-[#5a5a9b]">
                Informática
              </div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.3">
                <rect x="4" y="10" width="40" height="26" rx="3" fill="#1a1a18" />
                <rect x="14" y="36" width="20" height="3" fill="#1a1a18" />
                <rect x="8" y="14" width="32" height="18" rx="1" fill="#475569" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-[14px] font-semibold leading-[1.4] text-[#1a1a18]">
                Criação de site profissional com React (rápido e responsivo)
              </h3>
              <p className="mb-3 text-[12px] leading-[1.5] text-[#666]">
                Desenvolvo sites modernos e responsivos utilizando React, focados em performance e boa experiência do usuário.
              </p>
              <div className="flex items-center justify-between border-t border-[#1a1a18]/10 pt-3">
                <span className="text-[16px] font-semibold text-[#1a1a18]">R$ 150</span>
                <span className="text-[11px] text-[#888]"><span className="text-[#f59e0b]">★</span> 5.0 · 3 aval.</span>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-[#1a1a18]/20 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition duration-200 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
            <div className="relative flex h-[140px] items-center justify-center overflow-hidden bg-[#7c9eb8]">
              <div className="absolute inset-0 opacity-30" style={{backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)"}} />
              <div className="absolute left-3 top-3 z-10 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-[#5a5a9b]">
                Informática
              </div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.3">
                <rect x="8" y="8" width="32" height="32" rx="4" fill="#1a1a18" />
                <path d="M16 24h16M24 16v16" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-[14px] font-semibold leading-[1.4] text-[#1a1a18]">
                Landing page de alta conversão para seu negócio
              </h3>
              <p className="mb-3 text-[12px] leading-[1.5] text-[#666]">
                Criação de landing pages otimizadas para converter visitantes em clientes, com design moderno e copy eficaz.
              </p>
              <div className="flex items-center justify-between border-t border-[#1a1a18]/10 pt-3">
                <span className="text-[16px] font-semibold text-[#1a1a18]">R$ 200</span>
                <span className="text-[11px] text-[#888]"><span className="text-[#f59e0b]">★</span> 5.0 · 2 aval.</span>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-[#1a1a18]/20 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition duration-200 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
            <div className="relative flex h-[140px] items-center justify-center overflow-hidden bg-[#8b9eb0]">
              <div className="absolute inset-0 opacity-30" style={{backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)"}} />
              <div className="absolute left-3 top-3 z-10 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-[#5a5a9b]">
                Informática
              </div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.3">
                <circle cx="24" cy="24" r="16" fill="#1a1a18" />
                <path d="M18 24l5 5 9-9" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-[14px] font-semibold leading-[1.4] text-[#1a1a18]">
                Manutenção e correção de bugs em sites existentes
              </h3>
              <p className="mb-3 text-[12px] leading-[1.5] text-[#666]">
                Identifico e corrijo problemas de performance, bugs visuais e erros de código em projetos web já existentes.
              </p>
              <div className="flex items-center justify-between border-t border-[#1a1a18]/10 pt-3">
                <span className="text-[16px] font-semibold text-[#1a1a18]">R$ 80</span>
                <span className="text-[11px] text-[#888]"><span className="text-[#f59e0b]">★</span> 5.0 · 1 aval.</span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}