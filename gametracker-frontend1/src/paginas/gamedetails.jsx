import { useEffects, useState} from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../api/juegos"
import axios from "axios";

function gamedetails() {
 const { id } = useParams();
 const [game, setGame] = useState(null);
 const [review, serReview] = useState("");

}

 useEffect => {
    const fetchGame = async () => {
        try {
            const data = await getGameById(id);
            setGame(data);
            setReviews(data.reviews || []);
        } catch (error) {
            console.error("Error al cargar el juego")

        }
        };
        fetchGame();
    } 
    


    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        if (!review.trim()) return;

    }

    try {
        const res = await axios.post('http://localhost:5173/')
        text: review,
    
         
      setReviews(res.data.reviews); // actualiza lista con la nueva
      setReview("");
     
    

 if (!game) 
    
    return (
        <div>
            src={game.image}
            alt={game.title}
        </div>
    
    )}

export default gamedetails
