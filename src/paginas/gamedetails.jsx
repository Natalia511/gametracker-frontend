import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerJuegoPorId } from "../api/juegos";

function GameDetails() {
  const { id } = useParams(); 
  const [game, setGame] = useState(null); 
  const [review, setReview] = useState(""); 
  const [reviews, setReviews] = useState([]); 

 
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const data = await obtenerJuegoPorId(id);
        setGame(data);
        setReviews(data.reviews || []); 
      } catch (error) {
        console.error("Error al cargar el juego:", error);
      }
    };
    fetchGame();
  }, [id]);

  if (!game) return <p>Cargando juego...</p>;

  return (
    <div>
      <h2>{game.titulo}</h2>
      <p>{game.descripcion}</p>

      <h3>Reseñas:</h3>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((r, index) => <li key={index}>{r}</li>)
        ) : (
          <li>No hay reseñas aún.</li>
        )}
      </ul>
    </div>
  );
}

export default GameDetails;
