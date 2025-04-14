import {StyleSheet} from 'react-native';

export const LIST_ITEM_BORDER_COLOR = '#fc5b00';
export const LIST_ITEM_COLOR = 'rgba(252,91,0,0.2)';
export const LABEL_ACTIVE_COLOR = '#ffc2a2';
export const LABEL_COLOR = '#ffffff';

export const styles = StyleSheet.create({
  component: {
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: LIST_ITEM_BORDER_COLOR,
  },
  pressable: {
    height: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: LABEL_COLOR,
  },
  checkBoxContainer: {
    borderWidth: 1,
    padding: 4,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: LIST_ITEM_COLOR,
  },
});
