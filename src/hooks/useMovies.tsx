/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBNowResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBNowResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBNowResponse>('/top_rated');
    const upComingPromise = movieDB.get<MovieDBNowResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upComing: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {...moviesState, isLoading};
};
