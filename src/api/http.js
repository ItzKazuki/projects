import axios from 'axios'

export const movieApiKey = import.meta.env.VITE_API_MOVIEDB;
export const movieApiBearer = import.meta.env.VITE_API_MOVIEDB_BEARER;

const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default http;