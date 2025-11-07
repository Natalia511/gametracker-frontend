import {Link} from "react-router-dom";

function navbar() {
    return (
        <nav>
            <link to ="/">Inicio</link>
            <link to ="/categorias/accion">Categorías</link>
            <link to ="/mibiblioteca">Mi Biblioteca</link>
            <link to ="/perfil">Perfil</link>
        </nav>
    );
}

export default navbar;