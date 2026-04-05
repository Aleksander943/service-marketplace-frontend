import { Routes, Route } from 'react-router';
import { Cadastro } from '../pages/Cadastro';

export function AppRoutes() {
return (
<Routes>
<Route path="/" element={<div>Página Inicial</div>} />
<Route path="/cadastro" element={<Cadastro />} />
</Routes>
);
}