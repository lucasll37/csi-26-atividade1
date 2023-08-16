import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout/default";

import { AdminRouter } from "./sections/admin";
import { StudantRouter } from "./sections/studant";
import { GuestRouter } from "./sections/guest";
import { TeacherRouter } from "./sections/teacher";

import { Home } from "../pages/Home";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="/admin/*" element={<AdminRouter />} />
                <Route path="/guest/*" element={<GuestRouter />} />
                <Route path="/studant/*" element={<StudantRouter />} />
                <Route path="/teacher/*" element={<TeacherRouter />} />
            </Route>
        </Routes>
    )

}