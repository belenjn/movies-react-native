/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const movies = resp.data.results;
    setMoviesInCinema(movies);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {moviesInCinema, isLoading};
};
