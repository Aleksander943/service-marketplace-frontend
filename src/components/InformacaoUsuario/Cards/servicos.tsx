type services = {
    id: number;
    title: string;
    description?: string | null;
    price: string | number;
    category?: string | null;
  }

export const ServicesUser = ({ usuario, serviceCount }: any) => {
  return (
    <div>
      <div className="flex justify-between items-center px-6 py-4 border-b border-[#ebebeb]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#aaa]">
          Serviços publicados
        </p>
        <span className="text-2xl text-[#aaa] cursor-pointer">+</span>
      </div>
      {serviceCount === 0 ? (
        <div className="p-6 text-center">
          <div className="text-3xl">📦</div>
          <p className="text-sm text-[#aaa] mt-3">
            Nenhum serviço publicado ainda
          </p>
          <button className="mt-3 bg-[#1a1a1a] text-white rounded-md px-4 py-2">
            Publicar primeiro serviço
          </button>
        </div>
      ) : (
        <div>
          {usuario?.services.map(
            (service: services) => (
              <div
                key={service.id}
                className="flex items-center gap-3 px-6 py-4 border-b border-[#ebebeb]"
              >
                <div className="w-16 h-12 bg-[#cdd3df] rounded-md" />
                <div>
                  <p className="text-sm font-medium text-[#111]">
                    {service.title}
                  </p>
                  <p className="text-xs text-[#aaa]">R$ {service.price}</p>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};
