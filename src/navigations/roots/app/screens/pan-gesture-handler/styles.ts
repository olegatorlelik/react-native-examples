import {StyleSheet} from 'react-native';

const SIZE = 100;
const CIRCLE_SIZE = SIZE * 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    alignItems: 'center',
    justifyContent: 'center',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 5,
    borderColor: 'rgba(0,0,256, 0.5)',
  },
  box: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0,0,256, 0.5)',
    borderRadius: 10,
  },
});
