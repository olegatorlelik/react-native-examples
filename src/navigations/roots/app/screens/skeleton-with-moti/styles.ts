import {StyleSheet} from 'react-native';

export const BUTTON_WIDTH = 150;
export const COUNTER_ROUND_SIZE = 50;
export const DEFAULT_HORIZONTAL_PADDING = 16

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer: {
    height: 75,
    width: BUTTON_WIDTH,
    backgroundColor: '#111111',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: DEFAULT_HORIZONTAL_PADDING,
    paddingVertical: DEFAULT_HORIZONTAL_PADDING / 2,
  },
  counter: {
    zIndex: 1,
    borderRadius: COUNTER_ROUND_SIZE / 2,
    height: COUNTER_ROUND_SIZE,
    width: COUNTER_ROUND_SIZE,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
  },
});
