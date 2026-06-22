interface Props{
  valor: any
}

export const InformacaoValor = ({valor}:Props) => {
  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-5">
      <div className="text-center pb-4 border-b border-[#ebebeb] mb-4">
        <p className="text-[12px] text-[#aaa] mb-1">A partir de</p>
        <p className="text-[28px] font-semibold text-[#111]">
          R${valor}
          <span className="text-[13px] font-normal text-[#888]">/ m²</span>
        </p>
      </div>
      <button className="w-full py-2.5 bg-[#1a1a1a] text-white rounded-[8px] mb-2 text-[14px] font-medium">
        Solicitar orçamento
      </button>
      <button className="w-full py-2.5 bg-transparent text-[#333] border border-[#ccc] rounded-[8px] text-[14px]">
        💬 Enviar mensagem
      </button>
    </div>
  );
};
