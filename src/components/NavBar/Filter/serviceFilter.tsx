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
    <div className="border-b border-[#cecec6] bg-[#f4f4f1] px-7">
      <div className="mx-auto max-w-[1280px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center">
        {serviceCategories.map((category) => {
          const isActive = category === activeCategory

          return (
            <button
              key={category}
              type="button"
              className={[
                "h-11 border-b-2 px-[18px] text-[13.5px] transition-colors",
                isActive
                  ? "border-[#1a1a18] font-medium text-[#1a1a18]"
                  : "border-transparent font-normal text-[#7e7e74] hover:text-[#1a1a18]",
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
