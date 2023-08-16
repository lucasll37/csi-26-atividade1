import { TeacherWrapper } from "./styles";
import teacherImg from "../../assets/teacher.jpg";

export function Teacher() {
    return (
        <TeacherWrapper>
            <img src={teacherImg} />
            <main>
                <h1>Professores</h1>
                <p>
                    lorens ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </main>
        </TeacherWrapper>
    )
}