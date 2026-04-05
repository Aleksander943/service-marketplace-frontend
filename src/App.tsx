import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes';
import './App.css';

export function App() {
return (
<BrowserRouter>
<AppRoutes />
</BrowserRouter>
);
}