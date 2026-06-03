export const Avaliacao = () => {
  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] overflow-hidden">
      <div className="px-6 py-5 border-b border-[#ebebeb] flex items-center justify-between">
        <p className="text-[15px] font-semibold text-[#111]">Avaliações</p>
        <div className="flex items-center gap-1.5">
          <span className="text-[#ba7517] text-[14px]">★★★★½</span>
          <span className="text-[13px] text-[#888]">4.5 (12 avaliações)</span>
        </div>
      </div>

      <div className="px-6 py-2">
        {[
          {
            initials: "MR",
            color: "#9fe1cb",
            textColor: "#085041",
            name: "Maria R.",
            stars: 5,
            time: "há 2 semanas",
            text: "Serviço impecável! O Aleksander foi muito profissional e o acabamento ficou perfeito. Super recomendo.",
          },
          {
            initials: "JP",
            color: "#b5d4f4",
            textColor: "#0c447c",
            name: "João P.",
            stars: 4,
            time: "há 1 mês",
            text: "Bom serviço, cumpriu o prazo. Apenas precisou voltar para ajustar um detalhe no rejunto, mas resolveu rápido.",
          },
        ].map(({ initials, color, textColor, name, stars, time, text }) => (
          <div key={name} className="py-4 border-b border-[#f0f0f0]">
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: color, color: textColor }}
              >
                <span className="text-[12px] font-semibold">{initials}</span>
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#111]">{name}</p>
                <span className="text-[#ba7517] text-[12px]">
                  {"★".repeat(stars)}
                  {"☆".repeat(5 - stars)}
                </span>
              </div>
              <span className="text-[12px] text-[#bbb] ml-auto">{time}</span>
            </div>
            <p className="text-[13px] text-[#666] leading-[1.6]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
