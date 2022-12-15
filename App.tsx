import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Navigation} from './src/navigaton/Navigation';
import {StatusBar} from 'react-native';
import {GradientProvider} from './src/context/GradientContext';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
