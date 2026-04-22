import { Routes, Route } from 'react-router';
import { Cadastro } from '../pages/Cadastro';
import { Login } from '../pages/Login';
import { Dashboard } from '@/pages/dashboard';

export function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Login />} />
<Route path="/cadastro" element={<Cadastro />} />
<Route path="/dashboard" element={<Dashboard />}/>
</Routes>
);
}