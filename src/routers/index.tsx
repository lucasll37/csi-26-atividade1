import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout/default";

import { AdminRouter } from "./admin";
import { StudantRouter } from "./studant";
import { GuestRouter } from "./guest";
import { HomeRouter } from "./home";
import { TeacherRouter } from "./teacher";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="*" element={<HomeRouter />} />
                <Route path="/admin/" element={<AdminRouter />} />
                <Route path="/guest/" element={<GuestRouter />} />
                <Route path="/studant/" element={<StudantRouter />} />
                <Route path="/teacher/" element={<TeacherRouter />} />
            </Route>
        </Routes>
    )

}