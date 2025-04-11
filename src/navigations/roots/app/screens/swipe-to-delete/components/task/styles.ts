import {StyleSheet} from 'react-native';

export const LIST_ITEM_HEIGHT = 70;

export const styles = StyleSheet.create({
  task: {
    width: '100%',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '10%',
  },
});
