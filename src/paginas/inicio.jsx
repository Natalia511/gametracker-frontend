import { useEffect, useState } from "react";
import { obtenerJuegos } from "../api/juegos.js";
import GameCard from "../componentes/GameCard.jsx";

function Inicio() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const cargarJuegos = async () => {
      try {
        const data = await obtenerJuegos();
        console.log("Datos recibidos:", data);
        setJuegos(data);


      } catch (error) {
        console.error("Error al obtener los juegos:", error);
      }
    };
    cargarJuegos();
  }, []);

  return (
    <div className="inicio">
      <h2>Juegos disponibles</h2>
      <div className="juegos-grid">
        {juegos.map((juego) => (
          <GameCard key={juego._id} juego={juego} />
        ))}
      </div>
    </div>
  );
}

export default Inicio;
