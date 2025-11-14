import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="menu-nav">
      <Link className="menu-link" to="/">Inicio</Link>
     <Link className="menu-link" to="/categorias">Categorías</Link>
      <Link className="menu-link" to="/biblioteca">Mi Biblioteca</Link>
      <Link className="menu-link" to="/perfil">Perfil</Link>
    </nav>
  );
}

export default Navbar;
