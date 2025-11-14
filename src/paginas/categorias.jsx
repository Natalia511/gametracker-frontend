import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Categorias() {
  const { categoria } = useParams(); // Ej: "Acción", "Aventura", etc.
  const [juegos, setJuegos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarJuegos = async () => {
      try {
        // 🔹 Llama a tu backend (ajusta el endpoint según tu API)
        const res = await axios.get(`http://localhost:3000/api/juegos?categoria=${categoria}`);
        setJuegos(res.data);
      } catch (error) {
        console.error("Error al cargar los juegos por categoría:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarJuegos();
  }, [categoria]);

  if (cargando) return <p>Cargando juegos de {categoria}...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Categoría: {categoria}
      </h2>

      {juegos.length === 0 ? (
        <p>No hay juegos disponibles en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {juegos.map((juego) => (
            <Link
              to={`/gamedetails/${juego._id}`}
              key={juego._id}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{juego.titulo}</h3>
              <p className="text-sm text-gray-600 mb-1">
                {juego.descripcion.slice(0, 60)}...
              </p>
              <span className="text-sm font-bold text-blue-500">
                {juego.categoria}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categorias;
