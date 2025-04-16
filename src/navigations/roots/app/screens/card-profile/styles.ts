import {StyleSheet} from 'react-native';
import {CARD_PROFILE_HEIGHT, CARD_PROFILE_WIDTH} from './constants';

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    position: 'absolute',
    width: CARD_PROFILE_WIDTH,
    height: CARD_PROFILE_HEIGHT,
    zIndex: 800,
  },
  cardProfile: {
    backgroundColor: '#212121',
    borderRadius: 16,
    width: CARD_PROFILE_WIDTH,
    height: CARD_PROFILE_HEIGHT,
  },
});

export default styles;
