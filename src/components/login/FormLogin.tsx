import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./schema/FormLoginSchema";
import { z } from "zod";
import { Link, useNavigate} from "react-router";
import { BadgeWithSpinner } from "../Loading/Loading";

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
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resultado = await res.json();

      if (res.ok) {
        navigate("/dashboard");
      } else {
        alert("Erro no servidor: " + resultado.message);
      }
    } catch (error) {
      console.error("Erro de rede:", error);
    }
  };
  const fieldClass =
    "h-10 w-full rounded-xl border border-white/12 bg-[#2a2a2a] px-3 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-sky-400";

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
            className="h-10 w-full rounded-xl bg-sky-500/90">
            <BadgeWithSpinner />
            </div>
          ) : (
            <Button
              type="submit"
              className="h-10 w-full rounded-xl bg-sky-500 text-zinc-950 hover:bg-sky-400"
            >
              Fazer login
            </Button>
          )}
        </div>
      </form>
      <Link to={"/cadastro"} className="m-t-4 mt-4 block text-center text-sm text-sky-300 hover:text-sky-200">
        Ainda não tem conta ?
      </Link>
    </div>
  );
};
