import { Link } from "react-router-dom";    

function GameCard({ game }) {
    return (
        <div className="game-card">
            <img src={game.thumbnail} alt={game.title} className="game-image" />
            <h3 className="game-title">{game.title}</h3>
            <p className="game-short-description">{game.short_description}</p>
            <p className="game-genre"><strong>Género:</strong> {game.genre}</p>
            <p className="game-platform"><strong>Plataforma:</strong> {game.platform}</p>
            <Link to={`/gamedetails/${game.id}`} className="details-link">Ver Detalles</Link>
        </div>
    );
}

export default GameCard;