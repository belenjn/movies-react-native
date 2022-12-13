/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MovieCard} from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const {moviesInCinema, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="blue" size={20} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <MovieCard />
    </View>
  );
};
