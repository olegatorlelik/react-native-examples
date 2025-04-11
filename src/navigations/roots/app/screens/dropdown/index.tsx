import {FC} from 'react';
import {styles} from './styles';
import {Image, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
} from 'react-native-reanimated';
import Menu from './components/menu';
import {IOption, MENU_KEY} from './types';

const options: IOption[] = [
  {label: 'Home', iconName: MENU_KEY.HOME},
  {label: 'Profile', iconName: MENU_KEY.USER},
  {label: 'Settings', iconName: MENU_KEY.SETTINGS},
  {label: 'Notifications', iconName: MENU_KEY.BELL},
  {label: 'Help', iconName: MENU_KEY.HELP},
];

const header = {
  label: 'Header',
  iconName: 'ellipsis1',
} as const;

const Dropdown: FC = () => {


  return (
    <View style={styles.container}>
      <Menu header={header} options={options} />
    </View>
  );
};

export default Dropdown;
