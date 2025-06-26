import React, { useState } from 'react'
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Container from './components/Container';

function App() {

  const MainDiv = styled.div`
    display: flex;
    height: 100vh;
  `;
  const MenuButton = styled.button`
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 2000;
    background: #2c3e50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  `;


  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MainDiv>
        <BrowserRouter>
          <MenuButton onClick={() => setSidebarOpen((open) => !open)}>
            ☰
          </MenuButton>
          <Sidebar isOpen={sidebarOpen}/>
          <Container/>
        </BrowserRouter>
      </MainDiv>
    </>
  );
}

export default App;
