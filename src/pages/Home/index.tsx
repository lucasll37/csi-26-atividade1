import { HomeWrapper } from "./styles";
import homeImg from "../../assets/school2.jpg";

export function Home() {
    return (
        <HomeWrapper>
            <img src={homeImg} />
            <main>
                <h1>Página inicial</h1>
                <p>
                    lorens ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </main>
        </HomeWrapper>
    )
}