import { NavBar } from "@/components/NavBar/navBar";
import { ServicesBoard } from "@/components/Dashboard/servicesBoard";
import { ServiceFilter } from "@/components/NavBar/Filter/serviceFilter";

export function Dashboard(){
    return(
        <div className="min-h-screen bg-[#ececea] pb-6">
            <NavBar/>
            <ServiceFilter />
            <ServicesBoard />
        </div>
    )
};
