import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./schema/FormLoginSchema";
import { z } from "zod";
import { Link, useNavigate} from "react-router";
import { BadgeWithSpinner } from "../Loading/Loading";
import { loginRequest } from "@/services/auth";

type LoginTypes = z.infer<typeof LoginSchema>;

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const navigate = useNavigate();

const handleSubmitLogin = async (data: LoginTypes) => {
  try {
    const { data: response } = await loginRequest(data);

    const { token } = response;

    localStorage.setItem("token", token);

    navigate("/dashboard");

  } catch (error: any) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      console.error("Erro de rede:", error);
    }
  }
};

  const fieldClass =
    "h-10 w-full rounded-xl border border-[#cecec6] bg-[#e7e7e1] px-3 text-sm text-[#1a1a18] placeholder:text-[#7e7e74] outline-none transition focus:border-[#1a1a18]";

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitLogin)}>
        <div className="flex flex-col gap-3">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            required
            className={fieldClass}
            {...register("email")}
          />
          <input
            id="password"
            type="password"
            placeholder="Senha"
            required
            className={fieldClass}
            {...register("password")}
          />

          {isSubmitting ? (
            <div
            className="h-10 w-full rounded-xl bg-[#2350d4]">
            <BadgeWithSpinner />
            </div>
          ) : (
            <Button
              type="submit"
              className="h-10 w-full rounded-xl bg-[#1a1a18] text-[#fdfcf8] hover:bg-[#333333]"
            >
              Fazer login
            </Button>
          )}
        </div>
      </form>
      <Link to={"/cadastro"} className="m-t-4 mt-4 block text-center text-sm text-[#2350d4] hover:text-[#1a1a18]">
        Ainda não tem conta ?
      </Link>
    </div>
  );
};
