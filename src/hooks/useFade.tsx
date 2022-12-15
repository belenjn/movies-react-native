import {useRef} from 'react';
import {Animated} from 'react-native';

interface Props {
  toValueFadeIn: number;
  durationFadeIn: number;
  useNativeDriverFadeIn: boolean;
  toValueFadeOut: number;
  durationFadeOut: number;
  useNativeDriverFadeOut: boolean;
}

export const useFade = ({
  toValueFadeIn,
  durationFadeIn,
  useNativeDriverFadeIn,
  toValueFadeOut,
  durationFadeOut,
  useNativeDriverFadeOut,
}: Props) => {
  const opacity = useRef(new Animated.Value(0)).current; // Cuando se crea ese fadein, se crea en opacidad 0.

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: toValueFadeIn,
      duration: durationFadeIn,
      useNativeDriver: useNativeDriverFadeIn,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: toValueFadeOut,
      duration: durationFadeOut,
      useNativeDriver: useNativeDriverFadeOut,
    }).start();
  };

  return {opacity, fadeIn, fadeOut};
};
