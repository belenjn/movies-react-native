/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import {FullMovie} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';
import {FlatList} from 'react-native-gesture-handler';

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
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Overview
        </Text>
        <Text style={{fontSize: 16}}>{fullMovie.overview}</Text>
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text style={{fontSize: 16}}>
          {currencyFormatter.format(fullMovie.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actors
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};
