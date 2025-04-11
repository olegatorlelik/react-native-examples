import {StyleSheet} from 'react-native';

export const DROP_DOWN_HEIGHT = 80;
export const MARGIN_BOTTOM = 10;

export const styles = StyleSheet.create({
  component: {
    alignSelf: 'center',
    paddingHorizontal: 16,
    height: DROP_DOWN_HEIGHT,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#676767',
    width: '95%',
    marginBottom: 10,
    borderRadius: 16,
    gap: 16,
  },
  label: {
    fontSize: 24,
    color: '#ffe4e4',
  },
});
