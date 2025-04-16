import {Dimensions, StyleSheet} from 'react-native';
import {GAP, BAR_HEIGHT} from '../../constants';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  weeklyBarChart: {
    height: BAR_HEIGHT,
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: GAP,
    alignItems: 'flex-end',
  },
});

export default styles;
