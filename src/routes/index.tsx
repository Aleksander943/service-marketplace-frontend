import { Routes, Route } from 'react-router';
import { Cadastro } from '../pages/Cadastro';
import { Login } from '../pages/Login';

export function AppRoutes() {
return (
<Routes>
<Route path="/" element={<div>Página Inicial</div>} />
<Route path="/cadastro" element={<Cadastro />} />
<Route path="/login" element={<Login />}/>
</Routes>
);
}