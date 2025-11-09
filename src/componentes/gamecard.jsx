import { Link } from "react-router-dom";

function GameCard({ juego }) {
  return (
    <div className="game-card">
      <h3>{juego.titulo}</h3>
      <p><strong>Categoría:</strong> {juego.categoria}</p>
      <p><strong>Descripción:</strong> {juego.descripcion}</p>
      <p><strong>Clasificación:</strong> {juego.clasificacion}</p>
       <Link to={`/gamedetails/${juego._id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
}

      {juego.reseñas && juego.reseñas.length > 0 ? (
        <div className="reseñas">
          <strong>Reseñas:</strong>
          <ul>
            {juego.reseñas.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay reseñas aún.</p>
      )}
  

export default GameCard;
