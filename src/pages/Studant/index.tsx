import { StudantWrapper } from "./styles";
import studantImg from "../../assets/studant.jpg";

export function Studant() {
    return (
        <StudantWrapper>
            <img src={studantImg} />
            <main>
                <h1>Estudantes</h1>
                <p>
                    lorens ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </main>
        </StudantWrapper>
    )
}