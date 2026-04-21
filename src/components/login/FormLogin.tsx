import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./schema/FormLoginSchema";
import { z } from "zod";
import { Link, useNavigate } from "react-router";

type LoginTypes = z.infer<typeof LoginSchema>;

export const FormLogin = () => {
  const { register, handleSubmit } = useForm({
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
        alert("logado com sucesso!");
        navigate("/dashboard");
      } else {
        alert("Erro no servidor: " + resultado.message);
      }
    } catch (error) {
      console.error("Erro de rede:", error);
    }
  };
  const fieldClass =
    "h-10 w-full rounded-xl border border-zinc-200 bg-white/70 px-3 text-sm outline-none transition focus:border-zinc-900";

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
          <Button
            type="submit"
            className="h-10 w-full rounded-xl bg-zinc-900 hover:bg-zinc-800"
          >
            Fazer login
          </Button>
        </div>
      </form>
       <Link 
        to={"/cadastro"} 
        className="text-zinc-600">
          Ainda não tem conta ?
        </Link>
    </div>
  );
};
