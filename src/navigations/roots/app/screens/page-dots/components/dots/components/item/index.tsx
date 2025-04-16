import {FC} from 'react';
import {styles} from './styles';
import Animated, {
  DerivedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type TProps = {
  i: number;
  activeIndex: DerivedValue<number>;
};

const Item: FC<TProps> = ({i, activeIndex}) => {
  const rStyle = useAnimatedStyle(() => {
    const isActive = activeIndex.value >= i;

    return {
      opacity: withTiming(isActive ? 1 : 0.7),
    };
  });

  return <Animated.View style={[styles.item, rStyle]} />;
};

export default Item;
