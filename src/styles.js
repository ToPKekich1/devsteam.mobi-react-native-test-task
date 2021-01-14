import {StyleSheet} from 'react-native';

const center = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F44336',
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#D32F2F',
  },
  inputBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  input: {
    fontSize: 25,
    padding: 10,
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
  },
  postWrapper: {
    overflow: 'hidden',
    height: 150,
    marginBottom: 15,
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: '#e49599',
    borderRadius: 20,
  },
  postImage: {
    flex: 2,
    backgroundColor: '#fff',
    borderRightWidth: 5,
  },
  postInfoBlock: {
    flex: 1,
    backgroundColor: '#daa69d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
  },
  imageScreenContainer: {
    ...center,
    backgroundColor: '#F44336',
    padding: 10,
  },
  imageScreen: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch',
  },
  loader: {
    ...center,
  },
});
