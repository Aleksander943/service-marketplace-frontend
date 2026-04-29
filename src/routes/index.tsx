import { Routes, Route } from "react-router";
import { Cadastro } from "../pages/Cadastro";
import { Login } from "../pages/Login";
import { Dashboard } from "@/pages/dashboard";
import { CreateService } from "@/pages/CreateService";
import { PrivateRouter } from "./PrivateRoute";

import PublicarServico from "@/pages/PublicarServico";
import { RevisarService } from "@/pages/RevisarService";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route element={<PrivateRouter />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/servicos/novo" element={<CreateService />} />
        <Route path="/servicos/revisar" element={<RevisarService />} />
        <Route path="/servicos/publicar" element={<PublicarServico />} />
      </Route>
    </Routes>
  );
}
