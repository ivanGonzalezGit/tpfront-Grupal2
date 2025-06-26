import styled from "styled-components";

export const PerfilWrapper = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
`;

export const Nombre = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 32px;
`;

export const Seccion = styled.section`
  margin-bottom: 32px;

  h2 {
    font-size: 1.5rem;
    color: #34495e;
    margin-bottom: 16px;
  }
`;

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ListaItem = styled.li`
  background-color: #ecf0f1;
  color: #333;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.95rem;
`;

export const ProyectosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProyectoCard = styled.div`
  flex: 1 1 300px;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const ProyectoTitulo = styled.h3`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

export const ProyectoDescripcion = styled.p`
  font-size: 0.95rem;
  color: #555;
`;