import {StyleSheet} from 'react-native';
import {DOT_SIZE} from '../../constants';

export const styles = StyleSheet.create({
  item: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: 'white',
    zIndex: 2,
  },
});
