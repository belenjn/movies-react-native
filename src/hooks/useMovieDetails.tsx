/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {FullMovie} from '../interfaces/movieInterface';

interface MovieDetails {
  cast: any[];
  isLoading: boolean;
  fullMovie: FullMovie;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    const resp = await movieDB.get<FullMovie>(`/${movieId}`);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    state,
  };
};
