import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
export const GRADIENT_WIDTH = width * 0.9;
export const CIRCLE_PICKER_SIZE = 45;
export const INTERNAL_PICKER_SIZE = CIRCLE_PICKER_SIZE / 2;

export const styles = StyleSheet.create({
  picker: {
    justifyContent: 'center',
    width: GRADIENT_WIDTH,
  },
  gradient: {width: '100%', height: 40, borderRadius: 20},
  circlePicker: {
    position: 'absolute',
    width: CIRCLE_PICKER_SIZE,
    height: CIRCLE_PICKER_SIZE,
    borderRadius: CIRCLE_PICKER_SIZE / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  internalPicker: {
    width: INTERNAL_PICKER_SIZE,
    height: INTERNAL_PICKER_SIZE,
    borderRadius: INTERNAL_PICKER_SIZE / 2,
  },
});
