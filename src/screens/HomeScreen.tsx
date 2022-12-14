/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MovieCard} from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';
import {useEffect} from 'react';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upComing, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const {setMainColors} = useContext(GradientContext);

  // useEffect(() => {
  //   if (nowPlaying.length > 0) {
  //     getPosterColors(0);
  //   }
  // }, [nowPlaying,]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="blue" size={20} />
      </View>
    );
  }

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri: string = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const [primary = 'black', secondary = 'grey'] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carousel */}
          <View
            style={{
              height: 440,
            }}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MovieCard movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* Peliculas populares */}
          <HorizontalSlider title="Popular movies" movies={popular} />
          <HorizontalSlider title="Top rated" movies={topRated} />
          <HorizontalSlider title="Up coming" movies={upComing} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
