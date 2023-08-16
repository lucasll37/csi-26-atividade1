import { GuestWrapper } from "./styles";
import guestImg from "../../assets/school.jpg";

export function Guest() {
    return (
        <GuestWrapper>
            <img src={guestImg} />
            <main>
                <h1>Visitantes</h1>
                <p>
                    lorens ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </main>
        </GuestWrapper>
    )
}