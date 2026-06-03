interface Props {
  titulo: any;
  descricao: any;
}
export const Anuncio = ({ titulo, descricao }: Props) => {
  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] overflow-hidden">
      <div className="w-full h-[280px] bg-[#b0b8c9] flex items-center justify-center">
        <span className="text-[13px] text-white opacity-70">Sem imagem</span>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2.5 px-4 py-3 border-b border-[#ebebeb]">
        {[true, false, false].map((active, i) => (
          <div
            key={i}
            className={`w-16 h-12 rounded-[6px] bg-[#cdd3df] ${
              active
                ? "border-2 border-[#4f46e5]"
                : "border-2 border-transparent"
            } cursor-pointer`}
          />
        ))}
      </div>

      {/* Content */}

      <div className="px-6 py-5">
        <span className="inline-block text-[11px] font-semibold bg-[#eeedfe] text-[#3c3489] px-2.5 py-0.5 rounded-md mb-3 tracking-[0.05em]">
          OUTROS
        </span>

        <h1 className="text-[20px] font-semibold text-[#111] mb-2.5 leading-[1.35]">
          {titulo}
        </h1>

        <p className="text-[14px] text-[#666] leading-[1.7] mb-5">
          {descricao}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mb-5">
          {[
            "📍 Zona Norte",
            "🕐 Disponível hoje",
            "🏅 5 anos de experiência",
          ].map((tag: string) => (
            <span
              key={tag}
              className="text-[12px] text-[#555] bg-[#f5f5f5] border border-[#e0e0e0] px-3 py-1 rounded-[20px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <hr className="border-none border-t border-[#ebebeb] my-5" />

        <p className="text-[12px] font-semibold text-[#999] uppercase tracking-[0.05em] mb-2.5">
          O que está incluído
        </p>

        {[
          { ok: true, text: "Nivelamento do piso" },
          { ok: true, text: "Assentamento dos pisos" },
          { ok: true, text: "Rejuntamento e acabamento" },
          { ok: false, text: "Materiais (cobrado à parte)" },
        ].map(({ ok, text }) => (
          <div
            key={text}
            className="flex items-center gap-2 mb-2 text-[14px] text-[#555]"
          >
            <span
              className={`${ok ? "text-[#1d9e75]" : "text-[#d85a30]"} font-bold`}
            >
              {ok ? "✓" : "✗"}
            </span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
