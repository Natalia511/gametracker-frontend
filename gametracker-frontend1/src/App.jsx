import {Routes, Route} from 'react-router-dom';
import inicio from './paginas/inicio.jsx';
import gamedetails from './paginas/gamedetails.jsx';  
import categorias from './paginas/categorias.jsx';
import navbar from './componentes/navbar.jsx';


function app() {
  return <div>
    const nombre = "Bibloteca de Juegos";
    <header>
      <h1>Game Tracker</h1>
    </header>
    <main>
      <p>¡Bienvenidos a la mejor bibloteca de juegos!</p>

      <navbar />

      <Routes>
        <Route path='/' element={<inicio />} />
        <Route path='/gamedetails/:id' element={<gamedetails />} />
        <Route path='/categorias/:categoria' element={<categorias />} />
      </Routes>

    
    </main>
    <menu>
      <ul>
        <li>Inicio {nombre}</li>
        <li>Juegos</li>
        <li>Mi Biblioteca</li>
        <li>Perfil</li>
      </ul>
    </menu>
    </div>;
}

export default app; 