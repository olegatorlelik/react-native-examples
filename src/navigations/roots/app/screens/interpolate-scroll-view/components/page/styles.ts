import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');
const SIZE = width * 0.7;

export const styles = StyleSheet.create({
  page: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0, 0, 256, 0.4)',
  },
  textWrapper: {
    position: 'absolute',
  },
  text: {
    fontSize: 40,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
