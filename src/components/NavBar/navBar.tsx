import { Button } from "../ui/button";
import { Search } from "./Search/search";

export function NavBar() {
  return (
    <div>
      <div className="m-3 flex items-center rounded-lg bg-gray-600 px-10 text-white">
        <h1>ServiçosJá</h1>
        <Search />
        <Button className="">Anunciar Serviço</Button>
      </div>
    </div>
  );
}