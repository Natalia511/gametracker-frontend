import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 flex justify-center gap-6 py-3 shadow-md">
      <Link className="hover:text-yellow-400" to="/">Inicio</Link>
      <Link className="hover:text-yellow-400" to="/categorias/Acción">Categorías</Link>
      <Link className="hover:text-yellow-400" to="/biblioteca">Mi Biblioteca</Link>
      <Link className="hover:text-yellow-400" to="/perfil">Perfil</Link>
    </nav>
  );
}

export default Navbar;