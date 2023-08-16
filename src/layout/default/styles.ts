import styled from "styled-components";

export const LayoutWrapper = styled.div`
    max-width: 78rem;
    height: calc(100vh - 3rem);
    margin: 1rem auto;
    padding: 1rem;

    background: ${props => props.theme["a"]};
    border-radius: 8px;

    display: flex;
    gap: 0.5rem;
    flex-direction: column;

`