import React from 'react';
import {Image, View} from 'react-native';
import {globalStyles} from '../styles';

export const ImageScreen = ({route}) => {
  console.log(route.params.imageUrl);
  return (
    <View style={globalStyles.imageScreenContainer}>
      <Image
        style={globalStyles.imageScreen}
        source={{
          uri: route.params.imageUrl,
        }}
      />
    </View>
  );
};
