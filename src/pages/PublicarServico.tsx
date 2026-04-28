import React from 'react';

export default function PublicarServico() {
  return (
    <div className="min-h-screen bg-[#f5f4f1] font-sans">
      <div className="bg-white border-b border-[#efefef] px-7 py-3 flex items-center justify-between">
        <div className="text-[18px] font-extrabold tracking-tight">serviços<span className="text-[#2563eb]">já</span></div>
        <div className="flex gap-2.5 items-center">
          <button className="bg-[#1a1a1a] text-white rounded-[8px] px-4 py-2 text-[13px] font-medium">Publicar serviço</button>
          <div className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[13px] font-semibold text-[#555]">A</div>
        </div>
      </div>

      <div className="bg-white border-b border-[#efefef] px-7 flex gap-6">
        {[
          'Todos','Limpeza','Elétrica','Pintura','Encanamento','Jardinagem','Reformas','Informática'
        ].map((item,i) => (
          <div key={item} className={`text-[13px] py-2 ${i===0? 'text-[#1a1a1a] font-semibold border-b-2 border-[#1a1a1a]' : 'text-[#999]'} cursor-pointer`}>{item}</div>
        ))}
      </div>

      <div className="px-7 py-3 text-[12px] text-[#aaa] flex gap-1.5">{['Minha conta','Meus serviços','Publicado'].map((t,i,arr)=> (
        <span key={t} className={`${i < arr.length -1 ? 'text-[#2563eb]' : 'text-[#aaa]'} ${i < arr.length -1 ? 'cursor-pointer' : ''}`}>{t}{i < arr.length -1 && <span className="ml-1 text-[#ccc]">›</span>}</span>
      ))}</div>

      <div className="px-7 pb-10 flex gap-6">
        <main className="flex-1">
          <h1 className="text-[22px] font-extrabold text-[#1a1a1a] mb-1">Serviço publicado!</h1>
          <p className="text-[13px] text-[#888] mb-5">Seu serviço já está visível para clientes na plataforma.</p>

          <div className="flex items-center mb-7">
            {['Perfil','Serviço','Revisão','Publicar'].map((s,i) => (
              <div key={s} className={`flex items-center ${i < 3 ? 'flex-1' : ''}`}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-[11px] font-semibold">✓</div>
                  <div className="text-[12px] font-medium text-[#1a1a1a]">{s}</div>
                </div>
                {i < 3 && <div className="flex-1 h-px bg-[#1a1a1a] mx-3" />}
              </div>
            ))}
          </div>

          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[14px] py-4 px-5 mb-4 flex items-center gap-4">
            <div className="w-11 h-11 bg-[#16a34a] rounded-full flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div className="text-[15px] font-semibold text-[#15803d] mb-1">Tudo certo! Seu serviço está no ar.</div>
              <div className="text-[13px] text-[#166534]">Publicado agora · Instalador de piso porcelanato e vinílico · Reformas</div>
            </div>
          </div>

          <section className="bg-white border border-[#efefef] rounded-[14px] p-5 mb-4">
            <div className="text-[14px] font-semibold text-[#1a1a1a] mb-3 pb-3 border-b border-[#f0f0f0]">Desempenho do anúncio</div>
            <div className="flex gap-2.5">
              <div className="bg-[#f8f7f4] rounded-[10px] py-3.5 px-4 flex-1">
                <div className="text-[11px] text-[#999] mb-1 uppercase tracking-wider">Visualizações</div>
                <div className="text-[22px] font-semibold text-[#2563eb] font-mono">0</div>
              </div>
              <div className="bg-[#f8f7f4] rounded-[10px] py-3.5 px-4 flex-1">
                <div className="text-[11px] text-[#999] mb-1 uppercase tracking-wider">Contatos recebidos</div>
                <div className="text-[22px] font-semibold text-[#1a1a1a] font-mono">0</div>
              </div>
              <div className="bg-[#f8f7f4] rounded-[10px] py-3.5 px-4 flex-1">
                <div className="text-[11px] text-[#999] mb-1 uppercase tracking-wider">Receita gerada</div>
                <div className="text-[22px] font-semibold text-[#16a34a] font-mono">R$ 0</div>
              </div>
            </div>
          </section>

          <section className="bg-white border border-[#efefef] rounded-[14px] p-5 mb-4">
            <div className="text-[14px] font-semibold text-[#1a1a1a] mb-3 pb-3 border-b border-[#f0f0f0]">Compartilhar serviço</div>
            <div className="flex gap-2 items-center">
              <div className="flex-1 bg-[#f8f7f4] border border-[#efefef] rounded-[8px] px-3 py-2 text-[12px] text-[#888] font-mono">servicosja.com.br/s/aleksander-piso-porcelanato</div>
              <button className="bg-[#1a1a1a] text-white rounded-[8px] px-4 py-2 text-[12px] font-medium">Copiar link</button>
              <button className="bg-[#25D366] text-white rounded-[8px] px-4 py-2 text-[12px] font-medium">WhatsApp</button>
            </div>
          </section>

          <section className="bg-white border border-[#efefef] rounded-[14px] p-5">
            <div className="text-[14px] font-semibold text-[#1a1a1a] mb-3 pb-3 border-b border-[#f0f0f0]">Próximos passos</div>
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-3.5 p-4 bg-white rounded-[12px] border border-[#efefef]">
                <div className="w-7 h-7 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-[12px] font-semibold">1</div>
                <div>
                  <div className="text-[14px] font-semibold text-[#1a1a1a] mb-1">Adicione fotos do seu trabalho</div>
                  <div className="text-[13px] text-[#888] leading-[1.6]">Serviços com fotos recebem até 3x mais contatos. Vá em "Meus serviços" para adicionar imagens.</div>
                </div>
              </div>
              <div className="flex gap-3.5 p-4 bg-white rounded-[12px] border border-[#efefef]">
                <div className="w-7 h-7 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-[12px] font-semibold">2</div>
                <div>
                  <div className="text-[14px] font-semibold text-[#1a1a1a] mb-1">Responda rápido aos clientes</div>
                  <div className="text-[13px] text-[#888] leading-[1.6]">Prestadores que respondem em menos de 1 hora aparecem primeiro nos resultados.</div>
                </div>
              </div>
              <div className="flex gap-3.5 p-4 bg-white rounded-[12px] border border-[#efefef]">
                <div className="w-7 h-7 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-[12px] font-semibold">3</div>
                <div>
                  <div className="text-[14px] font-semibold text-[#1a1a1a] mb-1">Peça avaliações após cada serviço</div>
                  <div className="text-[13px] text-[#888] leading-[1.6]">Avaliações aumentam sua credibilidade e melhoram seu posicionamento na busca.</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <aside className="w-[220px] shrink-0">
          <div className="text-[10px] text-[#aaa] uppercase tracking-wider mb-2">Como aparece na busca</div>
          <div className="bg-white border border-[#efefef] rounded-[14px] overflow-hidden">
            <div className="bg-[#fef9c3] h-[90px] flex items-center justify-center relative">
              <span className="text-[32px]">⚡</span>
              <div className="absolute top-2 right-2 bg-[#16a34a] text-white text-[9px] font-semibold px-2 py-1 rounded-full">● ao vivo</div>
            </div>
            <div className="p-3">
              <div className="text-[10px] text-[#aaa] uppercase tracking-wider mb-1">Reformas</div>
              <div className="text-[13px] font-semibold text-[#1a1a1a] mb-1">Instalador de piso porcelanato e vinílico</div>
              <div className="text-[11px] text-[#888] mb-2 leading-[1.5]">Serviço profissional com ferramentas próprias...</div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex gap-1">
                    <span className="text-[9px] px-2 rounded-full bg-[#eff6ff] text-[#1d4ed8] font-semibold">Prestador</span>
                    <span className="text-[9px] px-2 rounded-full bg-[#f0fdf4] text-[#15803d] font-semibold">verificado</span>
                  </div>
                  <div className="text-[#f59e0b] text-[10px] mt-1">★★★★★ <span className="text-[#aaa] text-[9px]">(novo)</span></div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-semibold text-[#1a1a1a]">R$120,00</div>
                  <div className="text-[9px] text-[#aaa]">/ serviço</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 bg-[#fffbeb] border border-[#fcd34d] rounded-[10px] p-3 text-[11px] text-[#92400e] leading-6">
            <strong className="block mb-1 text-[#78350f]">Dica</strong>
            Adicione uma foto para aumentar suas chances de contato em até 3x.
          </div>
        </aside>
      </div>

      <footer className="sticky bottom-0 bg-white border-t border-[#efefef] px-7 py-3 flex justify-between items-center">
        <button className="bg-transparent border border-[#ddd] rounded-[8px] px-5 py-2 text-[13px] font-medium text-[#1a1a1a]">Ver meus serviços</button>
        <button className="bg-[#1a1a1a] text-white rounded-[8px] px-5 py-2 text-[13px] font-medium">Criar outro serviço →</button>
      </footer>
    </div>
  );
}

