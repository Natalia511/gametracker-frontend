import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Categorias() {
  const { categoria } = useParams(); 
  const [juegos, setJuegos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      setCargando(true);

      try {
        if (!categoria) {
         
          const res = await axios.get("http://localhost:3000/api/juegos/categorias");
          setCategorias(res.data);
        } else {
         
          const res = await axios.get(
            `http://localhost:3000/api/juegos?categoria=${categoria}`
          );
          setJuegos(res.data);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, [categoria]);

 
  if (cargando) return <p>Cargando...</p>;

  
  if (!categoria) {
    return (
      <div className="categoria-container">
        <h2 className="categoria-titulo">Categorías disponibles</h2>

        <ul className="categoria-lista">
          {categorias.map((cat) => (
            <li key={cat}>
              <Link to={`/categorias/${cat}`} className="categoria-item">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="categoria-container">
      <h2 className="categoria-titulo">Categoría: {categoria}</h2>

      {juegos.length === 0 ? (
        <p>No hay juegos disponibles en esta categoría.</p>
      ) : (
        <div className="games-container">
          {juegos.map((juego) => (
            <Link
              to={`/gamedetails/${juego._id}`}
              key={juego._id}
              className="game-card"
            >
              <h3>{juego.titulo}</h3>
              <p>{juego.descripcion.slice(0, 60)}...</p>
              <span>{juego.genero}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categorias;
