import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Symbols from "./pages/Symbols";
import Dashboard from "./pages/Dashboard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="symbols" element={<Symbols />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
