import styled from "styled-components"

export const HomeWrapper = styled.div`
    height: 100%;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: ${props => props.theme.i};

    img {
        height: 100%;
        width: 100%;
        border-radius: 8px;
        object-fit: contain;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`;