import { Routes, Route } from "react-router-dom";
import { Studant } from "../../pages/Studant";

export function StudantRouter() {
    return (
        <Routes>
            <Route index element={<Studant />} />
        </Routes>
    )
}