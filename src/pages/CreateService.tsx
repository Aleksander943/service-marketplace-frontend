import { NavBar } from "@/components/NavBar/navBar";
import { CreateServiceView } from "@/components/CriarServico/pageServices";

export function CreateService() {
  return (
    <div className="min-h-screen bg-[#ececea] pb-6">
      <NavBar />
      <CreateServiceView />
    </div>
  );
}