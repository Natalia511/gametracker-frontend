import { Link } from "react-router-dom";
import { obtenerResenasPorJuego, agregarResena } from "../api/Resenas";

function GameCard({ juego }) {

  const agregarABiblioteca = () => {
    const favoritosGuardados = JSON.parse(localStorage.getItem("biblioteca")) || [];

    const yaExiste = favoritosGuardados.some(f => f._id === juego._id);

    if (!yaExiste) {
      favoritosGuardados.push(juego);
      localStorage.setItem("biblioteca", JSON.stringify(favoritosGuardados));
      alert(`"${juego.titulo}" agregado a tu biblioteca`);
    } else {
      alert("Este juego ya está en tu biblioteca");
    }
  };
  return (
    <div className="game-card">
      <h3>{juego.titulo}</h3>
      <p>{juego.descripcion}</p>
       <button onClick={agregarABiblioteca} className="boton-biblioteca">
       Agregar a mi biblioteca
      </button>


      <img src={juego.imagen} alt={juego.titulo} className="game-image" />

      <Link to={`/gamedetails/${juego._id}`} className="ver-resenas">
        Ver reseñas
      </Link>
    </div>
  );
}

export default GameCard;
