import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { obtenerResenasPorJuego, agregarResena } from "../api/Resenas";
import { obtenerJuegoPorId } from "../api/juegos";

function GameDetails() {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [reseñas, setReseñas] = useState([]);
  const [nueva, setNueva] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const j = await obtenerJuegoPorId(id);
        setJuego(j);
        const r = await obtenerResenasPorJuego(id);
        setReseñas(r);
      } catch (err) {
        console.error("Error cargar detalles:", err);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, [id]);

  const handleEnviar = async () => {
    if (!nueva.trim()) return;
    try {
      const payload = {
        nombreUsuario: "Usuario anónimo",
        clasificacion: 5,
        comentario: nueva,
        juegoid: id,
      };
      const created = await agregarResena(payload);
      setReseñas((p) => [created, ...p]);
      setNueva("");
    } catch (err) {
      console.error("Error al enviar reseña:", err);
    }
  };

  if (cargando) return <p>Cargando...</p>;
  if (!juego) return <p>Juego no encontrado</p>;

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <h2>{juego.titulo}</h2>
        <p>{juego.descripcion}</p>
        <img src={juego.imagen} alt={juego.titulo} className="game-image" />
        <h4>Plataforma: {juego.plataforma}</h4>
        <h4>Lanzamiento: {new Date(juego.lanzamiento).getFullYear()}</h4>
        <h4>Desarrollador: {juego.desarrollador}</h4>

        <h2>Reseñas</h2>
        {reseñas.length ? (
          <ul>
            {reseñas.map((r) => (
              <li key={r._id}>
                <strong>{r.nombreUsuario}</strong> ({r.clasificacion}/5) — {r.comentario}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay reseñas aún.</p>
        )}

        <textarea value={nueva} onChange={(e) => setNueva(e.target.value)} />
        <button onClick={handleEnviar}>Enviar reseña</button>

        <Link to="/">← Volver</Link>
      </div>
    </div>
  );
}

export default GameDetails;
