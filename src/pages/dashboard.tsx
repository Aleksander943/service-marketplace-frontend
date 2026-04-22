import { NavBar } from "@/components/NavBar/navBar";
import { ServicesBoard } from "@/components/Dashboard/servicesBoard";

export function Dashboard(){
    return(
        <div className="min-h-screen bg-[#171717] pb-6">
            <NavBar/>
            <ServicesBoard />
        </div>
    )
};
