import { Link } from "react-router-dom";


function GameCard({ juego }) {
  return (
    <div className="game-card">
      {juego.imagen && (
        <img
          src={`http://localhost:3000${juego.imagen}`}
          alt={juego.titulo}
          className="game-image"
        />
      )}
      <img src={juego.imagen} alt={juego.titulo} className="game-image" />


      <h3>{juego.titulo}</h3>
      <p>{juego.descripcion}</p>

      <Link to={`/gamedetails/${juego._id}`} className="ver-resenas">
        Ver reseñas
      </Link>

    </div>
  );
}

export default GameCard;
