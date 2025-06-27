import React from "react";
import styled from "styled-components";
import Carousel from "../components/Carousel";

function Inicio() {

    
const imageList = [
  './images/foto_1.png',
  './images/foto_2.jpg',
  './images/foto_3.png'
];

    const Div = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    
    return(
            <Div>
                <h1>Bienvenido!</h1>
                <h3>Somos el nexo entre tu nuevo amigo y vos</h3>
                <Carousel images={imageList} />
            </Div>
    );
}

export default Inicio;