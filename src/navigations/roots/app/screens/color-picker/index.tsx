import {View} from 'react-native';
import {FC} from 'react';
import {styles} from './styles';
import Picker from './components/picker';

const COLORS = [
  'red',
  'purple',
  'blue',
  'cyan',
  'green',
  'yellow',
  'orange',
  'black',
  'white',
];

const ColorPickerScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer} />
      <View style={styles.bottomContainer}>
        <Picker colors={COLORS} start={{x: 0, y: 0}} end={{x: 1, y: 0}} />
      </View>
    </View>
  );
};

export default ColorPickerScreen;
