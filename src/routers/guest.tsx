import { Routes, Route } from "react-router-dom";
import { Guest } from "../pages/Guest"

export function GuestRouter() {
    return (
        <Routes>
            <Route path="*" element={<Guest />} />
        </Routes>
    )
}