import {StyleSheet} from 'react-native';

const LIST_ITEM_COLOR = '#03f8f8';
const BUTTON_COLOR = '#000000';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContainer: {
    paddingVertical: 50,
  },
  button: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: BUTTON_COLOR,
    position: 'absolute',
    bottom: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50 / 2,
    zIndex: 2,
  },
});
