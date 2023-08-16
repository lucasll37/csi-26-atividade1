import { Routes, Route } from "react-router-dom";
import { Teacher } from "../../pages/Teacher";

export function TeacherRouter() {
    return (
        <Routes>
            <Route index element={<Teacher />} />
        </Routes>
    )
}