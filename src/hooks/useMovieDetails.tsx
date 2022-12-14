/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useState} from 'react';

interface MovieDetails {
  cast: any[];
  isLoading: boolean;
  fullMovie: any;
}

export const useMovieDetails = () => {
  const [state, setState] = useState<MovieDetails>();
};
