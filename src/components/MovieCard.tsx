/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MovieCard = ({movie, height = 420, width = 300}: Props) => {
  const uri: string = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <View
      style={{
        width,
        height,
        marginHorizontal: 8,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 5,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
});
