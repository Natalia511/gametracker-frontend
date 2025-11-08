import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio.jsx";
import GameDetails from "./paginas/gamedetails.jsx";
import Categorias from "./paginas/categorias.jsx";
import Navbar from "./componentes/Navbar.jsx";

function App() {
  const nombre = "Biblioteca de Juegos";

  return (
    <div>
      <header>
        <h1>Game Tracker</h1>
      </header>

      <main>
        <p>¡Bienvenidos a la mejor biblioteca de juegos!</p>

        {/* Navbar debe ser con mayúscula */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/gamedetails/:id" element={<GameDetails />} />
          <Route path="/categorias/:categoria" element={<Categorias />} />
        </Routes>
      </main>

      <menu>
        <ul>
          <li>Inicio — {nombre}</li>
          <li>Juegos</li>
          <li>Mi Biblioteca</li>
          <li>Perfil</li>
        </ul>
      </menu>
    </div>
  );
}

export default App;
