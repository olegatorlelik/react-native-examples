import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');
const SIZE = width * 0.7;

export const styles = StyleSheet.create({
  page: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
