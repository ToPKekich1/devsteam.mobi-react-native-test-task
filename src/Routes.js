import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {globalStyles} from './styles';
import {GalleryScreen} from './screens/GalleryScreen';
import {ImageScreen} from './screens/ImageScreen';
import Icon from 'react-native-vector-icons/Entypo';
import {Text} from 'react-native';

const Stack = createStackNavigator();

export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: globalStyles.header,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
        initialRouteName="Gallery">
        <Stack.Screen
          name="Gallery"
          options={{
            title: (
              <Icon name="images" size={30} color="#fff">
                <Text> Gallery</Text>
              </Icon>
            ),
          }}
          component={GalleryScreen}
        />
        <Stack.Screen
          name="Image"
          options={({route}) => ({
            title: (
              <Icon name="image-inverted" size={18} color="#fff">
                <Text> Photo by {route.params.authorName}</Text>
              </Icon>
            ),
          })}
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
