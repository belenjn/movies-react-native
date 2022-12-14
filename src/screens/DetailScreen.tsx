/* eslint-disable @typescript-eslint/no-unused-vars */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigaton/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailScreen = ({navigation, route}: Props) => {
  const movie = route.params;
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};
