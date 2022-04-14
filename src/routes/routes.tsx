import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Login } from "../pages/Login";

export const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>

    )
}