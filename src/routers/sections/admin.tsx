import { Routes, Route } from "react-router-dom";
import { Admin } from "../../pages/Admin"

export function AdminRouter() {
    return (
        <Routes>
            <Route index element={<Admin />} />
        </Routes>
    )
}