import { useEffect, useState} from 'react';
import { getAllGames } from '../services/gamesService.jsx';
import GameCard from '../componentes/gameCard.jsx';

function inicio() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const data = await getAllGames();
                setGames(data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);
    return (
        <div>
            <h2>Biblioteca de Juegos</h2>
            <div className="game-list">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}
export default inicio;
