import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Integrantes() {

    const ContainerWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        padding: 20px;
    `;
    
    const Card = styled.div`
        background-color: #333;
        padding: 20px;
        width: 300px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        flex-shrink: 0;
    `;
    const CardImage = styled.img`
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 16px;
        object-fit: cover;
    `;

    const StyledLink = styled(Link)`
        display: block;
        padding: 10px 16px;
        text-decoration: none;
        color: #DDD;
        background-color: steelblue;

        &:hover {
            background-color: #f0f0f0;
            color: #808080;
        }
    `;

    return(
        <ContainerWrapper>
            <Card>
                <CardImage src="/pfp.png" alt="pfp" />
                <div>
                    <h3>Santiago Sandoval</h3>
                    <StyledLink to="/IntegranteSantiago">Conocer más</StyledLink>
                </div>
            </Card>
            <Card>
                <CardImage src="/pfp.png" alt="pfp" />
                <div>
                    <h3>Ivan González</h3>
                    <StyledLink to="/IntegranteIvan">Conocer más</StyledLink>
                </div>
            </Card>
            <Card>
                <CardImage src="/pfp.png" alt="pfp" />
                <h3>Selene Noma</h3>
                <StyledLink to="/IntegranteSelene">Conocer más</StyledLink>
            </Card>
        </ContainerWrapper> 
    );
}

export default Integrantes;