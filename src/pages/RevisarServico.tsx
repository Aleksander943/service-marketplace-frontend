import { Estagios } from "@/components/CriarServico/estagios/Estagios";
import { NavBar } from "@/components/NavBar/navBar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


const Field = ({ label, children }: any) => (
  <div className="mb-3.5">
    <div className="text-[11px] text-[#aaa] uppercase tracking-wider mb-1">{label}</div>
    <div className="text-[14px] text-[#1a1a1a] leading-[1.6]">{children}</div>
  </div>
);

const Badge = ({ children, color = "blue" }: any) => {
  const colors: any = {
    blue: { bg: "#eff6ff", text: "#1d4ed8" },
    green: { bg: "#f0fdf4", text: "#15803d" },
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-[12px] font-semibold`} style={{ background: colors[color].bg, color: colors[color].text }}>
      {children}
    </span>
  );
};

const ReviewCard = ({ title, onEdit, children, delay = 0 }: any) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  
  return (
    <div className={`bg-white border border-[#efefef] rounded-[14px] p-5 mb-3.5 transition-all duration-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
      <div className="text-[14px] font-semibold text-[#1a1a1a] mb-3 pb-3 border-b border-[#f0f0f0] flex items-center justify-between">
        {title}
        <span onClick={onEdit} className="text-[12px] text-[#2563eb] cursor-pointer font-normal">✎ Editar</span>
      </div>
      {children}
    </div>
  );
};


const CheckItem = ({ ok, label }: any) => (
  <div className="flex gap-2 items-center py-1 text-[12px] text-[#555]">
    <span className={`${ok ? "text-[#16a34a]" : "text-[#dc2626]"} text-[13px]`}>{ok ? "✓" : "✗"}</span>
    {label}
  </div>
);

export default function RevisarServico() {
  const [warnVisible, setWarnVisible] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    setTimeout(() => setWarnVisible(true), 100);
  }, []);

  return (
    <div className="font-[DMSans] bg-[#f5f4f1] min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

     <NavBar/>


      <div className="px-7 pb-10 flex gap-6">
        {/* Main */}
        <div className="flex-1">
          <div className="text-[22px] font-extrabold tracking-tight text-[#1a1a1a] mb-1">Revisar serviço</div>
          <div className="text-[13px] text-[#888] mb-5">Confirme as informações antes de publicar seu serviço na plataforma.</div>

      <Estagios/>
         

          {/* Warning */}
          <div className={`bg-[#fffbeb] border border-[#fcd34d] rounded-[10px] p-3 mb-4 flex gap-2 items-start text-[13px] text-[#92400e] leading-[1.6] transition-opacity ${warnVisible ? "opacity-100" : "opacity-0"}`}>
            <span className="text-[16px] mt-0.5">⚠</span>
            Revise todas as informações com atenção. Após a publicação, alguns campos exigem moderação para edição.
          </div>

          {/* Cards */}
          <ReviewCard title="Informações do serviço" onEdit={() => {}} delay={200}>
            <Field label="Título">Instalador de piso porcelanato e vinílico</Field>
            <Field label="Descrição">
              <span className="text-[#555]">Serviço profissional de instalação de piso porcelanato e vinílico. Atendo residências e comércios, com mão de obra qualificada, ferramentas próprias e acabamento impecável. Orçamento sem compromisso. Prazo de execução conforme metragem.</span>
            </Field>
          </ReviewCard>

          <ReviewCard title="Precificação e categoria" onEdit={() => {}} delay={350}>
            <div className="flex gap-8">
              <Field label="Valor">
                <span className="text-[20px] font-extrabold text-[#16a34a] font-[DMMono]">R$ 120,00</span>
                <span className="text-[12px] text-[#aaa] font-normal ml-1">/ serviço</span>
              </Field>
              <Field label="Categoria">
                <Badge color="blue">Reformas</Badge>
              </Field>
              <Field label="Moeda">BRL</Field>
            </div>
          </ReviewCard>

          <ReviewCard title="Perfil do prestador" onEdit={() => {}} delay={500}>
            <div className="flex gap-8">
              <Field label="Nome">Aleksander</Field>
              <Field label="Status"><Badge color="green">✓ Verificado</Badge></Field>
              <Field label="Avaliação">
                <span className="text-[#f59e0b]">★★★★★</span>
                <span className="text-[12px] text-[#aaa] ml-1">(novo)</span>
              </Field>
            </div>
          </ReviewCard>
        </div>

        {/* Sidebar */}
        <div className="w-[220px] shrink-0">
          <div className="text-[10px] text-[#aaa] uppercase tracking-wider mb-2">Pré-visualização do card</div>

          <div className="bg-white border border-[#efefef] rounded-[14px] overflow-hidden">
            <div className="bg-[#fef9c3] h-[90px] flex items-center justify-center">
              <span className="text-[32px]">⚡</span>
            </div>
            <div className="p-3">
              <div className="text-[10px] text-[#aaa] uppercase tracking-wider mb-1">Reformas</div>
              <div className="text-[13px] font-semibold text-[#1a1a1a] mb-1">Instalador de piso porcelanato e vinílico</div>
              <div className="text-[11px] text-[#888] mb-2 leading-[1.5]">Serviço profissional com ferramentas próprias e acabamento impecável...</div>
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

          {/* Checklist */}
          <div className="mt-3 bg-[#f8f7f4] border border-[#efefef] rounded-[10px] p-3.5">
            <div className="text-[12px] font-semibold text-[#1a1a1a] mb-2">Checklist de publicação</div>
            <CheckItem ok label="Título preenchido" />
            <CheckItem ok label="Descrição adicionada" />
            <CheckItem ok label="Preço definido" />
            <CheckItem ok label="Categoria selecionada" />
            <CheckItem ok={false} label="Foto do serviço" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    onClick={() => navigator(-1)}
                    variant="outline"
                    className="rounded-xl border-[#dedad0] bg-transparent text-[#4a4a44] hover:bg-[#efece3] hover:text-[#1a1a18]"
                  >
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-xl border-[#dedad0] bg-[#efece3] text-[#4a4a44] hover:bg-[#e8e4d8] hover:text-[#1a1a18]"
                  >
                    Salvar rascunho
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="rounded-xl bg-[#1a1a18] font-semibold text-[#fdfcf8] hover:-translate-y-0.5 hover:bg-[#333333]"
                  onClick={() => navigator("/servicos/publicar")}
                >
                  Continuar para revisao
                </Button>
              </div>
  );
}
