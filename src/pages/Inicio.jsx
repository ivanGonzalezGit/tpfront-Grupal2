import React from "react";
import styled from "styled-components";
import UncontrolledExample from "../components/carousel";


function Inicio() {

    const Div = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    
    return(
            <Div>
                <h1>Bienvenido!</h1>
                <UncontrolledExample />
            </Div>
    );
}

export default Inicio;