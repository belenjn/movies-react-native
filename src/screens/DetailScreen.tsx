/* eslint-disable @typescript-eslint/no-unused-vars */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigaton/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
import {useNavigation} from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({navigation, route}: Props) => {
  const movie = route.params;
  const uri: string = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const {isLoading, cast, fullMovie} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View>
        <View style={styles.marginContainer}>
          <Text style={styles.subtitle}>{movie.original_title}</Text>
          <Text style={styles.title}>{movie.title}</Text>
        </View>

        {isLoading ? (
          <ActivityIndicator size={30} color="blue" />
        ) : (
          <MovieDetails fullMovie={fullMovie!} cast={cast} />
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.backButton}>
        <Icon color="white" name="arrow-back-outline" size={30} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 10,
  },
});
