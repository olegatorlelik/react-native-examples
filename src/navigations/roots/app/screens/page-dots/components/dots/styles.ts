import {StyleSheet} from 'react-native';
import {
  CONTAINER_GAP,
  DOT_SIZE,
  CONTAINER_VERTICAL_PADDING,
  CONTAINER_HORIZONTAL_PADDING,
} from './constants';

export const styles = StyleSheet.create({
  dots: {
    position: 'absolute',
    flexDirection: 'row',
    gap: CONTAINER_GAP,
    alignItems: 'center',
    height: DOT_SIZE + CONTAINER_VERTICAL_PADDING,
    paddingHorizontal: CONTAINER_HORIZONTAL_PADDING,
  },
  progress: {
    position: 'absolute',
    height: '100%',
    borderRadius: DOT_SIZE + CONTAINER_VERTICAL_PADDING / 2,
    backgroundColor: '#6fd30d',
  },
});
