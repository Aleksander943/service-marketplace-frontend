import { Spinner } from "@/components/ui/spinner";
import { Badge } from "@/components/ui/badge";

export const LoadingPage = () => {
  return (
    <div>
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        Carregando
      </Badge>
    </div>
  );
};
