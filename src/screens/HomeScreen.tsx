/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MovieCard} from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';

const {width: windowWidth} = Dimensions.get('window');

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
      {/* Carousel */}
      <View
        style={{
          height: 440,
        }}>
        <Carousel
          data={moviesInCinema}
          renderItem={({item}: any) => <MovieCard movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
      {/* Peliculas populares */}
      <View
        style={{
          height: 250,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>In cinema</Text>
        <FlatList
          data={moviesInCinema}
          renderItem={({item}: any) => (
            <MovieCard movie={item} height={200} width={140} />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
