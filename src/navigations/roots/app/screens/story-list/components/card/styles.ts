import {StyleSheet} from 'react-native';
import { CARD_WIDTH } from '../../constants';

export const CARD_HEIGHT = (CARD_WIDTH / 3) * 4;

export const styles = StyleSheet.create({
  component: {
    position: 'absolute',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
  },
  image: {
    borderRadius: 16,
    width: '100%',
    height: '100%',
  },
});
