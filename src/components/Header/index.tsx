import { NavLink } from "react-router-dom";
import { HandlebarContainer, Logo, Menu } from "./style";

export function Header() {
    return (
        <HandlebarContainer>
        <Logo>Centro Ed. 02 de Sobradinho/DF</Logo>
        <Menu>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/studant">Alunos</NavLink>
          <NavLink to="/teacher">Professores</NavLink>
          <NavLink to="/admin">Administração</NavLink>
          <NavLink to="/guest">Visitante Externo</NavLink>
        </Menu>
      </HandlebarContainer>
    )
}