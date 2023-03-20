import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePagina from "./pages/BasePagina";
import Dashboard from "./pages/Dashboard";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaInicial from "./pages/PaginaInicial";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePagina />}>
                    <Route index element={<PaginaInicial />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;