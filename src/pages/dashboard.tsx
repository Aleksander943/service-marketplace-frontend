import { NavBar } from "@/components/NavBar/navBar";
import { ServicesBoard } from "@/components/Dashboard/servicesBoard";
import { ServiceFilter } from "@/components/NavBar/Filter/serviceFilter";

export function Dashboard(){
    return(
        <div className="min-h-screen bg-[#ececea] pb-8">
            <NavBar/>
            <main className="w-full px-6">
                <div className="mt-5">
                    <ServiceFilter />
                    <ServicesBoard />
                </div>
            </main>
        </div>
    )
};
