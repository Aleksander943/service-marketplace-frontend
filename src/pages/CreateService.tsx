import { NavBar } from "@/components/NavBar/navBar";
import { CreateServiceView } from "@/components/CriarServico/pageServices";

export function CreateService() {
  return (
    <div className="min-h-screen bg-[#171717] pb-6">
      <NavBar />
      <CreateServiceView />
    </div>
  );
}