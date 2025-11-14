import { Link } from "react-router-dom";
import { obtenerResenasPorJuego, agregarResena } from "../api/Resenas";


function GameCard({ juego }) {
  return (
    <div className="game-card">
    
      <h3>{juego.titulo}</h3>
      <p>{juego.descripcion}</p>

      <Link to={`/gamedetails/${juego._id}`} className="ver-resenas">
        Ver reseñas
      </Link>
    </div>
  );
}

export default GameCard;
