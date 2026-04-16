import { Button } from "../ui/button";
import { Search } from "./Search/search";

export function NavBar(){
    return(
        <div>
            <div className="flex items-center m-3 px-10 rounded-lg bg-gray-600 text-white">
                <h1>ServiçosJá</h1>
                <Search />
                <Button
                className=""
                >
                    Anunciar Serviço
                </Button>
            </div>
        </div>
    );
};