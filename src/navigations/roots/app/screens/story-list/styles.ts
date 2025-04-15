import {Dimensions, StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, CARD_WIDTH, stories} from './constants';

const CONTAINER_LIST_WIDTH = CARD_WIDTH * stories.length;
const PADDING_LEFT = Dimensions.get('window').width - CARD_WIDTH;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  containerList: {
    alignItems: 'center',
    width: CONTAINER_LIST_WIDTH + PADDING_LEFT,
  },
});
