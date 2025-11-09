import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerJuegoPorId } from "../api/juegos";

function GameDetails() {
  const { id } = useParams(); 
  const [game, setGame] = useState(null); 
  const [review, setReview] = useState(""); 
  const [reviews, setReviews] = useState([]); 

 
  useEffect(() => {
    const CargarJuego = async () => {
      try {
        const data = await obtenerJuegoPorId(id);
        setGame(data);
        setReviews(data.reviews || []); 
      } catch (error) {
        console.error("Error al cargar el juego:", error);
      }
    };
    CargarJuegoa();
  }, [id]);

  const AgregarReview = async() => {
    if (!nuevaReview.trim()) return;

     try {
      const res = await axios.post(`http://localhost:3000/api/reseñas`, {
        juegoId: id,
        texto: nuevaReview,
      });

       setReviews([...reviews, res.data.texto]);
      setNuevaReview("");
    } catch (error) {
      console.error("Error al agregar la reseña:", error);
    }
  };


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
 <div className="agregar-review">
        <textarea
          value={nuevaReview}
          onChange={(e) => setNuevaReview(e.target.value)}
          placeholder="Escribe tu reseña..."
        />
        <button onClick={agregarReview}>Enviar reseña</button>

</div>
      </ul>
    </div>

  );
}

export default GameDetails;
