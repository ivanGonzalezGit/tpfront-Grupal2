import React, { useEffect, useState } from "react";

function Animales() {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    fetch("/animales.json")
      .then((res) => res.json())
      .then((data) => setAnimales(data))
      .catch((err) => console.error("Error al leer el JSON:", err));
  }, []);

  return (
    <div>
      <h3>Animales</h3>
      <ul>
        {animales.map((a) => (
          <li key={a.id}>{a.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Animales;