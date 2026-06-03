export const InformacaoPrestador = () => {
  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white text-[15px] font-semibold">A</div>
              <div>
                <p className="text-[14px] font-medium text-[#111]">Aleksander</p>
                <p className="text-[12px] text-[#aaa]">Membro desde 2024</p>
              </div>
            </div>

            <div className="flex justify-between mb-3">
              {[{ val: "12", lbl: "Avaliações" }, { val: "4.5", lbl: "Nota média" }, { val: "98%", lbl: "Resposta" }].map(({ val, lbl }) => (
                <div key={lbl} className="text-center">
                  <p className="text-[16px] font-semibold text-[#111]">{val}</p>
                  <p className="text-[11px] text-[#aaa] mt-1">{lbl}</p>
                </div>
              ))}
            </div>

            <hr className="border-none border-t border-[#ebebeb] my-3" />

            {[{ icon: "🕐", text: "Responde em menos de 1h" }, { icon: "📍", text: "Zona Norte, Rio de Janeiro" }].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 mb-2 text-[13px] text-[#555]">
                <span>{icon}</span>
                {text}
              </div>
            ))}
          </div>
  );
};
