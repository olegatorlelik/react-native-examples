import {FC} from 'react';
import Bell from './assets/bell';
import Home from './assets/home';
import User from './assets/user';
import Help from './assets/help';
import Settings from './assets/settings';
import {Text} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {IOption, MENU_KEY} from '../../../../types';
import {styles, DROP_DOWN_HEIGHT, MARGIN_BOTTOM} from './styles';

const icons = {
  [MENU_KEY.BELL]: Bell,
  [MENU_KEY.HOME]: Home,
  [MENU_KEY.SETTINGS]: Settings,
  [MENU_KEY.USER]: User,
  [MENU_KEY.HELP]: Help,
};

interface IItem {
  iconName: IOption['iconName'] | 'ellipsis1';
  label: string;
}

interface IProps extends IItem {
  index: number;
  itemsCount: number;
  isExpanded: SharedValue<boolean>;
}

const Item: FC<IProps> = ({iconName, label, index, itemsCount, isExpanded}) => {
  const Icon = iconName === 'ellipsis1' ? null : icons[iconName];

  const fullDropDownHeight = (DROP_DOWN_HEIGHT + MARGIN_BOTTOM) * itemsCount;
  const expandedState = (DROP_DOWN_HEIGHT + MARGIN_BOTTOM) * index;
  const collapsedState = fullDropDownHeight / 2 - DROP_DOWN_HEIGHT;

  const rStyle = useAnimatedStyle(() => {
    return {
      zIndex: itemsCount - index,
      top: withSpring(isExpanded.value ? expandedState : collapsedState),
      transform: [
        {scale: withSpring(isExpanded.value ? 1 : 1 - index * 0.05)},
        {translateY: fullDropDownHeight / 2},
      ],
    };
  });

  const toggleCollapse = () => {
    if (index !== 0) {
      return;
    }

    isExpanded.value = !isExpanded.value;
  };

  return (
    <Animated.View
      style={[styles.component, rStyle]}
      onTouchEnd={toggleCollapse}>
      {Icon && <Icon />}
      <Text style={styles.label}>{label}</Text>
    </Animated.View>
  );
};

export default Item;
