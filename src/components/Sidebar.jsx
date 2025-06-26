import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
const SidebarContainer = styled.div`
  background-color: #2c3e50;
  color: #DDD;
  padding: 20px 0;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
`;



  const SidebarList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
  `;

  const ListElement = styled.li`
    margin: 2px 2px 0 0;
    text-align: center;
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

  return (
    <SidebarContainer isOpen={isOpen}>
      <div>
        <img src="public/HuellitasFelices.png" alt="React logo" style={{ width: "245px" }} />
      </div>
      <nav>
        <SidebarList>
          <ListElement><StyledLink to="/">Inicio</StyledLink></ListElement>
          <ListElement><StyledLink to="/integrantes">Integrantes</StyledLink></ListElement>
          <ListElement><StyledLink to="/animales">Animales</StyledLink></ListElement>
          <ListElement><StyledLink to="/peliculas">Peliculas</StyledLink></ListElement>
          <ListElement><StyledLink to="/bitacora">Bitácora</StyledLink></ListElement>
        </SidebarList>
      </nav>
    </SidebarContainer>
  );
}

export default Sidebar;
