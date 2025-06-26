import styled from "styled-components";

export const IntegrantesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IntegrantesSeccion = styled.div`
    border: 3px solid whitesmoke;
    width: 33%;
    margin: 5px;
    background-color: steelblue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 80%;
    }
`;