/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MovieCard} from './MovieCard';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        height: 270,
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MovieCard movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
