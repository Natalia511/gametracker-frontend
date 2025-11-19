import { useEffect, useState } from "react";
import { obtenerJuegos } from "../api/juegos";
import GameCard from "../componentes/gamecard";

function Inicio() {
  const [juegos, setJuegos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarJuegos = async () => {
      try {
        const data = await obtenerJuegos();
        console.log("🎮 Juegos cargados:", data);
        setJuegos(data);
      } catch (error) {
        console.error("❌ Error al cargar los juegos:", error);
      } finally {
        setCargando(false);
      }
    };
    cargarJuegos();
  }, []);

  if (cargando) return <p>Cargando juegos...</p>;

  return (
    <div className="games-container">
      {juegos.length === 0 ? (
        <p>No hay juegos disponibles.</p>
      ) : (
        juegos.map((juego) => (
          <GameCard key={juego._id} juego={juego} />
        ))
      )}
    </div>
  );
}

export default Inicio;

