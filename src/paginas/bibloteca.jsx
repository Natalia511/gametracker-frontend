import { useEffect, useState } from "react";
import "../paginas/bibloteca.css";

function Biblioteca() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("biblioteca")) || [];
    console.log("Biblioteca cargada:", data); 
    setJuegos(data);
  }, []);

  return (
    <div>
      <h2 className="bibloteca">Mi Biblioteca</h2>

      {juegos.length === 0 ? (
        <p>No has agregado juegos aún.</p>
      ) : (
        juegos.map((juego) => (
          <div key={juego._id} className="game-card-biblioteca">
            <img src={juego.imagen} alt={juego.titulo} className="imagenes" />
            <h3>{juego.titulo}</h3>
            <p>{juego.descripcion}</p>

            <botton className="boton-eliminar" onClick={() => {
              const actualizados = juegos.filter((j) => j._id !== juego._id);
              setJuegos(actualizados);
              localStorage.setItem("biblioteca", JSON.stringify(actualizados));
            }}>
              Eliminar de mi biblioteca
            </botton>  
          </div>
        ))
      )}
    </div>
  );
}

export default Biblioteca;
