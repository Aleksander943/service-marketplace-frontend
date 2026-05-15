export const ResumoPerfil = ({ usuario }: any) => {
  return (
    <div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8a82]">
          Resumo
        </p>
        <h2 className="mt-2 text-lg font-semibold text-[#1a1a18]">
          Informações do prestador
        </h2>
      </div>

      <div className="space-y-3 text-sm text-[#4a4a44]">
        <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
          <span>Nome</span>
          <span className="font-medium text-[#1a1a18]">
            {usuario?.name || "Usuário"}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
          <span>Perfil</span>
          <span className="font-medium text-[#1a1a18]">
            {usuario?.role || "Não informado"}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
          <span>Região</span>
          <span className="font-medium text-[#1a1a18]">
            {usuario?.regiao || "Não informado"}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-[#ece8df] pb-3">
          <span>Profissão</span>
          <span className="font-medium text-[#1a1a18]">
            {usuario?.profissao || "Não informado"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Status</span>
          <span className="rounded-full bg-[#e8f5ee] px-3 py-1 text-xs font-semibold text-[#1a6e3c]">
            Conta ativa
          </span>
        </div>
      </div>
    </div>
  );
};
