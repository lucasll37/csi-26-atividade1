import { AdminWrapper } from "./styles";
import adminImg from "../../assets/admin.jpg";

export function Admin() {
    return (
        <AdminWrapper>
            <img src={adminImg} />
            <main>
                <h1>Administradores</h1>
                <p>
                    lorens ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </main>
        </AdminWrapper>
    )
}