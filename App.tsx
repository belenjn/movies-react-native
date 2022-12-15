import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {Navigation} from './src/navigaton/Navigation';
import {StatusBar} from 'react-native';
import {FadeScreen} from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {/* <Navigation /> */}
      <FadeScreen />
    </NavigationContainer>
  );
};

export default App;
