import {StyleSheet} from 'react-native';

const LIST_ITEM_COLOR = '#f803b3';

export const styles = StyleSheet.create({
  item: {
    height: 100,
    width: '90%',
    backgroundColor: LIST_ITEM_COLOR,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
  },
});
