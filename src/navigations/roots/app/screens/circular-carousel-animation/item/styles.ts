import {Dimensions, StyleSheet} from 'react-native';

export const LIST_ITEM_WIDTH = Dimensions.get('window').width / 4;

export const styles = StyleSheet.create({
  item: {
    width: LIST_ITEM_WIDTH,
    aspectRatio: 1,
    borderRadius: LIST_ITEM_WIDTH / 2,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    borderRadius: LIST_ITEM_WIDTH / 2,
  },
});
