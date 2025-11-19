import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio.jsx";
import GameDetails from "./paginas/gamedetails.jsx";
import Categorias from "./paginas/categorias.jsx";
import Navbar from "./componentes/Navbar.jsx";
import ListaCategorias from "./componentes/ListaCategorias.jsx";
import Biblioteca from "./paginas/bibloteca.jsx";

import "./App.css";
import "./paginas/categorias.css";

function App() {
  return (
    <div className="app-container">
      <header className="Header">
        <h1>ArcadiaLand</h1>
      </header>

      <main className="titulo1">
        <p>¡Bienvenidos a la mejor biblioteca de juegos!</p>
      </main>

      <section className="seccion">
        <Navbar className="menu" />

        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/categorias" element={<ListaCategorias />} />

          <Route path="/categorias/:categoria" element={<Categorias />} />

          <Route path="/gamedetails/:id" element={<GameDetails />} />
          <Route path="/resenas/:id" element={<GameDetails />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
