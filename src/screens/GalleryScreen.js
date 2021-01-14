import React from 'react';
import {
  Button,
  TextInput,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import {globalStyles} from '../styles';
import {Post} from './components/Post';
import {useDispatch, useSelector} from 'react-redux';
import {requestPosts} from '../redux/actions';

export const GalleryScreen = ({navigation}) => {
  const [title, setTitle] = React.useState('');
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.app.loading);

  const buttonHandler = () => {
    if (title.trim()) {
      dispatch(requestPosts(title));
    }
  };

  const inputHandler = (text) => {
    setTitle(text);
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.inputBlock}>
        <TextInput
          value={title}
          onChangeText={inputHandler}
          style={globalStyles.input}
          placeholder="Enter photo title"
        />
        <Button color="#E91E63" title="Find photos" onPress={buttonHandler} />
      </View>
      {loading ? (
        <ActivityIndicator
          style={globalStyles.loader}
          size="large"
          color="#000"
        />
      ) : (
        <FlatList
          style={globalStyles.post}
          data={posts}
          renderItem={({item}) => {
            return <Post navigation={navigation} post={item} />;
          }}
          keyExtractor={(item, index) => item + index}
        />
      )}
    </View>
  );
};
