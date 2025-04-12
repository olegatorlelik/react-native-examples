import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const PADDING_HORIZONTAL = 16;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: PADDING_HORIZONTAL,
    flexDirection: 'row',
  },
  button: {
    height: 60,
    width: '100%',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.text,
  },
});
