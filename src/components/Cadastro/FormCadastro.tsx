import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CadastroSchema } from "./schema/CadastroSchema";
import { z } from "zod";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BadgeWithSpinner } from "../Loading/Loading";

type Cadastrotype = z.infer<typeof CadastroSchema>;

export const FormCadastro = () => {
  const [selectedRole, setSelectedRole] = useState<"CLIENTE" | "PRESTADOR">(
    "CLIENTE",
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(CadastroSchema),
  });

  const navigate = useNavigate();

  const handleSubmitCadastro = async (data: Cadastrotype) => {
    try {
      const res = await fetch("http://localhost:8080/cadastro", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resultado = await res.json();

      if (res.ok) {
        alert("Cadastrado com sucesso");
        navigate("/login");
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
    <div className="rounded-xl text-sm text-white">
      <form onSubmit={handleSubmit(handleSubmitCadastro)}>
        <div className="mb-5 grid grid-cols-2 gap-5 rounded-xl bg-[#2a2a2a] p-1 text-sm">
          <button
            type="button"
            onClick={() => {
              setValue("role", "CLIENTE");
              setSelectedRole("CLIENTE");
            }}
            className={`rounded-lg py-2 transition ${selectedRole === "CLIENTE" ? "bg-[#1f1f1f] text-white" : "text-white/60"}`}
          >
            Cliente
          </button>
          <button
            type="button"
            onClick={() => {
              setValue("role", "PRESTADOR");
              setSelectedRole("PRESTADOR");
            }}
            className={`rounded-lg py-2 transition ${selectedRole === "PRESTADOR" ? "bg-[#1f1f1f] text-white" : "text-white/60"}`}
          >
            Prestador
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <input
            id="name"
            type="text"
            placeholder="Nome"
            required
            className={fieldClass}
            {...register("nome")}
          />
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
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirmação da Senha"
            required
            className={fieldClass}
            {...register("confirmPassword")}
          />

          {isSubmitting ? (
            <div className="h-10 w-full rounded-xl bg-sky-500/90">
              <BadgeWithSpinner />
            </div>
          ) : (
            <Button
              type="submit"
              className="h-10 w-full rounded-xl bg-sky-500 text-zinc-950 hover:bg-sky-400"
            >
              Cadastrar-se
            </Button>
          )}
        </div>
      </form>

      <Link
        to={"/"}
        className="m-t-4 mt-4 block text-center text-sm text-sky-300 hover:text-sky-200"
      >
        Já tem conta?
      </Link>
    </div>
  );
};
