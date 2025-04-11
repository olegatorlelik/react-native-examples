import {StyleSheet, Dimensions} from 'react-native';

const SIZE = Dimensions.get('window').width * 0.7;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: SIZE,
    height: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZE / 2,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  text: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
});
