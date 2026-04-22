import { Button } from "../ui/button";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { CadastroSchema } from "./schema/CadastroSchema";
import { z } from "zod"
import { useState } from "react";
import { Link, useNavigate } from "react-router";

type Cadastrotype = z.infer<typeof CadastroSchema>

export const FormCadastro = () => {
  const [selectedRole, setSelectedRole] = useState<"CLIENTE" | "PRESTADOR">("CLIENTE");
  const { register, handleSubmit, setValue } = useForm({
    resolver:zodResolver(CadastroSchema),
  });

  const navigate = useNavigate();

  const handleSubmitCadastro = async(data: Cadastrotype) =>{    
    try{
      const res = await fetch('http://localhost:8080/cadastro',{
        method: "POST",
        headers: {
          "content-Type" : "application/json",
        },
        body:JSON.stringify(data)
      });

      const resultado = await res.json();

      if(res.ok){
          alert("Cadastrado com sucesso")
          navigate("/login")
          }else{
            alert("Erro no servidor: " + resultado.message);
          }
    } catch (error) {
    console.error("Erro de rede:", error);
  }
  };

  const fieldClass =
    "h-10 w-full rounded-xl border border-zinc-200 bg-white/70 px-3 text-sm outline-none transition focus:border-zinc-900";

  return (
    <div className="rounded-xl text-sm">
      <form onSubmit={handleSubmit(handleSubmitCadastro)}>
        <div className="gap-5 mb-5 grid grid-cols-2 rounded-xl bg-zinc-100 p-1 text-sm">
          <button
            type="button" 
            onClick={() => {
              setValue("role", "CLIENTE");
              setSelectedRole("CLIENTE");
            }}
            className={`rounded-lg py-2  transition ${selectedRole === "CLIENTE" ? "bg-white" : "text-zinc-500"}`}
          >
            Cliente
          </button>
          <button
            type="button"
            onClick={() => {
              setValue("role", "PRESTADOR");
              setSelectedRole("PRESTADOR");
            }}
            className={`rounded-lg py-2 transition ${selectedRole === "PRESTADOR" ? "bg-white" : "text-zinc-500"}`}
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

          <Button
            type="submit"
            className="h-10 w-full rounded-xl bg-zinc-900 hover:bg-zinc-800"
          >
            Cadastrar-se
          </Button>
        </div>
      </form>

      <Link 
      to={"/login"}
      className="text-zinc-600 m-t-4 block text-center text-sm mt-4">
        Já tem conta?
      </Link>
    </div>
  );
};

