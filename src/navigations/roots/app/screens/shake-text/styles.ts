import {StyleSheet} from 'react-native';

export const PADDING_HORIZONTAL = 16;
const BUTTON_SIZE = 50;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: '100%',
    gap: PADDING_HORIZONTAL,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#000000',
    width: BUTTON_SIZE,
    aspectRatio: 1,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 80,
    fontWeight: 'bold',
  },
});
