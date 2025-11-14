import { Link } from "react-router-dom";
import "./ListaCategorias.css";

function ListaCategorias() {
  const categorias = [
    "accion",
    "aventura",
    "autos",
    "estrategia",
    "deportes",
    "terror",
    "rol"
  ];

  return (
    <div className="lista-categorias">
      <h2>Categorías</h2>
      <ul>
        {categorias.map((cat) => (
          <li key={cat}>
            <Link to={`/categorias/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCategorias;
