import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAppContext } from "./contexts/AppContext";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Simbolos } from "./pages/Simbolos";
import { Usuarios } from "./pages/Usuarios";
import { Configuracoes } from "./pages/Configuracoes";
import { Automacoes } from "./pages/Automacoes";
import { Ordens } from "./pages/Ordens";

export function Router() {
  const { user } = useAppContext();

  function logar() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </BrowserRouter>
    );
  }

  function rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="automacoes" element={<Automacoes />} />
            <Route path="ordens" element={<Ordens />} />
            <Route path="simbolos" element={<Simbolos />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="configuracoes" element={<Configuracoes />} />
          </Route>
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return user ? rotas() : logar();
}
