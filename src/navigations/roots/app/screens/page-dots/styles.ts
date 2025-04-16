import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 2,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'black',
    width,
    height,
  },
});
