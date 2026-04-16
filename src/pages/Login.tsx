import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormLogin } from "@/components/login/FormLogin";

export function Login() {
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <Card className="w-full max-w-sm rounded-2xl border-zinc-200 bg-gradient-to-b from-white to-zinc-50 shadow-xl">
        <CardHeader className="mb-4 border-b border-zinc-200">
          <CardTitle className="text-center text-xl font-semibold tracking-tight">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <FormLogin />
        </CardContent>
      </Card>
    </div>
  );
}
