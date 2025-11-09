import axios from 'axios';

const API_URL = 'http://localhost:3000/api/juegos/';

export const obtenerJuegos = async () => {  
    const res = await axios.get(API_URL);
    return res.data;
}

export const obtenerJuegoPorId = async (id) => {
    const res = await axios.get(`${API_URL}${id}/`);
    return res.data;
}

export const obtenerJuegosPorCategoria = async (categoria) => {
    const res = await axios.get(`${API_URL}?categoria=${categoria}`);
    return res.data;
}

export const buscarJuegos = async (query) => {
    const res = await axios.get(`${API_URL}?search=${query}`);
    return res.data;
}