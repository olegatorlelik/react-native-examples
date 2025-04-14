import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    height: 180,
    aspectRatio: 3 / 4,
    backgroundColor: '#f3d5d5',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e70000',
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
  },
});
