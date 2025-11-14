import axios from "axios";
const API_URL = "http://localhost:3000/api";

export const obtenerResenasPorJuego = async (juegoId) => {
  const res = await axios.get(`${API_URL}/resenas/juego/${juegoId}`);
  return res.data;
};

export const agregarResena = async (payload) => {
  const res = await axios.post(`${API_URL}/resenas`, payload);
  return res.data;
};
