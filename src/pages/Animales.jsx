import React, { useEffect, useState } from "react";
import "./Animales.css"; 

function Animales() {
  const [animales, setAnimales] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [especieSeleccionada, setEspecieSeleccionada] = useState("Todas");

useEffect(() => {
  fetch("/animales.json")
    .then((res) => res.json())
    .then((data) => {

      const normalizados = data.map((a) => ({
        ...a,
        especie: a.especie.charAt(0).toUpperCase() + a.especie.slice(1).toLowerCase()
      }));
      setAnimales(normalizados);
    })
    .catch((err) => console.error("Error al leer el JSON:", err));
}, []);


  
  const animalesFiltrados = animales.filter((a) => {
    const coincideNombre = a.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEspecie = especieSeleccionada === "Todas" || a.especie === especieSeleccionada;
    return coincideNombre && coincideEspecie;
  });

  const especies = [...new Set(animales.map((a) => a.especie))];

return (
  <div className="animales-contenedor">
    <h3>Animales</h3>

    
    <input
      type="text"
      placeholder="Buscar por nombre..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="buscador"
    />

   
    <select
      value={especieSeleccionada}
      onChange={(e) => setEspecieSeleccionada(e.target.value)}
      className="filtro"
    >
      <option value="Todas">Todas</option>
      {especies.map((especie, idx) => (
        <option key={idx} value={especie}>
          {especie}
        </option>
      ))}
    </select>

    
    <div className="tarjetas">
      {animalesFiltrados.map((a) => (
        <div className="tarjeta-animal" key={a.id}>
          <h4>{a.nombre}</h4>
          <p>Especie: {a.especie}</p>
          <p>Edad: {a.edad} años</p>
        </div>
      ))}
    </div>
  </div>
);

}

export default Animales;
