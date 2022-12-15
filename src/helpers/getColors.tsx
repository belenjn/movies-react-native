import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});

  let primary;
  let secondary;

  switch (colors.platform) {
    case 'android':
      primary = colors.dominant;
      secondary = colors.average;
      break;

    case 'ios':
      primary = colors.primary;
      secondary = colors.secondary;
  }
  return [primary, secondary];
};
