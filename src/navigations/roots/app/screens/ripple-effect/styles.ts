import {StyleSheet} from 'react-native';

const SIZE = 200;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: SIZE,
    height: SIZE,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 20,
  },
});
