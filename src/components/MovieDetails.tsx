/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import {FullMovie} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  fullMovie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({fullMovie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="star-outline" size={20} color="grey" />
          <Text style={{fontSize: 15, textAlign: 'center', marginLeft: 5}}>
            {fullMovie.vote_average}
          </Text>

          <Text style={{marginLeft: 5}}>
            - {fullMovie.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
      </View>
    </>
  );
};
