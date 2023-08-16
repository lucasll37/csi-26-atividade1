import styled from "styled-components";


export const HandlebarContainer = styled.div`
  width: 100%;
  height: 70px;
  background: ${props => props.theme["b"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  border-radius: 8px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Menu = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;