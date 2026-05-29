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
    <div className="border-b border-[#d8d4c9] bg-[#fcfbf7]">
      <div className="overflow-x-auto px-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center">
        {serviceCategories.map((category) => {
          const isActive = category === activeCategory

          return (
            <button
              key={category}
              type="button"
              className={[
                "h-11 border-b-2 px-4 text-[13px] transition-colors",
                isActive
                  ? "border-[#1a1a18] font-medium text-[#1a1a18]"
                  : "border-transparent font-normal text-[#7a776f] hover:text-[#1a1a18]",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {category}
            </button>
          )
        })}
        </div>
      </div>
    </div>
  )
}
