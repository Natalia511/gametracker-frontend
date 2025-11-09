import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio.jsx";
import GameDetails from "./paginas/gamedetails.jsx";
import Categorias from "./paginas/categorias.jsx";
import Navbar from "./componentes/Navbar.jsx";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <header className="Header">
        <h1>ArcadiaLand</h1>
      </header>

      <main className="seccion">
        <p>¡Bienvenidos a la mejor biblioteca de juegos!</p>

        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/gamedetails/:id" element={<GameDetails />} />
          <Route path="/categorias/:categoria" element={<Categorias />} />
        </Routes>
      </main>

 <main className="seccion">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/gamedetails/:id" element={<GameDetails />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
