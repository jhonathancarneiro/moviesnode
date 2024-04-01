import { Router, Request, Response } from "express";
import {
  fetchMoviesFromTMDb,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchNowPlaying,
} from "../services/tmdbService";

const router = Router();

router.get("/movies/popular", async (req: Request, res: Response) => {
  try {
    const movies = await fetchMoviesFromTMDb();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes do TMDb" });
  }
});

router.get("/movies/top-rated", async (req: Request, res: Response) => {
  try {
    const movies = await fetchTopRatedMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes mais bem avaliados" });
  }
});

router.get("/movies/upcoming", async (req: Request, res: Response) => {
  try {
    const movies = await fetchUpcomingMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes futuros" });
  }
});

router.get("/movies/now-playing", async (req: Request, res: Response) => {
  try {
    const movies = await fetchNowPlaying();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes em cartaz" });
  }
});

export default router;
