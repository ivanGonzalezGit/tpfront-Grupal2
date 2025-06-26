import styled from "styled-components";

export default function Bitacora() {

    const BitacoraWrapper = styled.div`
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
    
    @media (max-width: 600px) {
    padding: 16px;
    margin: 20px 10px;
    }
    `;

    const Section = styled.section`
    margin-bottom: 32px;
    
    @media (max-width: 600px) {
    margin-bottom: 24px;
    }
    `;

    const SectionTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 12px;
    color: #2c3e50;
    
    @media (max-width: 600px) {
    font-size: 1.25rem;
    }
    `;

    const Paragraph = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    
    @media (max-width: 600px) {
    font-size: 0.95rem;
    }
    `;

    const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    
    @media (max-width: 600px) {
    font-size: 0.9rem;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    }
    `;

    const Th = styled.th`
    background-color: #f0f0f0;
    color: #333;
    padding: 10px;
    text-align: left;
    
    @media (max-width: 600px) {
    padding: 8px;
    }
    `;

    const Td = styled.td`
    color: #333;
    border-top: 1px solid #ddd;
    padding: 10px;
    
    @media (max-width: 600px) {
    padding: 8px;
    }
    `;

  return (
    <BitacoraWrapper>
      <Section>
        <SectionTitle>Roles de cada integrante</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Nombre</Th>
              <Th>Rol</Th>
              <Th>Responsabilidades</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Santiago Sandoval</Td>
              <Td>Frontend</Td>
              <Td>Componentes</Td>
            </tr>
            <tr>
              <Td>Selene Noma</Td>
              <Td>Frontend</Td>
              <Td>Estilos</Td>
            </tr>
            <tr>
              <Td>Ivan Gonzáles</Td>
              <Td>Backend</Td>
              <Td>Integración de la API</Td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section>
        <SectionTitle>Organización del equipo</SectionTitle>
        <Paragraph>
          Comunicación por WhatsApp y reuniones semanales por Meet.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Metodología de trabajo</SectionTitle>
        <Paragraph>
          Usamos Git y GitHub para el control de versiones. Tenemos reuniones diarias cortas por chat y una semanal más larga para planificación.
        </Paragraph>
      </Section>
    </BitacoraWrapper>
  );
}