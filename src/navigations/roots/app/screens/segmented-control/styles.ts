import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from './constants';

export const PADDING_HORIZONTAL = 16;
export const ITEM_WIDTH = Dimensions.get('window').width / 3 - 16 * 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: PADDING_HORIZONTAL,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabs: {
    borderRadius: 16,
    flexDirection: 'row',
    backgroundColor: COLORS.baseGray05,
    position: 'relative',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: ITEM_WIDTH,
    paddingVertical: 16,
  },
  activeBox: {
    position: 'absolute',
    width: ITEM_WIDTH - PADDING_HORIZONTAL,
    height: '80%',
    top: '10%',
    backgroundColor: COLORS.background,
    borderRadius: 16,
  },
  text: {
    zIndex: 2,
    color: COLORS.baseGray80,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
