import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Integrantes from "../pages/integrantes";
import IntegranteSantiago from "../pages/IntegranteSantiago";
import IntegranteIvan from "../pages/IntegranteIvan"
import IntegranteSelene from "../pages/IntegranteSelene"
import Animales from "../pages/Animales";
import Peliculas from "./PeliculasAPI";
import Bitacora from "../pages/bitacora";

function Container() {

    const Container = styled.div`
        flex: 1;
        padding: 20px;
        overflow-y: auto;
    `;

    return(
        <Container>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/integrantes" element={<Integrantes />}/>
                <Route path="/IntegranteSantiago" element={<IntegranteSantiago/>}/>
                <Route path="/IntegranteIvan" element={<IntegranteIvan/>}/>
                <Route path="/IntegranteSelene" element={<IntegranteSelene/>}/>
                <Route path="/animales" element={<Animales />}/>
                <Route path="/peliculas" element={<Peliculas />}/>
                <Route path="/bitacora" element={<Bitacora />}/>
            </Routes>
        </Container>
    );
}

export default Container;