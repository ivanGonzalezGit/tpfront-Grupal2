import React, { useState, useEffect } from 'react';

function Peliculas() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonfakery.com/movies/random/20')
            .then(res => {
                if (!res.ok) throw new Error('Error al cargar las películas');
                return res.json();
            })
            .then(peliculas => {
                setData(peliculas.slice(0, 20));
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px",
            flexWrap: "wrap"
        }}>
            {data.map((pelicula) => (
                <div key={pelicula.id} style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    width: "200px",
                    textAlign: "center",
                    borderRadius: "8px"
                }}>
                    <img
                        src={pelicula.poster_path}
                        alt={pelicula.original_title}
                        style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "4px" }}
                    />
                    <h3>{pelicula.original_title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#555" }}>{pelicula.overview}</p>
                </div>
            ))}
        </section>
    );
}

export default Peliculas;