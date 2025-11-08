import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#222",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Inicio
      </Link>
      <Link to="/categorias/accion" style={{ color: "white", textDecoration: "none" }}>
        Categorías
      </Link>
      <Link to="/mibiblioteca" style={{ color: "white", textDecoration: "none" }}>
        Mi Biblioteca
      </Link>
      <Link to="/perfil" style={{ color: "white", textDecoration: "none" }}>
        Perfil
      </Link>
    </nav>
  );
}

export default Navbar;
