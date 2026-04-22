const serviceCategories = [
  "Todos",
  "Limpeza",
  "Elétrica",
  "Pintura",
  "Encanamento",
  "Jardinagem",
  "Reformas",
  "Informática",
  "Aulas",
]

export function ServiceFilter() {
  const activeCategory = "Todos"

  return (
    <div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max items-center gap-2 px-2 py-2">
        {serviceCategories.map((category) => {
          const isActive = category === activeCategory

          return (
            <button
              key={category}
              type="button"
              className={[
                "inline-flex h-8 shrink-0 items-center rounded-full border px-4 text-sm font-semibold transition-colors ",
                isActive
                  ? "border-[#5969ff] bg-[#5969ff] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_18px_rgba(89,105,255,0.35)]"
                  : "border-white/15 bg-[#2b2b2b] text-white/90 hover:bg-[#323232]",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}
