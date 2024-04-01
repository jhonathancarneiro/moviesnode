// tmdbService.ts

import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.TMDB_API_KEY;
export const fetchMoviesFromTMDb = async (): Promise<any> => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?language=pt-br&api_key=${apiKey}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes do TMDb:", error);
    throw error;
  }
};

export const fetchTopRatedMovies = async (): Promise<any> => {
  try {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=pt-br&api_key=${apiKey}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes mais bem avaliados do TMDb:", error);
    throw error;
  }
};

export const fetchUpcomingMovies = async (): Promise<any> => {
  try {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=pt-br&api_key=${apiKey}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes futuros do TMDb:", error);
    throw error;
  }
};

export const fetchNowPlaying = async (): Promise<any> => {
  try {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=pt-br&api_key=${apiKey}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar ao encontrar filmes em cartaz:", error);
    throw error;
  }
};
