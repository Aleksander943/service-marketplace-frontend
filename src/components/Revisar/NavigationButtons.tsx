import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const NavigationButtons = () => {
  const navigator = useNavigate();

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        type="button"
        onClick={() => navigator(-1)}
        variant="outline"
        className="rounded-xl border-[#dedad0] bg-transparent text-[#4a4a44] hover:bg-[#efece3] hover:text-[#1a1a18]"
      >
        Voltar
      </Button>
      <Button
        type="button"
        variant="outline"
        className="rounded-xl border-[#dedad0] bg-[#efece3] text-[#4a4a44] hover:bg-[#e8e4d8] hover:text-[#1a1a18]"
      >
        Salvar rascunho
      </Button>
    </div>
  );
};

export default NavigationButtons;