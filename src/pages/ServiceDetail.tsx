import { Anuncio } from "@/components/DetalheService/Anuncio";
import { Avaliacao } from "@/components/DetalheService/Avaliacao";
import { InformacaoPrestador } from "@/components/DetalheService/Informacao_Prestador";
import { InformacaoValor } from "@/components/DetalheService/InformacaoValor";
import { NavBar } from "@/components/NavBar/navBar";
import { detalheServices } from "@/services/Api_DetalheServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Service {
  title: string;
  description: string;
  price: string;
}


export default function ServiceDetail() {

const [infor, setInfor] = useState<Service | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const informacao = async () => {
      const response = await detalheServices(id);
      setInfor(response.data)
    };

    if (id) {
      informacao();
    }
  }, [id]);

  return (
    <div className="font-sans bg-[#f0eff0] min-h-screen">
      <NavBar />
      {infor && (
        <div className="mx-auto max-w-[960px] px-4 py-6 grid grid-cols-[1fr_300px] gap-5">
        <div className="flex flex-col gap-4">
          <Anuncio titulo={infor.title} descricao={infor.description}  />
          <Avaliacao />
        </div>
        <div className="flex flex-col gap-4">
         <InformacaoValor valor={infor.price}/>
          <InformacaoPrestador />
        </div>
      </div>
      )}
    </div>
  );
}
