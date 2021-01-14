import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {globalStyles} from '../../styles';

export const Post = ({navigation, post}) => {
  return (
    <View style={globalStyles.postWrapper}>
      <View style={globalStyles.postImage}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Image', {
              imageUrl: post.urls.full,
              authorName: post.user.name,
            });
          }}>
          <Image
            style={globalStyles.image}
            source={{
              uri: post.urls.full,
            }}
          />
        </TouchableHighlight>
      </View>

      <View style={globalStyles.postInfoBlock}>
        <Text style={globalStyles.info}>Author:</Text>
        <Text style={globalStyles.info}>{post.user.name}</Text>
      </View>
    </View>
  );
};
