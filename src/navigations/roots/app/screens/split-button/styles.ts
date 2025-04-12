import {StyleSheet} from 'react-native';
import {COLORS} from './constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
  },
  listContainer: {
    gap: 10,
  },
});
